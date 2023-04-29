import { Box, Divider, Grid } from "@mui/material";
import FilmCard from "../common/film-card.jsx";
import PaginationBase from "../common/pagination-base.jsx";
import React, { useState } from "react";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading";
import SearchForm from "../common/search-form.jsx";

const PageSize = 48;
export const PaginatedFilmsGrid = ({ listId, children }) => {
  const [filters, setFilters] = useState(null);
  const [pageIdx, setPageIdx] = React.useState(1);
  const [{ data, loading, error }, refetchFilms] = useAxios({
    url: `Lists/${listId}/Films`,
    method: "POST",
    data: {
      pageSize: PageSize,
      pageIndex: pageIdx,
      ...filters,
    },
    useCache: false,
  });

  // useEffect(() => {
  //   refetchFilms();
  // }, [pageIdx]);

  const onSubmit = async (values) => {
    setPageIdx(1);
    setFilters(values);
    await refetchFilms();
  };

  const handleChangePage = async (newPage) => {
    setPageIdx(newPage);
    await refetchFilms();
  };

  return (
    <Box mb={12}>
      <Box mb={{ xs: 2, lg: 0 }}>
        <SearchForm onSubmit={onSubmit} />
      </Box>
      <Divider variant={"fullWidth"} sx={{ my: 3 }} />
      {children}
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
