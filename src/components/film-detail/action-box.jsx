import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded.js";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import { styled } from "@mui/system";
import React from "react";
import ReviewDialog from "./review-dialog.jsx";
import AddToListsDialog from "./add-to-lists-dialog.jsx";
import { useSnackbar } from "notistack";

const CustomButton1 = styled(Button)({
  flexDirection: "column",
  textTransform: "none",
  color: "#bcd",
  "&:hover": {
    background: "#456",
    color: "#fff",
  },
});

const ReViewLikeWatchList = ({ filmTitle, releasedYear }) => {
  const [reviewed, setReviewed] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [watchlisted, setWatchlisted] = React.useState(false);
  return (
    <Box display={"flex"} gap={1} justifyContent={"space-evenly"} pl={1}>
      <ReviewDialog filmTitle={filmTitle} releasedYear={releasedYear}>
        <CustomButton1>
          <RemoveRedEyeRoundedIcon fontSize={"large"} sx={{ color: reviewed ? "#00c030" : "#bcd" }} />
          Review
        </CustomButton1>
      </ReviewDialog>
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
  width: "100%",
  padding: "10px 0 10px 0",
  color: "#bcd",
  "&:hover": {
    color: "#fff",
  },
});

export default function ActionBox({ filmTitle, releasedYear }) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Stack
      sx={{ color: "#bcd", background: "#456", borderRadius: 1 }}
      divider={<Divider sx={{ borderColor: "#2c3440" }} />}
    >
      <ReViewLikeWatchList filmTitle={filmTitle} releasedYear={releasedYear} />
      <ReviewDialog filmTitle={filmTitle} releasedYear={releasedYear}>
        <CustomButton2>
          <Typography fontSize={14} textAlign="center">
            Review or log...
          </Typography>
        </CustomButton2>
      </ReviewDialog>
      <AddToListsDialog filmTitle={filmTitle} releasedYear={releasedYear}>
        <CustomButton2>
          <Typography fontSize={14} textAlign="center">
            Add to lists...
          </Typography>
        </CustomButton2>
      </AddToListsDialog>
      <CustomButton2
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          enqueueSnackbar("Film link copied", { variant: "success" });
        }}
      >
        <Typography fontSize={14} textAlign="center">
          Share
        </Typography>
      </CustomButton2>
    </Stack>
  );
}
