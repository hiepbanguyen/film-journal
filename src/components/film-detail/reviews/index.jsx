import { Box, Container } from "@mui/material";
import CustomTabs from "../../common/tabs.jsx";
import React from "react";
import ReviewFilters from "./filters.jsx";

const tabLabels = ["POPULAR", "RECENT", "FRIENDS", "YOURS"];

export default function AllFilmReviews() {
  return (
    <Container>
      <Box display={"flex"}>
        <CustomTabs labels={tabLabels} bottom_border_only={true}></CustomTabs>
        <ReviewFilters sx={{ flex: 1 }} />
      </Box>
    </Container>
  );
}
