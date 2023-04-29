import { Box, Grid } from "@mui/material";
import FilmCard from "../common/film-card.jsx";
import PaginationBase from "../common/pagination-base.jsx";
import React, { useEffect } from "react";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading";

const PageSize = 48;
export const PaginatedFilmsGrid = ({ listId }) => {
  const [pageIdx, setPageIdx] = React.useState(1);
  const [{ data, loading, error }, refetchFilms] = useAxios({
    url: `Lists/${listId}/Films`,
    method: "POST",
    data: {
      pageSize: PageSize,
      pageIndex: pageIdx,
    },
    useCache: false,
  });

  useEffect(() => {
    refetchFilms();
  }, [pageIdx]);

  const handleChangePage = (newPage) => {
    setPageIdx(newPage);
  };

  return (
    <Box mb={12}>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Grid container spacing={1} columns={24} mb={3}>
            {data?.Data.map((i, idx) => (
              <Grid item key={idx} xs={6} sm={4} md={3}>
                <FilmCard size={"100%"} link={`/films/${i?.FilmID}`} src={i?.Poster_path} />
              </Grid>
            ))}
          </Grid>
          <PaginationBase totalPage={data?.TotalPage ?? 1} pageIndex={pageIdx} onChange={handleChangePage} />
        </>
      )}
    </Box>
  );
};
