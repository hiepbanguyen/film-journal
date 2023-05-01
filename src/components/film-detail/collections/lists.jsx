import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import ReviewFilters from "./filters.jsx";
import { ListPreviewHorizontal } from "../../common/list-preview-horizontal.jsx";

export default function AllFilmLists() {
  return (
    <Container sx={{ mt: 10, color: "#9ab", pb: 5 }}>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={3}>
        <Stack gap={3} width={{ sm: 170 }}>
          <NavBar />
          <ReviewFilters filterValues={["Popularity", "Most recent", "Earliest"]} showFrom={true} />
        </Stack>
        <Box flex={1}>
          <Typography color={"#fff"} fontStyle={"italic"}>
            There are 200 lists that contain <strong>Avatar the Airbender</strong>
          </Typography>
          <Stack divider={<Divider />}>
            {Array.from({ length: 15 }).map((i, idx) => (
              <Box key={idx} my={2}>
                <ListPreviewHorizontal
                  title={"Lorem Ipsum is simply dummy text"}
                  username={"Bá Hiệp Nguyễn"}
                  favoriteCount={400}
                  commentCount={50}
                  films={2}
                  description={
                    "Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy textLorem Ipsum is simply dummy textLorem Ipsum is simply dummy text"
                  }
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
