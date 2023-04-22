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
          recent lists
        </Typography>
        <Link to={"lists"}>
          <Typography variant={"caption"} textTransform={"uppercase"} mt={5} sx={{ ":hover": { color: "#40bcf4" } }}>
            more
          </Typography>
        </Link>
      </Box>
      <Divider />
      <Link to={`/u/${username}/lists/id123`}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box color={"#fff"} mt={4}>
            <FilmCardsStackedFive />
            <Typography fontSize={14} fontWeight={"bold"}>
              12 films
            </Typography>
            <Typography>{title}</Typography>
          </Box>
        </Box>
      </Link>
      <Link to={`/u/${username}/lists/id123`}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box color={"#fff"} mt={4}>
            <FilmCardsStackedFive />
            <Typography fontSize={14} fontWeight={"bold"}>
              12 films
            </Typography>
            <Typography>{title}</Typography>
          </Box>
        </Box>
      </Link>
      <Link to={`/u/${username}/lists/id123`}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box color={"#fff"} mt={4}>
            <FilmCardsStackedFive />
            <Typography fontSize={14} fontWeight={"bold"}>
              12 films
            </Typography>
            <Typography>{title}</Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
