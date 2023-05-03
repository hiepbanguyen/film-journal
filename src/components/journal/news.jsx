import JournalDivider from "./journal-divider.jsx";
import { Grid } from "@mui/material";
import { articles } from "./articles-after-spotlight.jsx";
import ArticlePreview from "./article-preview.jsx";

export default function News() {
  return (
    <>
      <JournalDivider topic={"News"} topicDesc={"Keeping up with our latest reports on films and the industry."} />
      <Grid container spacing={2} mt={3} pb={8}>
        {articles.slice(0, 3).map((i, idx) => (
          <Grid item key={idx} xs={12} md={4}>
            <ArticlePreview
              title={i.title}
              intro={i.intro}
              imgSrc={i.imgSrc}
              link={i.link}
              date={i.date}
              author={i.author}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
