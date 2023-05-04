import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import ReviewFilters, { fromValues } from "./filters.jsx";
import { ListPreviewHorizontal } from "../../common/list-preview-horizontal.jsx";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import PaginationBase from "../../common/pagination-base.jsx";
import { Loading } from "../../common/loading.jsx";

const filmListsFilters = ["Popularity", "Most recent", "Earliest"];

export default function AllFilmLists() {
  const { filmId } = useParams();
  const [pageIndex, setPageIndex] = React.useState(1);
  const [filters, setFilters] = React.useState({ sort: filmListsFilters[0], from: fromValues[0] });
  const [{ data, loading, error }, fetchReviews] = useAxios({
    url: "Lists/Paging",
    method: "POST",
    data: {
      id: filmId,
      pageSize: 10,
      pageIndex: pageIndex,
      ...filters,
    },
  });

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
  };

  const onSubmit = (values) => {
    setPageIndex(1);
    setFilters(values);
  };

  return (
    <Container sx={{ mt: 10, color: "#9ab", pb: 5 }}>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={3}>
        <Stack gap={3} width={{ sm: 170 }}>
          <NavBar />
          <ReviewFilters filterValues={filmListsFilters} showFrom={true} onSubmit={onSubmit} />
        </Stack>
        <Box flex={1}>
          {loading ? (
            <Loading paddingY={10} />
          ) : (
            <>
              <Typography color={"#fff"} fontStyle={"italic"}>
                <b>{data?.Total}</b> list(s) that <b>Avatar the Airbender</b> appears in
              </Typography>
              <Stack divider={<Divider />}>
                {data?.Data?.map((i, idx) => (
                  <Box key={idx} my={2}>
                    <ListPreviewHorizontal
                      title={i.ListName ?? ""}
                      description={i.Description ?? ""}
                      fullname={i.User?.FullName ?? ""}
                      username={i.User?.UserName ?? ""}
                      userAvatar={i.User?.Avatar ?? ""}
                      favoriteCount={i.LikesCount ?? 0}
                      commentCount={i.CommentsCount ?? 0}
                      posters={i.Film}
                      films={i.FilmsCount ?? 0}
                      listLink={`/u/${i.User?.UserName}/lists/${i.ListID}`}
                    />
                  </Box>
                ))}
              </Stack>
              <PaginationBase totalPage={data?.TotalPage ?? 0} pageIndex={pageIndex} onChange={handleChangePage} />
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
}
