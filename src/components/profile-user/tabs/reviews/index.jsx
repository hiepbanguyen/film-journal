import React from "react";
import { Box, Stack } from "@mui/material";
import PaginationBase from "../../../common/pagination-base";
import ReviewPreview from "../../../common/review-preview.jsx";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { Loading } from "../../../common/loading.jsx";

export default function ReviewsTab() {
  const { username } = useParams(); //
  const [pageIndex, setPageIndex] = React.useState(1);
  const [{ data, loading, error }] = useAxios(`Reviews/Users?pageSize=5&pageIndex=${pageIndex}&userName=${username}`);

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
  };

  return (
    <Box className="profile-reviews-tab" sx={{ color: "#9ab", marginTop: "20px", paddingBottom: "48px" }}>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Stack sx={{ mx: { md: 20 } }}>
            {data?.Data?.map((i, idx) => (
              <ReviewPreview
                key={idx}
                title={i.Film?.Title ?? ""}
                poster={i.Film?.Poster_path ?? ""}
                filmId={i.Film?.FilmID ?? ""}
                releasedYear={i.Film?.Release_date ? new Date(i.Film?.Release_date).getFullYear() : ""}
                content={i.Content ?? ""}
                ratings={i.Score ?? 0}
                likeCount={i.LikesCount ?? 0}
                commentCount={i.CommentsCount ?? 0}
                spoiler={i.HaveSpoiler ?? 0}
                reviewDate={i.WatchedDate ? new Date(i.WatchedDate) : ""}
                link={`/u/${username}/reviews/${i.ReviewID}`}
                notShowUser={true}
              />
            ))}
          </Stack>
          <PaginationBase totalPage={data?.TotalPage ?? 0} pageIndex={pageIndex} onChange={handleChangePage} />
        </>
      )}
    </Box>
  );
}
