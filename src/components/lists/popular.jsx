import React from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import FilmCard from "../common/film-card.jsx";

const FilmCardsStackedFiveBig = () => {
  return (
    <Box
      display={"flex"}
      width={303}
      sx={{
        mb: 2,
        "&:hover": {
          border: "2px solid #00e054",
          borderRadius: 1.5,
        },
      }}
    >
      {Array.from({ length: 5 }).map((i, idx) => (
        <Box key={idx} position={"relative"} zIndex={10 - idx} left={`-${idx * 25}%`}>
          <FilmCard list={true} shadow={idx !== 4} size={120} />
        </Box>
      ))}
    </Box>
  );
};

function PopularListPreview(props) {
  const { title, username, fullname, favoriteCount, commentCount } = props;
  return (
    <Box
      mt={2}
      sx={(theme) => ({
        [theme.breakpoints.only("xs")]: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      })}
    >
      <Link to={"/u/hiep/lists/id123"}>
        <FilmCardsStackedFiveBig />
        <Typography variant={"body1"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
          {title}
        </Typography>
      </Link>

      <Box display={"flex"} gap={0.5} alignItems={"center"} my={1}>
        <Box
          component={Link}
          to={`/u/${username}`}
          display={"flex"}
          gap={0.5}
          alignItems={"center"}
          sx={{ ":hover": { color: "#fff" } }}
        >
          <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {fullname ?? username}
          </Typography>
        </Box>
        <FavoriteIcon fontSize={"small"} />
        <Typography variant={"body2"} ml={0.5} mr={1}>
          {favoriteCount}
        </Typography>
        <ChatBubbleIcon fontSize={"small"} />
        <Typography variant={"body2"} ml={0.5}>
          {commentCount}
        </Typography>
      </Box>
    </Box>
  );
}

const Popular = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"} mt={5}>
        popular this week
      </Typography>
      <Divider variant={"fullWidth"} />
      <Box display={"flex"} flexWrap={"wrap"} gap={{ xs: 2, md: 5, lg: 10 }} justifyContent={"center"} color={"#fff"}>
        {Array.from({ length: 3 }).map((i, idx) => (
          <PopularListPreview
            key={idx}
            title={"Lorem Ipsum is simply dummy text"}
            fullname={"Bá Hiệp Nguyễn"}
            username={"bahiep"}
            favoriteCount={4}
            commentCount={50}
          />
        ))}
      </Box>
    </Container>
  );
};
export default Popular;
