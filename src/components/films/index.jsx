import Container from "@mui/system/Container";
import { Box, Divider, Grid, Typography } from "@mui/material";
import FilmsListPopularFilms from "./list-popular-films";
import SearchForm from "../common/search-form.jsx";
import { JustReviewed } from "../home/just-reviewed.jsx";
import { PopularReviewers } from "../home/reviewer-preview.jsx";
import React from "react";
import FilmCard from "../common/film-card";
import { PopularReviews } from "../home/popular-reviews.jsx";

export default function Films() {
  return (
    <Container>
      <Box sx={{ marginTop: 13, color: "#9ab" }}>
        <Box mb={2}>
          <SearchForm />
        </Box>
        <FilmsListPopularFilms></FilmsListPopularFilms>
        <JustReviewed />
        <Grid container spacing={{ md: 5 }} sx={{ color: "#9ab" }} pt={3}>
          <Grid item xs={12} md={7.5} lg={8.5}>
            <PopularReviews />
          </Grid>
          <Grid item xs={12} md={4.5} lg={3.5}>
            <Box>
              <Typography textTransform={"uppercase"} sx={{ color: "#fff" }}>
                Crew Picks
              </Typography>
              <Divider variant={"fullWidth"} />
              <Box mt={2} display={"flex"} justifyContent={"center"} gap={1} flexWrap={"wrap"}>
                {Array.from({ length: 9 }).map((i, idx) => (
                  <FilmCard key={idx} />
                ))}
              </Box>
            </Box>
            <PopularReviewers />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
