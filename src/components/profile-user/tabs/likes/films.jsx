import React from "react";
import useAxios from "axios-hooks";
import { Box, Grid } from "@mui/material";
import { Loading } from "../../../common/loading.jsx";
import FilmCard from "../../../common/film-card.jsx";
import PaginationBase from "../../../common/pagination-base.jsx";

const DefaultPageSize = 24;

export const UserLikeFilms = ({ username }) => {
  const [pageIdx, setPageIdx] = React.useState(1);
  const [{ data, loading, error }, fetchFilms] = useAxios({
    url: `Users/${username}/Profile/Like/Films`,
    method: "POST",
    data: {
      pageSize: DefaultPageSize,
      pageIndex: pageIdx,
    },
  });

  const handleChangePage = (newPage) => {
    setPageIdx(newPage);
    // fetchFilms();
  };

  return (
    <Box>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Box height={35} my={2}>
            <PaginationBase totalPage={data?.TotalPage ?? 1} pageIndex={pageIdx} onChange={handleChangePage} />
          </Box>
          {data?.Data.length > 0 && (
            <Grid container spacing={1} columns={12}>
              {data?.Data?.map((i, idx) => (
                <Grid item key={idx} xs={4} sm={3} md={2} lg={4}>
                  <FilmCard size={"100%"} link={`/films/${i?.FilmID}`} src={i?.Poster_path} />
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </Box>
  );
};
