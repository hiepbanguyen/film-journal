import { Avatar, Box, IconButton, Typography } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import React from "react";

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
        <p className="comment">{props.comment}</p>
        <Box className="like_link">
          <FavoriteIcon
            sx={{
              fontSize: 18,
              "& :hover": {
                cursor: "pointer",
                color: "rgba(255, 89, 89, 1)",
              },
              mr: 1,
            }}
          />
          <span>{props.likes} likes</span>
        </Box>
      </Box>
    </Box>
  );
}
