import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "./nav-bar.jsx";
import MemberPreview from "../../common/member-preview.jsx";

export default function AllFilmLikes() {
  return (
    <Container sx={{ mt: 10, color: "#9ab", pb: 5 }}>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={3}>
        <Stack gap={3} width={{ sm: 170 }}>
          <NavBar filmId={1} />
        </Stack>
        <Box flex={1}>
          <Typography color={"#fff"} fontStyle={"italic"} mb={2}>
            There are 200 members who liked <strong>Avatar the Airbender</strong>
          </Typography>
          <Stack divider={<Divider />} gap={1}>
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
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
