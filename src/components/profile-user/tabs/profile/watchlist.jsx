import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../../../home/list-preview.jsx";
import { Link, useParams } from "react-router-dom";

export const WatchList = (props) => {
  const { username } = useParams();
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          watchlist
        </Typography>
        <Typography variant={"caption"} mt={5}>
          {"123"}
        </Typography>
      </Box>
      <Divider variant="fullWidth" />
      <Link to={`/u/${username}/watchlist`}>
        <Box mt={4}>
          <FilmCardsStackedFive />
        </Box>
      </Link>
    </Box>
  );
};
