import * as React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { RecentReviewFilm } from "../../../home/list-preview.jsx";

export const RecentReview = () => {
  return (
    <Box my={5}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"}>
          recent review
        </Typography>
        <Typography variant={"caption"} textTransform={"uppercase"}>
          more
        </Typography>
      </Box>
      <Divider variant="fullWidth" />
      <Grid container color={"#fff"} mt={1}>
        {Array.from({ length: 2 }).map((i, idx) => (
          <RecentReviewFilm
            key={idx}
            title={"Lorem Ipsum is simply dummy text"}
            year={"2020"}
            ratings={4}
            watchedAt={"20/12/2023"}
            description={"Lorem Ipsum is simply dummy text"}
            favoriteCount={4}
            // favoriteCount={4}
            // commentCount={50}
          />
        ))}
      </Grid>
    </Box>
  );
};
