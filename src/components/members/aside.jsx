import Container from "@mui/system/Container";
import { Box, Button, Grid, CardMedia } from "@mui/material";
import * as React from "react";

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
  isFollowing: true,
};

const Follower = {
  count: 10,
  list: [
    { userName: "orange", avatar: "https://picsum.photos/214/212" },
    { userName: "mango", avatar: "https://picsum.photos/212/215" },
    { userName: "banana", avatar: "https://picsum.photos/212/212" },
    { userName: "apple", avatar: "https://picsum.photos/213/213" },
    { userName: "cheri", avatar: "https://picsum.photos/216/216" },
    { userName: "onion", avatar: "https://picsum.photos/217/217" },
  ],
  isFollowing: false,
};

function ListUser(props) {
  return (
    <Box sx={{ marginBottom: "24px" }}>
      <Box
        sx={{
          fontSize: { xs: "12px", md: "14px" },
          textTransform: "uppercase",

          borderBottom: "1px solid #9ab",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Box
          sx={{ color: "#9ab", textDecoration: "none", "&:hover": { color: "#40bcf4" } }}
          component="a"
          href={props.data.isFollowing ? "/userName/following/" : "/userName/followers/"}
        >
          {props.data.isFollowing ? "You Follow" : "Following you"}
        </Box>
        <Box
          sx={{ color: "#9ab", textDecoration: "none", "&:hover": { color: "#40bcf4" } }}
          component="a"
          href={props.data.isFollowing ? "/userName/following/" : "/userName/followers/"}
        >
          {props.data.count}
        </Box>
      </Box>
      <Box>
        {props.data.list.map((user, idx) => (
          <Box key={idx} sx={{ aspectRatio: "1/1", width: "16.66666%", display: "inline-block" }}>
            <Box component="a" href={"/" + user.userName} sx={{ width: "100%", height: "100%" }}>
              <Box
                component="img"
                src={user.avatar}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  "&:hover": {
                    border: "2px solid #9ab",
                  },
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function MembersAside() {
  return (
    <Box>
      <ListUser data={Following}></ListUser>
      <ListUser data={Follower}></ListUser>
    </Box>
  );
}
