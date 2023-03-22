import { Avatar, Box, IconButton, Typography } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Link } from "react-router-dom";

export default function ReviewInFilm(props) {
  const calculate_rating = (number) => {
    let star = "";
    let int_number = parseInt(number);
    let redundancy = number - int_number;
    for (let n = 0; n < int_number; n++) {
      star += "★";
    }
    redundancy > 0 ? (star += "½") : (star += "");
    return star;
  };

  return (
    <Box className={"review_item"}>
      <Avatar src={props.image} sx={{ mr: 2 }} />
      <Box className="title_review">
        <Box display={"flex"} alignItems="center">
          <Typography fontSize={13}>
            Review by <b>{props.name}</b>
          </Typography>
          <Typography px={1} fontSize={13} className="rating_green rated-7">
            {calculate_rating(props.rating)}
          </Typography>
          <ChatBubbleIcon sx={{ fontSize: 15 }}></ChatBubbleIcon>
          <Typography fontSize={13} pl={0.5}>
            {props.number_comment_reply}
          </Typography>
        </Box>
        <Box component={Link} to={"/"} sx={{ textDecoration: "none", color: "inherit" }}>
          <p className="comment">{props.comment}</p>
        </Box>
        <Box className="like_link" gap={0.5}>
          <ThumbUpIcon
            sx={{
              fontSize: 18,
              "& :hover": {
                cursor: "pointer",
                color: "rgb(89,255,236)",
              },
            }}
          />
          <span>{props.likes}</span>
          <ThumbDownIcon
            sx={{
              ml: 1.5,
              fontSize: 18,
              "& :hover": {
                cursor: "pointer",
                color: "rgba(255, 89, 89, 1)",
              },
            }}
          />
          <span>{props.likes}</span>
        </Box>
      </Box>
    </Box>
  );
}
