import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";

export default function AllFilmLikes() {
  return (
    <Container sx={{ mt: 10, color: "#9ab" }}>
      <Grid container spacing={{ xs: 2, sm: 5 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant={"h6"} mb={1} color={"#fff"} fontWeight={600}>
            Show results for:
          </Typography>
          <NavBar filmId={1} />
          {/*<ReviewFilters />*/}
        </Grid>
        <Grid item xs={12} sm={8}></Grid>
      </Grid>
    </Container>
  );
}
