import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import ListPreview, { ListPreviewHorizontal, ListPreviewVertical } from "../home/list-preview";
import ReviewPreview from "../home/review-preview";

const Root = styled("div")({
  flexGrow: 1,
  padding: 2,
  marginTop: 30,
});

const RecentlyLike = () => {

  return (
    <Root>
      <Container maxWidth="lg">
        <Grid container spacing={1} color={"#fff"}>
          <Grid item xs={8}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
              <Typography variant={"body1"} textTransform={"uppercase"}>
                rencently liked
              </Typography>
            </Box>
            <Divider variant="fullWidth" color={"#fff"} />
            {Array.from({ length: 10 }).map((i, idx) => (
              <Grid key={idx} item xs={12}>
                <ListPreviewHorizontal
                  title={"Lorem Ipsum is simply dummy text"}
                  username={"Bá Hiệp Nguyễn"}
                  favoriteCount={400}
                  commentCount={50}
                  films={2}
                  description={"Lorem Ipsum is simply dummy text"}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={4}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
              <Typography variant={"body1"} textTransform={"uppercase"}>
                crew picks
              </Typography>
              <Typography variant={"caption"}>
                MORE
              </Typography>
            </Box>
            <Divider variant="fullWidth" color={"#fff"} />
            {Array.from({ length: 5 }).map((i, idx) => (
              <Grid key={idx} item xs={12}>
                <ListPreviewVertical
                  title={"Lorem Ipsum is simply dummy text"}
                  username={"Nguyễn Việt Hoàn"}
                  films={100}
                />
              </Grid>
            ))}
            <Box color={"#fff"} mt={5}>
              <Typography variant={"body1"} textTransform={"uppercase"}>
                popular tags
              </Typography>
            </Box>
            <Divider variant="fullWidth" color={"#fff"} />
            <Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};
export default RecentlyLike;
