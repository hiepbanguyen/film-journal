import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { FilmCardsStackedFive } from "../home/list-preview";
import { Link } from "react-router-dom";
import { ListPreviewHorizontal } from "../common/list-preview-horizontal.jsx";

const Root = styled("div")({
  flexGrow: 1,
  marginTop: 30,
});

const ListPreviewVertical = (props) => {
  const { title, username, films } = props;

  return (
    <Box my={2} component={Link} to={"/u/hiep/lists/id123"}>
      <Box width={"100%"}>
        <FilmCardsStackedFive />
      </Box>
      <Box width={"100%"}>
        <Typography variant={"body1"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
          {title}
        </Typography>
        <Box display={"flex"} alignItems={"center"} my={1}>
          <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {username}
          </Typography>
          <Typography variant={"body2"} ml={0.5} mr={0.8}>
            {`${films}`} films
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

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
            <Divider />
            <Box display={"flex"} flexDirection={"column"} alignItems={{ xs: "center", lg: "flex-start" }}>
              {Array.from({ length: 7 }).map((i, idx) => (
                <Box key={idx} my={2}>
                  <ListPreviewHorizontal
                    title={"Lorem Ipsum is simply dummy text"}
                    username={"Bá Hiệp Nguyễn"}
                    favoriteCount={400}
                    commentCount={50}
                    films={2}
                    description={"Lorem Ipsum is simply dummy text"}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
              crew picks
            </Typography>
            <Divider />
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
            {/*<Box color={"#fff"} mt={5}>*/}
            {/*  <Typography variant={"body1"} textTransform={"uppercase"}>*/}
            {/*    popular tags*/}
            {/*  </Typography>*/}
            {/*</Box>*/}
            {/*<Divider  />*/}
            {/*<Box mt={2}>*/}
            {/*  <Tags />*/}
            {/*</Box>*/}
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};
export default RecentlyLike;
