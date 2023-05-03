import { Container, Divider, Grid, Typography } from "@mui/material";
import { articles } from "../articles-after-spotlight.jsx";
import ArticlePreview from "../article-preview.jsx";
import React from "react";
import PaginationBase from "../../common/pagination-base.jsx";

export const AllJournals = () => {
  const [pageIdx, setPageIdx] = React.useState(1);
  const handleChangePage = (newPage) => {
    setPageIdx(newPage);
    // fetchFilms();
  };

  return (
    <Container maxWidth={"lg"} sx={{ py: 12, color: "#9ab", fontFamily: "TiemposTextWeb,Georgia,serif,ColorEmoji" }}>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"} fontWeight={"bold"} letterSpacing={3}>
        All journals
      </Typography>
      <Divider />
      <Grid container mt={5} px={{ xs: 3, sm: 0 }}>
        {articles.map((i, idx) => (
          <Grid item key={idx} xs={12} sm={4} md={3}>
            <ArticlePreview
              key={idx}
              topic={i.topic}
              title={i.title}
              intro={i.intro}
              imgSrc={i.imgSrc}
              link={i.link}
              date={i.date}
              author={i.author}
              titleColor={"#fff"}
              small={true}
            />
          </Grid>
        ))}
      </Grid>
      <PaginationBase totalPage={2} pageIndex={pageIdx} onChange={handleChangePage} />
    </Container>
  );
};
