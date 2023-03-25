import { Box, Button, Divider, Rating, Stack, Typography } from "@mui/material";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded.js";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import { styled } from "@mui/system";
import React from "react";

const CustomButton1 = styled(Button)({
  flexDirection: "column",
  textTransform: "none",
  color: "#bcd",
  "&:hover": {
    background: "#456",
    color: "#fff",
  },
});

const ReViewLikeWatchList = () => {
  const [reviewed, setReviewed] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [watchlisted, setWatchlisted] = React.useState(false);
  return (
    <Box display={"flex"} gap={1} justifyContent={"space-evenly"} pl={1}>
      <CustomButton1 onClick={() => setReviewed(!reviewed)}>
        <RemoveRedEyeRoundedIcon fontSize={"large"} sx={{ color: reviewed ? "#00c030" : "#bcd" }} />
        Review
      </CustomButton1>
      <CustomButton1 onClick={() => setLiked(!liked)}>
        <FavoriteIcon fontSize={"large"} sx={{ color: liked ? "#ff9010" : "#bcd" }} />
        Like
      </CustomButton1>
      <CustomButton1 onClick={() => setWatchlisted(!watchlisted)}>
        <WatchLaterIcon fontSize={"large"} sx={{ color: watchlisted ? "#209ce4" : "#bcd" }} />
        Watchlist
      </CustomButton1>
    </Box>
  );
};

const CustomButton2 = styled(Button)({
  padding: "10px 0 10px 0",
  color: "#bcd",
  "&:hover": {
    color: "#fff",
  },
});

export default function ActionBox() {
  return (
    <Stack
      sx={{ color: "#bcd", background: "#456", borderRadius: 1 }}
      divider={<Divider variant="fullWidth" sx={{ borderColor: "#2c3440" }} />}
    >
      <ReViewLikeWatchList />
      <CustomButton2>
        <Typography fontSize={14} textAlign="center">
          Review or log...
        </Typography>
      </CustomButton2>
      <CustomButton2>
        <Typography fontSize={14} textAlign="center">
          Add to lists...
        </Typography>
      </CustomButton2>
      <CustomButton2>
        <Typography fontSize={14} textAlign="center">
          Share
        </Typography>
      </CustomButton2>
    </Stack>
  );
}
