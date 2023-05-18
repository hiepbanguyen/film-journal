import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded.js";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import { styled } from "@mui/system";
import React, { useEffect } from "react";
import ReviewDialog from "./review-dialog.jsx";
import AddToListsDialog from "./add-to-lists-dialog.jsx";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { observer } from "mobx-react-lite";
import UserStore from "../../store/user.store.js";

const CustomButton1 = styled(Button)({
  flexDirection: "column",
  textTransform: "none",
  color: "#bcd",
  "&:hover": {
    background: "#456",
    color: "#fff",
  },
});

const ReViewLikeWatchList = observer(({ filmTitle, releasedYear }) => {
  const { filmId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [reviewed, setReviewed] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [watchlisted, setWatchlisted] = React.useState(false);
  const [, getUserStatus] = useAxios({ url: `Films/${filmId}/GetInfoUser` }, { manual: true });
  const [, toggleLike] = useAxios(
    {
      url: `Likes/${filmId}?type=film`,
      method: "POST",
    },
    { manual: true },
  );
  const [, addToWatchlist] = useAxios(
    {
      url: `WatchList/Add?filmID=${filmId}`,
      method: "POST",
    },
    { manual: true },
  );
  const [, deleteFromWatchlist] = useAxios(
    {
      url: `WatchList/Delete`,
      method: "DELETE",
      data: { filmIDs: String(filmId) },
    },
    { manual: true },
  );

  useEffect(() => {
    if (UserStore.isLoadedFromLocal) {
      getUserStatus().then((res) => {
        if (res?.data) {
          const data = res?.data;
          setReviewed(data?.Reviewed);
          setLiked(data?.Liked);
          setWatchlisted(data?.Watchlisted);
        }
      });
    }
  }, [UserStore.isLoadedFromLocal, UserStore.isLoggedIn]);

  const handleLikeFilm = () => {
    toggleLike().then((res) => {
      if (res?.data) {
        setLiked(!liked);
        enqueueSnackbar(`${liked ? "Unliked" : "Liked"} film. Reload to see updated likes count.`, {
          variant: "success",
        });
      }
    });
  };

  const handleWatchlist = async () => {
    if (watchlisted) {
      await deleteFromWatchlist()
        .then((res) => {
          if (res?.data) {
            setWatchlisted(false);
            enqueueSnackbar("Film deleted from watchlist.", { variant: "success" });
          }
        })
        .catch((err) => {
          enqueueSnackbar(err.response.data.userMsg, { variant: "error" });
        });
    } else {
      await addToWatchlist()
        .then((res) => {
          if (res?.data) {
            setWatchlisted(true);
            enqueueSnackbar("Film added to watchlist.", { variant: "success" });
          }
        })
        .catch((err) => {
          enqueueSnackbar(err.response.data.userMsg, { variant: "error" });
        });
    }
  };

  return (
    <Box display={"flex"} gap={1} justifyContent={"space-evenly"} pl={1}>
      <ReviewDialog filmTitle={filmTitle} releasedYear={releasedYear}>
        <CustomButton1>
          <RemoveRedEyeRoundedIcon fontSize={"large"} sx={{ color: reviewed ? "#00c030" : "#bcd" }} />
          Review
        </CustomButton1>
      </ReviewDialog>
      <CustomButton1 onClick={handleLikeFilm}>
        <FavoriteIcon fontSize={"large"} sx={{ color: liked ? "#ff9010" : "#bcd" }} />
        Like
      </CustomButton1>
      <CustomButton1 onClick={handleWatchlist}>
        <WatchLaterIcon fontSize={"large"} sx={{ color: watchlisted ? "#209ce4" : "#bcd" }} />
        Watchlist
      </CustomButton1>
    </Box>
  );
});

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
