import { Box, Container, Divider, Stack } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import ReviewFilters, { fromValues } from "./filters.jsx";
import ReviewPreview from "../../common/review-preview.jsx";
import { Link, useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { Loading } from "../../common/loading.jsx";
import PaginationBase from "../../common/pagination-base.jsx";

const filmReviewsFilters = ["Popularity", "Highest Rating", "Lowest Rating", "Most Recent", "Earliest"];

export default function AllFilmReviews() {
  const { filmId } = useParams();
  const [pageIndex, setPageIndex] = React.useState(1);
  const [filters, setFilters] = React.useState({ sort: filmReviewsFilters[0], from: fromValues[0] });
  const [{ data, loading, error }, fetchReviews] = useAxios({
    url: "Reviews/Paging",
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
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={5}>
        <Stack gap={5} width={{ sm: 170 }}>
          <NavBar />
          <ReviewFilters filterValues={filmReviewsFilters} showFrom={true} onSubmit={onSubmit} />
        </Stack>
        <Box flex={1}>
          {loading ? (
            <Loading paddingY={10} />
          ) : (
            <>
              <Box color={"#fff"} fontStyle={"italic"}>
                <b>{data?.Total}</b> {"review(s) of "}
                <Box
                  fontWeight={"bold"}
                  component={Link}
                  to={`/films/${data?.Film?.FilmID}`}
                  sx={{ ":hover": { color: "#00e8ff" } }}
                >
                  {data?.Film?.Title}
                </Box>
              </Box>
              <Stack divider={<Divider />}>
                {data?.Data?.map((i, idx) => (
                  <ReviewPreview
                    key={idx}
                    title={i.Film?.Title ?? ""}
                    poster={i.Film?.Poster_path ?? ""}
                    filmId={i.Film?.FilmID ?? ""}
                    releasedYear={i.Film?.Release_date ? new Date(i.Film?.Release_date).getFullYear() : ""}
                    content={i.Content ?? ""}
                    username={i.User?.UserName ?? ""}
                    fullname={i.User?.FullName ?? ""}
                    userAvatar={i.User?.Avatar ?? ""}
                    ratings={i.Score ?? 0}
                    likeCount={i.LikesCount ?? 0}
                    commentCount={i.CommentsCount ?? 0}
                    spoiler={i.HaveSpoiler ?? 0}
                    reviewDate={i.WatchedDate ? new Date(i.WatchedDate) : ""}
                    link={`/u/${i.User?.UserName}/reviews/${i.ReviewID}`}
                    notShowFilmCard={true}
                    notShowTitle={true}
                  />
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
