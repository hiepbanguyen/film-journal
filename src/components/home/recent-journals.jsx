import { Box, Divider, Grid, Typography } from "@mui/material";
import { ArticlePreview, articles } from "../journal/articles-after-spotlight.jsx";

export const RecentJournals = () => {
  return (
    <Box mt={5}>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
        recent journals
      </Typography>
      <Divider />
      <Grid container sx={{ fontFamily: "TiemposTextWeb,Georgia,serif,ColorEmoji" }} mt={3} px={{ xs: 3, sm: 0 }}>
        {articles.map((i, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <ArticlePreview
              key={idx}
              topic={i.topic}
              title={i.title}
              intro={i.intro}
              imgSrc={i.imgSrc}
              link={i.link}
              date={i.date}
              author={i.author}
              bgColor={"#202830"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
