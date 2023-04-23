import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FilmCardsStackedFive } from "../home/popular-lists.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import React from "react";

export const ListPreviewHorizontal = (props) => {
  const { title, username, favoriteCount, commentCount, films, description } = props;

  return (
    <Box component={Link} to={"/u/hiep/lists/id123"} display={"flex"} flexDirection={{ xs: "column", sm: "row" }}>
      <Box>
        <FilmCardsStackedFive />
      </Box>
      <Box ml={{ sm: 3 }}>
        <Typography variant={"h6"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
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
