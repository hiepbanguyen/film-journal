import { Box, Grid } from "@mui/material";
import FilmCard from "./film-card.jsx";
import PaginationBase from "./pagination-base.jsx";
import React, { useState } from "react";
import useAxios from "axios-hooks";
import SearchForm from "./search-form.jsx";
import { Loading } from "./loading.jsx";

export const PaginatedFilmsGrid = ({ fetchUrl, children, pageSize }) => {
  const [filters, setFilters] = useState(null);
  const [pageIdx, setPageIdx] = React.useState(1);
  const [{ data, loading, error }, fetchFilms] = useAxios({
    url: fetchUrl,
    method: "POST",
    data: {
      pageSize: pageSize ?? 48,
      pageIndex: pageIdx,
      ...filters,
    },
  });

  // useEffect(() => {
  //   refetchFilms();
  // }, [pageIdx]);

  const onSubmit = (values) => {
    setPageIdx(1);
    setFilters(values);
    fetchFilms({
      data: {
        pageSize: PageSize,
        pageIndex: pageIdx,
        ...filters,
      },
    });
  };

  const handleChangePage = (newPage) => {
    setPageIdx(newPage);
    fetchFilms();
  };

  return (
    <Box>
      <Box mb={{ xs: 2, lg: 0 }}>
        <SearchForm onSubmit={onSubmit} />
      </Box>
      {children}
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          {data?.Data.length > 0 && (
            <Box mb={10}>
              <Grid container spacing={1} columns={24} my={3}>
                {data?.Data.map((i, idx) => (
                  <Grid item key={idx} xs={6} sm={4} md={3}>
                    <FilmCard size={"100%"} link={`/films/${i?.FilmID}`} src={i?.Poster_path} />
                  </Grid>
                ))}
              </Grid>
              <PaginationBase totalPage={data?.TotalPage ?? 1} pageIndex={pageIdx} onChange={handleChangePage} />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
