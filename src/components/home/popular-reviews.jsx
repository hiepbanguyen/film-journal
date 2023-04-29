import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import ReviewPreview from "../common/review-preview.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";

export const PopularReviews = () => {
  const [{ data, loading, error }, refetch] = useAxios(`Reviews/Popular/Week`);

  return (
    <>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
        popular reviews this week
      </Typography>
      <Divider />
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          {data.map((i, idx) => (
            <Box mb={4} key={idx}>
              <ReviewPreview
                title={i.Film?.Title ?? ""}
                poster={i.Film?.Poster_path ?? ""}
                filmId={i.Film?.FilmID ?? ""}
                releasedYear={i.Film?.Release_date ? new Date(i.Film?.Release_date).getFullYear() : ""}
                content={i.Content ?? ""}
                username={i.User?.UserName ?? ""}
                fullname={i.User?.FullName ?? ""}
                userAvatar={i.User?.Avatar ?? ""}
                ratings={i.Rate ?? 0}
                likeCount={i.TotalLike ?? 0}
                commentCount={i.TotalComment ?? 0}
                reviewDate={i.WatchedDate ? new Date(i.WatchedDate) : ""}
                link={`/u/${i.User?.UserName}/reviews/${i.ReviewID}`}
              />
            </Box>
          ))}
        </>
      )}
    </>
  );
};
