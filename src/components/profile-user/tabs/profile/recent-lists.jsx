import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../../../home/popular-lists.jsx";
import { Link } from "react-router-dom";

export const RecentLists = ({ username, data }) => {
  return (
    <Box>
      <Link to={"lists"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"baseline"}
          color={"#fff"}
          mt={4}
          sx={{ ":hover": { color: "#40bcf4" } }}
        >
          <Typography variant={"body1"} textTransform={"uppercase"}>
            recent lists
          </Typography>
          <Typography variant={"caption"} textTransform={"uppercase"}>
            more
          </Typography>
        </Box>
      </Link>

      <Divider />
      {data?.map((i, idx) => (
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
