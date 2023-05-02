import * as React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import ReviewPreview from "../../../common/review-preview.jsx";

export const PopularReviews = ({ data, username }) => {
  return (
    <Box my={7}>
      <Typography variant={"body1"} textTransform={"uppercase"} color={"#fff"}>
        popular reviews
      </Typography>
      <Divider />
      <Stack color={"#9ab"} mt={1}>
        {data.map((i, idx) => (
          <ReviewPreview
            key={idx}
            notShowUser={true}
            title={i.Film?.Title ?? ""}
            poster={i.Film?.Poster_path ?? ""}
            filmId={i.Film?.FilmID ?? ""}
            releasedYear={i.Film?.Release_date ? new Date(i.Film?.Release_date).getFullYear() : ""}
            content={i.Content ?? ""}
            ratings={i.Rate ?? 0}
            likeCount={i.LikesCount ?? 0}
            commentCount={i.CommentsCount ?? 0}
            spoiler={i.HaveSpoiler ?? 0}
            reviewDate={i.WatchedDate ? new Date(i.WatchedDate) : ""}
            link={`/u/${username}/reviews/${i.ReviewID}`}
          />
        ))}
      </Stack>
    </Box>
  );
};

export const RecentReviews = ({ data, username }) => {
  return (
    <Box my={5}>
      <Typography variant={"body1"} textTransform={"uppercase"} color={"#fff"}>
        recent reviews
      </Typography>
      <Divider />
      <Stack color={"#9ab"} mt={1}>
        {data.map((i, idx) => (
          <ReviewPreview
            key={idx}
            notShowUser={true}
            title={i.Film?.Title ?? ""}
            poster={i.Film?.Poster_path ?? ""}
            filmId={i.Film?.FilmID ?? ""}
            releasedYear={i.Film?.Release_date ? new Date(i.Film?.Release_date).getFullYear() : ""}
            content={i.Content ?? ""}
            ratings={i.Rate ?? 0}
            likeCount={i.LikesCount ?? 0}
            commentCount={i.CommentsCount ?? 0}
            spoiler={i.HaveSpoiler ?? 0}
            reviewDate={i.WatchedDate ? new Date(i.WatchedDate) : ""}
            link={`/u/${username}/reviews/${i.ReviewID}`}
          />
        ))}
      </Stack>
    </Box>
  );
};
