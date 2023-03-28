import { Avatar, Box, Rating, Typography } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import React from "react";
import { Link } from "react-router-dom";

export default function ReviewInFilm(props) {
  return (
    <Box className={"review_item"}>
      <Avatar src={props.image} sx={{ mr: 2 }} />
      <Box className="title_review">
        <Box display={"flex"} alignItems="center">
          <Typography fontSize={13}>
            Review by <b>{props.name}</b>
          </Typography>
          <Rating value={props.rating} size={"small"} readOnly sx={{ mx: 1.5 }} />
          <ChatBubbleIcon sx={{ fontSize: 15 }}></ChatBubbleIcon>
          <Typography fontSize={13} pl={0.5}>
            {props.number_comment_reply}
          </Typography>
        </Box>
        <Box component={Link} to={"/"} sx={{ textDecoration: "none", color: "inherit" }}>
          <p className="comment">{props.comment}</p>
        </Box>
        <Box display={"flex"} alignItems={"stretch"} fontWeight={600} fontSize={14} gap={0.5}>
          <FavoriteIcon
            sx={{
              fontSize: 18,
              "& :hover": {
                cursor: "pointer",
                color: "rgba(255, 89, 89, 1)",
              },
            }}
          />
          <span>
            {props.likes} {" likes"}
          </span>
        </Box>
      </Box>
    </Box>
  );
}
