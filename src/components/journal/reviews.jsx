import JournalDivider from "./journal-divider.jsx";
import { Grid } from "@mui/material";
import ArticlePreview from "./article-preview.jsx";
import { Loading } from "../common/loading.jsx";
import useAxios from "axios-hooks";

export default function Reviews() {
  const [{ data, loading }] = useAxios("Journals/ReviewsJournals");
  return (
    <>
      <JournalDivider topic={"Reviews"} topicDesc={"Our own professional movie reviews."} />
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <Grid container spacing={2} mt={3} pb={8}>
          {data?.map((i, idx) => (
            <Grid item key={idx} xs={12} md={4}>
              <ArticlePreview
                title={i?.Title}
                intro={i?.Intro}
                imgSrc={i?.Banner}
                link={`journals/${i?.JournalID}`}
                date={i?.ModifiedDate}
                author={i?.Author ? JSON.parse(i.Author.replace("\\", ""))?.name : ""}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
