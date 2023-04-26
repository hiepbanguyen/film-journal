import { Avatar, Box, Divider, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

const Following = {
  count: 8,
  list: [
    { userName: "banana", avatar: "https://picsum.photos/212/212" },
    { userName: "apple", avatar: "https://picsum.photos/213/213" },
    { userName: "orange", avatar: "https://picsum.photos/214/212" },
    { userName: "mango", avatar: "https://picsum.photos/212/215" },
    { userName: "coconut", avatar: "https://picsum.photos/216/212" },
    { userName: "grape", avatar: "https://picsum.photos/212/217" },
  ],
};

function Follow(props) {
  return (
    <Box sx={{ marginBottom: "24px" }}>
      <Box
        sx={{
          fontSize: { xs: "12px", md: "14px" },
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "23px",
        }}
      >
        <Typography>{"Following"}</Typography>
        <Link to={"following"}>
          <Typography variant={"caption"} sx={{ ":hover": { color: "#40bcf4" } }}>
            {"More"}
          </Typography>
        </Link>
      </Box>
      <Divider variant={"fullWidth"} />
      <Box mt={2} display={"flex"} flexWrap={"wrap"} gap={0.25}>
        {props.data.list.map((user, idx) => (
          <Avatar key={idx} src={user.avatar} />
        ))}
      </Box>
    </Box>
  );
}

export default function ListFollow() {
  return (
    <Box mt={5}>
      <Follow data={Following}></Follow>
    </Box>
  );
}
