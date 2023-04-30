import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const AvatarSize = 60;
export default function MemberPreview(props) {
  const { fullname, username, followers, following, filmsReviewed, avatar } = props;
  return (
    <Box component={Link} to={`/u/${username}`} display={"flex"} alignItems={"center"} gap={2}>
      <Avatar src={avatar} sx={{ width: AvatarSize, height: AvatarSize }} />
      <Box>
        <Typography sx={{ color: "#fff", ":hover": { color: "#00e8ff" } }}>
          <strong>{fullname ? fullname : username}</strong>
        </Typography>
        <Typography
          fontSize={13}
          sx={{ ":hover": { color: "#fff" } }}
        >{`${followers} followers, following ${following}`}</Typography>
        <Typography fontSize={13} sx={{ ":hover": { color: "#fff" } }}>{`${filmsReviewed} films reviewed`}</Typography>
      </Box>
    </Box>
  );
}
