import { Box, Divider } from "@mui/material";
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
        <Box
          sx={{ color: "#fff", textDecoration: "none", "&:hover": { color: "#40bcf4" } }}
          component="a"
          href={props.data.isFollowing ? "/u/userName/following/" : "/u/userName/followers/"}
        >
          {props.data.isFollowing ? "Following" : "Following you"}
        </Box>
        <Box
          sx={{ color: "#fff", textDecoration: "none", "&:hover": { color: "#40bcf4" } }}
          component="a"
          href={props.data.isFollowing ? "/u/userName/following/" : "/u/userName/followers/"}
        >
          {props.data.count}
        </Box>
      </Box>
      <Divider variant={"fullWidth"} />
      <Box mt={2}>
        {props.data.list.map((user, idx) => (
          <Box sx={{ aspectRatio: "1/1", width: "16.6666666%", display: "inline-block" }} key={idx}>
            <Box component="a" href={"/u/" + user.userName} sx={{ width: "100%", height: "100%" }}>
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

export default function ListFollow() {
  return (
    <Box mt={5}>
      <Follow data={Following}></Follow>
    </Box>
  );
}
