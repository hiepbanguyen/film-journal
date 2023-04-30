import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../../../home/popular-lists.jsx";
import { Link } from "react-router-dom";

export const RecentLists = ({ username, data }) => {
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
      {data.map((i, idx) => (
        <Link key={idx} to={`/u/${username}/lists`}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box color={"#fff"} mt={4}>
              <FilmCardsStackedFive posters={i?.List ?? []} />
              <Typography fontSize={14} fontWeight={"bold"}>
                {i?.Total ?? 0} films
              </Typography>
              <Typography>{i?.Title ?? ""}</Typography>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};
