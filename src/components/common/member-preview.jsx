import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const AvatarSize = 60;
export default function MemberPreview(props) {
  const { fullname, username, followers, following, filmsReviewed } = props;
  return (
    <Box component={Link} to={`/u/${username}`} display={"flex"} alignItems={"center"} gap={2}>
      <Avatar
        src={"https://a.ltrbxd.com/resized/avatar/upload/3/0/6/9/2/4/2/shard/avtr-0-220-0-220-crop.jpg?v=bbc6df5bf4"}
        sx={{ width: AvatarSize, height: AvatarSize }}
      />
      <Box>
        <Typography sx={{ color: "#fff", ":hover": { color: "#00e8ff" } }}>
          <strong>{fullname ?? username}</strong>
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
