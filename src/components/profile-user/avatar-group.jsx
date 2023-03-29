import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Box, Typography } from "@mui/material";

export default function GroupAvatars() {
  return (
    <Box display={"flex"} alignItems={"center"} sx={{ fontSize: 13 }} mt={1.5}>
      <AvatarGroup
        max={4}
        sx={{
          "& .MuiAvatarGroup-avatar": { height: 30, width: 30, border: "1px solid #456", fontSize: "inherit" },
        }}
      >
        <Avatar alt="Remy Sharp" src={"https://picsum.photos/212/212"} />
        <Avatar alt="Travis Howard" />
        <Avatar alt="Cindy Baker" />
        <Avatar alt="Agnes Walker" />
        <Avatar alt="Trevor Henderson" />
      </AvatarGroup>
      <Typography fontSize={"inherit"} ml={1}>
        Followed by Remy Sharp, Travis Howard, Cindy Baker and more
      </Typography>
    </Box>
  );
}
