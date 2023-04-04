import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import ReviewFilters from "./filters.jsx";

export default function AllFilmReviews() {
  return (
    <Container sx={{ mt: 10, color: "#9ab" }}>
      <Grid container spacing={{ xs: 2, sm: 5 }}>
        <Grid item xs={12} sm={4}>
          <NavBar filmId={1} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography>
              There are 200 reviews of <strong>Avatar the Airbender</strong>
            </Typography>
            <ReviewFilters filterValues={["Popularity", "Highest Rating", "Lowest Rating", "Newest", "Earliest"]} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
