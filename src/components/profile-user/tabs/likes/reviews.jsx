import React from "react";
import useAxios from "axios-hooks";
import { Box, Stack } from "@mui/material";
import { Loading } from "../../../common/loading.jsx";
import PaginationBase from "../../../common/pagination-base.jsx";
import ReviewPreview from "../../../common/review-preview.jsx";

const DefaultPageSize = 5;

export const UserLikeReviews = ({ username }) => {
  const [pageIdx, setPageIdx] = React.useState(1);
  const [{ data, loading, error }, fetchFilms] = useAxios({
    url: `Users/${username}/Profile/Like/Reviews`,
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
          <Box height={35} mt={2}>
            <PaginationBase totalPage={data?.TotalPage ?? 1} pageIndex={pageIdx} onChange={handleChangePage} />
          </Box>
          <Stack color={"#9ab"}>
            {data?.Data?.map((i, idx) => (
              <Box key={idx}>
                <ReviewPreview
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
                  notShowUser={true}
                />
              </Box>
            ))}
          </Stack>
        </>
      )}
    </Box>
  );
};
