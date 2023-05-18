import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Box, Typography } from "@mui/material";

export default function GroupAvatars(props) {
  const { followers } = props;
  // console.log(followers);

  if (!followers || followers?.Total === 0 || followers?.List?.length === 0) return <></>;
  return (
    <Box display={"flex"} alignItems={"center"} sx={{ fontSize: 13 }} my={1.5}>
      {followers.Total > 3 ? (
        <AvatarGroup
          max={4}
          sx={{
            "& .MuiAvatarGroup-avatar": { height: 30, width: 30, border: "1px solid #456", fontSize: "inherit" },
          }}
        >
          {followers.List.map((i, idx) => (
            <Avatar key={idx} alt={i?.FullName} src={i?.Avatar} />
          ))}
        </AvatarGroup>
      ) : (
        <AvatarGroup
          max={3}
          sx={{
            "& .MuiAvatarGroup-avatar": { height: 30, width: 30, border: "1px solid #456", fontSize: "inherit" },
          }}
        >
          {followers.List.map((i, idx) => (
            <Avatar key={idx} alt={i?.FullName} src={i?.Avatar} />
          ))}
        </AvatarGroup>
      )}
      <Typography fontSize={"inherit"} ml={1}>
        {"Followed by "}
        {followers.Total <= 3
          ? followers.List.map((i) => i.Fullname ?? i.UserName).join(", ")
          : followers.List.slice(0, 3)
              .map((i) => i.Fullname ?? i.UserName)
              .join(", ") + " and more"}
      </Typography>
    </Box>
  );
}
