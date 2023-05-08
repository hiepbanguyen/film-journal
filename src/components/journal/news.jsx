import JournalDivider from "./journal-divider.jsx";
import { Grid } from "@mui/material";
import ArticlePreview from "./article-preview.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading";

export default function News() {
  const [{ data, loading }] = useAxios("Journals/NewsJournals");
  return (
    <>
      <JournalDivider topic={"News"} topicDesc={"Keeping up with our latest reports on films and the industry."} />
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
                link={`${i?.JournalID}`}
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
