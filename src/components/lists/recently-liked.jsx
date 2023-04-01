import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { ListPreviewHorizontal, ListPreviewVertical } from "../home/list-preview";
import Tags from "../common/tags.jsx";

const Root = styled("div")({
  flexGrow: 1,
  marginTop: 30,
});

const RecentlyLike = () => {
  return (
    <Root>
      <Container maxWidth="lg">
        <Grid container spacing={5} color={"#fff"}>
          <Grid item xs={12} lg={8}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
              <Typography variant={"body1"} textTransform={"uppercase"}>
                rencently liked
              </Typography>
            </Box>
            <Divider variant="fullWidth" />
            <Box display={"flex"} justifyContent={{ xs: "center", lg: "flex-start" }}>
              <Box>
                {Array.from({ length: 10 }).map((i, idx) => (
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
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
              <Typography variant={"body1"} textTransform={"uppercase"}>
                crew picks
              </Typography>
              <Typography variant={"caption"}>MORE</Typography>
            </Box>
            <Divider variant="fullWidth" />
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              gap={{ xs: 1, sm: 5, lg: 1 }}
              justifyContent={"center"}
              color={"#fff"}
            >
              {Array.from({ length: 5 }).map((i, idx) => (
                <ListPreviewVertical
                  key={idx}
                  title={"Lorem Ipsum is simply dummy text"}
                  username={"Nguyễn Việt Hoàn"}
                  films={100}
                />
              ))}
            </Box>
            <Box color={"#fff"} mt={5}>
              <Typography variant={"body1"} textTransform={"uppercase"}>
                popular tags
              </Typography>
            </Box>
            <Divider variant="fullWidth" />
            <Box mt={2}>
              <Tags />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};
export default RecentlyLike;
