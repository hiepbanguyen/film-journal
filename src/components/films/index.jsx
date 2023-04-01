import Container from "@mui/system/Container";
import { Box, Grid } from "@mui/material";
import FilmsListPopularFilms from "./list-popular-films";
import FilmsListPopularReviews from "./list-popular-reviews";
import SearchForm from "../common/search-form.jsx";
import FilmsAside from "./films-aside";

export default function Films() {
  return (
    <Container>
      <Box sx={{ marginTop: 13, color: "#9ab" }}>
        <Box mb={2}>
          <SearchForm />
        </Box>
        <FilmsListPopularFilms></FilmsListPopularFilms>
        <Box>
          <Grid container spacing={8} columns={12}>
            <Grid item xs={12} md={9}>
              <FilmsListPopularReviews></FilmsListPopularReviews>
            </Grid>
            <Grid item xs={12} md={3}>
              <FilmsAside></FilmsAside>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
