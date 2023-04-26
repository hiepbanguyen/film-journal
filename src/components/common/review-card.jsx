import { Avatar, Box, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import * as React from "react";

export default function ReviewCard(props) {
  const { size, rating, username, avatar, link } = props;
  return (
    <Box component={Link} to={link}>
      <Box
        sx={{
          borderRadius: 1,
          bgcolor: "#456",
          border: "1px solid rgba(0,0,0,0.2)",
          "&:hover": {
            border: "2px solid #00e054",
          },
        }}
      >
        <Box
          component="img"
          width={size ?? 80}
          src={
            "https://a.ltrbxd.com/resized/film-poster/8/2/2/3/3/3/822333-the-quiet-girl-0-150-0-225-crop.jpg?v=34c5de0af7"
          }
          alt="movie title"
          sx={{
            borderRadius: "4px 4px 0 0",
          }}
        />
        <Box display={"flex"} gap={1} pl={0.5} pb={0.75}>
          <Avatar sx={{ width: 20, height: 20 }} src={avatar} alt={"avatar"} />
          <Typography fontSize={13} fontWeight={"bold"}>
            {username}
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"} pt={0.5}>
        <Rating defaultValue={rating} readOnly sx={{ fontSize: 15 }} />
        <FormatAlignLeftIcon sx={{ color: "#9ab", fontSize: 15 }} />
      </Box>
    </Box>
  );
}
