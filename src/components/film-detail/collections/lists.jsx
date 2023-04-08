import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import ReviewFilters from "./filters.jsx";
import PaginatedList from "../../common/paginated_list.jsx";
import { ListPreviewHorizontal } from "../../common/list-preview-horizontal.jsx";

export default function AllFilmLists() {
  return (
    <Container sx={{ mt: 10, color: "#9ab" }}>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={3}>
        <Stack gap={3} width={{ sm: 170 }}>
          <NavBar filmId={1} />
          <ReviewFilters filterValues={["Popularity", "Newest", "Earliest"]} showFrom={true} />
        </Stack>
        <Box flex={1}>
          <Typography color={"#fff"} fontStyle={"italic"}>
            There are 200 lists that contain <strong>Avatar the Airbender</strong>
          </Typography>
          <PaginatedList rowsPerPage={10}>
            {Array.from({ length: 15 }).map((i, idx) => (
              <ListPreviewHorizontal
                key={idx}
                title={"Lorem Ipsum is simply dummy text"}
                username={"Bá Hiệp Nguyễn"}
                favoriteCount={400}
                commentCount={50}
                films={2}
                description={"Lorem Ipsum is simply dummy text"}
              />
            ))}
          </PaginatedList>
        </Box>
      </Box>
    </Container>
  );
}
