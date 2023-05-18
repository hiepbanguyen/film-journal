import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import React from "react";
import ReviewPreview from "../common/review-preview.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import PaginationBase from "../common/pagination-base.jsx";

export default function ReviewsSearch() {
  const { searchParams } = useParams();
  const [pageIndex, setPageIndex] = React.useState(1);
  const [{ data, loading }] = useAxios({
    url: `Users/review/search/${searchParams.replaceAll("%", " ")}`,
    method: "POST",
    data: {
      pageSize: 10,
      pageIndex: pageIndex,
    },
  });

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
  };

  return (
    <>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Typography color={"#fff"} fontStyle={"italic"}>
            Found {data?.Total ?? 0} review(s) matching <strong>'{searchParams}'</strong>:
          </Typography>
          <Stack>
            {data?.Data?.reviews?.map((i, idx) => (
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
                link={`/u/${i?.User?.UserName}/reviews/${i.ReviewID}`}
              />
            ))}
          </Stack>
          <PaginationBase totalPage={data?.TotalPage ?? 0} pageIndex={pageIndex} onChange={handleChangePage} />
        </>
      )}
    </>
  );
}
