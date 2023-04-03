import React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { FilmCardsStackedFive } from "../home/list-preview";
import Tags from "../common/tags.jsx";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";

const Root = styled("div")({
  flexGrow: 1,
  marginTop: 30,
});

const ListPreviewHorizontal = (props) => {
  const { title, username, favoriteCount, commentCount, films, description } = props;

  return (
    <Box
      component={Link}
      to={"/u/hiep/lists/id123"}
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
      mt={3}
      mb={5}
    >
      <Box>
        <FilmCardsStackedFive />
      </Box>
      <Box ml={{ sm: 3 }}>
        <Typography variant={"body2"}>{title}</Typography>
        <Box display={"flex"} alignItems={"center"} my={1}>
          <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {username}
          </Typography>
          <Typography variant={"body2"} ml={0.5} mr={0.8}>
            {`${films}`} films
          </Typography>
          <FavoriteIcon fontSize={"small"} />
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {favoriteCount}
          </Typography>
          <ChatBubbleIcon fontSize={"small"} />
          <Typography variant={"body2"} ml={0.5}>
            {commentCount}
          </Typography>
        </Box>
        <Typography variant={"body2"}>{description}</Typography>
      </Box>
    </Box>
  );
};

const ListPreviewVertical = (props) => {
  const { title, username, films } = props;

  return (
    <Box my={2} component={Link} to={"/u/hiep/lists/id123"}>
      <Box width={"100%"}>
        <FilmCardsStackedFive />
      </Box>
      <Box width={"100%"}>
        <Typography variant={"body2"}>{title}</Typography>
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
