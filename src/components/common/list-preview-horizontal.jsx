import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FilmCardsStackedFive } from "../home/popular-lists.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import React from "react";

export const ListPreviewHorizontal = (props) => {
  const { title, fullname, userAvatar, username, favoriteCount, commentCount, films, description, posters, listLink } =
    props;

  return (
    <Box component={Link} to={listLink ?? ""} display={"flex"} flexDirection={{ xs: "column", sm: "row" }}>
      <Box>
        <FilmCardsStackedFive posters={posters} />
      </Box>
      <Box ml={{ sm: 3 }}>
        <Typography variant={"h6"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
          {title}
        </Typography>
        <Box display={"flex"} alignItems={"center"} my={1}>
          <Avatar sx={{ width: 25, height: 25 }} src={userAvatar ?? ""} />
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {fullname ? fullname : username}
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
        <Typography variant={"body2"}>
          {String(description).slice(0, 200)}
          {description.length > 200 && "..."}
        </Typography>
      </Box>
    </Box>
  );
};
