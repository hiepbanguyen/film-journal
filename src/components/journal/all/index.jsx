import { Container, Divider, Grid, Typography } from "@mui/material";
import ArticlePreview from "../article-preview.jsx";
import React from "react";
import PaginationBase from "../../common/pagination-base.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../../common/loading.jsx";

export const AllJournals = () => {
  const [pageIdx, setPageIdx] = React.useState(1);
  const [{ data, loading, error }] = useAxios({
    url: `Journals/GetPaging?pageSize=12&pageIndex=${pageIdx}`,
    method: "POST",
  });

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
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Grid container mt={5} px={{ xs: 3, sm: 0 }}>
            {data?.Data?.map((i, idx) => (
              <Grid item key={idx} xs={12} sm={4} md={3}>
                <ArticlePreview
                  key={idx}
                  topic={i?.Category}
                  title={i?.Title}
                  intro={i?.Intro}
                  imgSrc={i?.Banner}
                  link={`/journals/${i?.JournalID}`}
                  date={i?.ModifiedDate}
                  author={i?.Author ? JSON.parse(i.Author.replace("\\", ""))?.name : ""}
                  titleColor={"#fff"}
                  small={true}
                />
              </Grid>
            ))}
          </Grid>
          <PaginationBase totalPage={data?.TotalPage ?? 0} pageIndex={pageIdx} onChange={handleChangePage} />
        </>
      )}
    </Container>
  );
};
