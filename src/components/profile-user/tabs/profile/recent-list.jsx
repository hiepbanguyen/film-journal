import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../../../home/list-preview.jsx";
import { Link, useParams } from "react-router-dom";

export const RecentList = (props) => {
  const { username } = useParams();
  const { title, films } = props;
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          recent list
        </Typography>
        <Typography variant={"caption"} mt={5}>
          {"123"}
        </Typography>
      </Box>
      <Divider variant="fullWidth" />
      <Link to={`/u/${username}/lists/id123`}>
        <Box color={"#fff"} mt={4}>
          <FilmCardsStackedFive />
          <Typography>
            {title} <span> {`${films}`} films</span>
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};
