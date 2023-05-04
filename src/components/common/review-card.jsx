import { Avatar, Box, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import * as React from "react";

export default function ReviewCard(props) {
  const { size, rating, username, fullname, avatar, link, poster } = props;
  return (
    <Box component={Link} to={link ?? ""}>
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
          src={poster}
          alt="movie title"
          sx={{
            borderRadius: "4px 4px 0 0",
          }}
        />
        <Box display={"flex"} alignItems={"center"} gap={0.5} px={0.35} pb={0.5} width={size}>
          <Avatar sx={{ width: 20, height: 20 }} src={avatar} alt={"avatar"} />
          <Box
            fontSize={11}
            fontWeight={"bold"}
            width={size - 30}
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {fullname ? fullname : username}
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"} pt={0.5}>
        <Rating defaultValue={rating} readOnly sx={{ fontSize: 15 }} />
        <FormatAlignLeftIcon sx={{ color: "#9ab", fontSize: 15 }} />
      </Box>
    </Box>
  );
}
