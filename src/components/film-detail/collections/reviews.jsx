import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import ReviewFilters from "./filters.jsx";
import PaginatedList from "../../common/paginated_list.jsx";
import ReviewPreview from "../../common/review-preview.jsx";

export default function AllFilmReviews() {
  return (
    <Container sx={{ mt: 10, color: "#9ab" }}>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={5}>
        <Stack gap={5} width={{ sm: 170 }}>
          <NavBar filmId={1} />
          <ReviewFilters
            filterValues={["Popularity", "Highest Rating", "Lowest Rating", "Newest", "Earliest"]}
            showFrom={true}
          />
        </Stack>
        <Box flex={1}>
          <Typography color={"#fff"} fontStyle={"italic"}>
            There are 200 reviews of <strong>Avatar the Airbender</strong>
          </Typography>
          <PaginatedList rowsPerPage={10}>
            {Array.from({ length: 15 }).map((i, idx) => (
              <React.Fragment key={idx}>
                <ReviewPreview
                  title={"A film title"}
                  releasedYear={2022}
                  content={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the" +
                    " leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                  }
                  username={"bahiepnguyen"}
                  fullname={"Nguyen Ba Hiep"}
                  ratings={4}
                  likeCount={10}
                  commentCount={50}
                  reviewDate={new Date()}
                  notShowFilmCard={true}
                />
              </React.Fragment>
            ))}
          </PaginatedList>
        </Box>
      </Box>
    </Container>
  );
}
