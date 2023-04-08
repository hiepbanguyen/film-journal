import * as React from "react";
import { Box, Divider, Grid, Rating, Typography } from "@mui/material";
import FilmCard from "../../../common/film-card.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite.js";

export const ReviewInProfile = (props) => {
  const { title, year, ratings, watchedAt, description, favoriteCount } = props;

  return (
    <Box display={"flex"} marginTop={3}>
      <FilmCard />
      <Box>
        <Typography variant={"body1"} marginLeft={3} fontSize={20}>
          <strong>{title}</strong> <span style={{ color: "#9dbad7" }}>{year}</span>
        </Typography>
        <Box alignItems={"center"} marginLeft={3}>
          <Box display={"flex"} mt={0.5}>
            <Typography variant={"body2"}>
              <Rating defaultValue={ratings} readOnly />
            </Typography>
            <Typography variant={"body1"} marginLeft={2} color={"#fff"}>
              {watchedAt}
            </Typography>
          </Box>
          <Typography variant={"body2"} mr={1} mt={0.5}>
            {description}
          </Typography>
          <Box display={"flex"} mt={1}>
            <FavoriteIcon fontSize={"small"} />
            <Typography variant={"body2"} marginLeft={1} color={"#e4d5d5"}>
              {" "}
            </Typography>
            <Typography variant={"body2"} marginLeft={1} color={"#fff"}>
              {" "}
              {`${favoriteCount}`} likes
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const PopularReview = () => {
  return (
    <Box my={5}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"}>
          popular review
        </Typography>
        <Typography variant={"caption"} textTransform={"uppercase"}>
          more
        </Typography>
      </Box>
      <Divider variant="fullWidth" />
      <Box container color={"#fff"} mt={1}>
        {Array.from({ length: 2 }).map((i, idx) => (
          <ReviewInProfile
            key={idx}
            title={"Lorem Ipsum is simply dummy text"}
            year={"2020"}
            ratings={4}
            watchedAt={"20/12/2023"}
            description={"Lorem Ipsum is simply dummy text"}
            favoriteCount={4}
          />
        ))}
      </Box>
    </Box>
  );
};

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
          <ReviewInProfile
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
