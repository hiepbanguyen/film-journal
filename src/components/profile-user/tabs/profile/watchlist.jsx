import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../../../home/popular-lists.jsx";
import { Link } from "react-router-dom";

export const WatchList = ({ data }) => {
  return (
    <Box>
      <Link to={"watchlist"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"baseline"}
          color={"#fff"}
          mt={6}
          sx={{ ":hover": { color: "#40bcf4" } }}
        >
          <Typography variant={"body1"} textTransform={"uppercase"}>
            watchlist
          </Typography>
          <Typography variant={"caption"} textTransform={"uppercase"}>
            {data?.Total ?? 0}
          </Typography>
        </Box>
      </Link>
      <Divider />
      <Link to={`watchlist`}>
        <Box mt={4} sx={{ display: "flex", justifyContent: "center" }}>
          {data?.List && data?.Total > 0 && <FilmCardsStackedFive posters={data.List} />}
        </Box>
      </Link>
    </Box>
  );
};
