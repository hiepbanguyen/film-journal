import * as React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { RecentReviewFilm } from "../home/list-preview.jsx";

export const RecentReview = () => {

    return (
        <Box>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
                <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
                    recent review
                </Typography>
                <Typography variant={"caption"} mt={5} textTransform={"uppercase"}>
                    more
                </Typography>
            </Box>
            <Divider variant="fullWidth" color={"#fff"} />
            <Grid container mt={0} color={"#fff"} paddingTop={3}>
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