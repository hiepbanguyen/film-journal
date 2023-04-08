import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import ReviewFilters from "./filters.jsx";
import PaginatedList from "../../common/paginated_list.jsx";
import MemberPreview from "../../common/member-preview.jsx";

export default function AllFilmLikes() {
  return (
    <Container sx={{ mt: 10, color: "#9ab" }}>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={3}>
        <Stack gap={3} width={{ sm: 170 }}>
          <NavBar filmId={1} />
          <ReviewFilters filterValues={["Highest Rating", "Lowest Rating", "Newest", "Earliest"]} showFrom={true} />
        </Stack>
        <Box flex={1}>
          <Typography color={"#fff"} fontStyle={"italic"}>
            There are 200 members who liked <strong>Avatar the Airbender</strong>
          </Typography>
          <PaginatedList rowsPerPage={10}>
            {Array.from({ length: 15 }).map((i, idx) => (
              <React.Fragment key={idx}>
                <MemberPreview
                  fullname={"Ba Hiep"}
                  username={"bahiep"}
                  followers={15}
                  following={20}
                  filmsReviewed={200}
                />
              </React.Fragment>
            ))}
          </PaginatedList>
        </Box>
      </Box>
    </Container>
  );
}
