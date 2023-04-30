import Container from "@mui/system/Container";
import { Box, Divider, Typography } from "@mui/material";
import FilmsListPopularFilms from "./list-popular-films";
import React from "react";
import FilmCard from "../common/film-card";
import { PaginatedFilmsGrid } from "../common/paginated-films-grid.jsx";

const MonthlyPopularFilms = () => {
  return (
    <Box>
      <Typography textTransform={"uppercase"} sx={{ color: "#fff" }}>
        Popular films this month
      </Typography>
      <Divider variant={"fullWidth"} />
      <Box mt={2} display={"flex"} justifyContent={"center"} gap={1} flexWrap={"wrap"}>
        {Array.from({ length: 24 }).map((i, idx) => (
          <FilmCard key={idx} />
        ))}
      </Box>
    </Box>
  );
};

export default function Films() {
  return (
    <Container>
      <Box sx={{ marginTop: 13, color: "#fff", mb: 5 }}>
        <FilmsListPopularFilms />
        <Box mb={3}>
          <PaginatedFilmsGrid fetchUrl={"Films/Paging"} />
        </Box>
      </Box>
    </Container>
  );
}
