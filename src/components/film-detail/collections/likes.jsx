import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import ReviewFilters from "./filters.jsx";

export default function AllFilmLikes() {
  return (
    <Container sx={{ mt: 10, color: "#9ab" }}>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={3}>
        <Stack gap={3} width={{ sm: 170 }}>
          <NavBar filmId={1} />
          <ReviewFilters filterValues={["Highest Rating", "Lowest Rating", "Newest", "Earliest"]} showFrom={true} />
        </Stack>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography color={"#fff"}>
            There are 200 members who liked <strong>Avatar the Airbender</strong>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
