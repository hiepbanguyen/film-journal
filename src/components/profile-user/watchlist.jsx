import * as React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import FilmCard from "../home/film-card.jsx";
import { FilmCardsStackedFive } from "../home/list-preview.jsx";

export const WatchList = () => {
  const [count, setCount] = React.useState("123");
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          watchlist
        </Typography>
        <Typography variant={"caption"} mt={5}>
          {count}
        </Typography>
      </Box>
      <Divider variant="fullWidth" />
      <Grid container mt={0} spacing={2} color={"#fff"}>
        <Grid item xs={12} sm={6} md={12}>
          <Box mt={2} mb={2} ml={{ md: 0, xs: "5%" }}>
            <FilmCardsStackedFive />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
