import React from "react";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder.js";
import useAxios from "axios-hooks";
import UserStore from "../../store/user.store.js";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

//TODO: reload like
export const LikeButton = observer(({ likes, type, id }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = React.useState(false);
  const [likesCount, setLikesCount] = React.useState(likes);
  const [{ data: userLiked, loading: userLikedLoading, error: userLikedError }, getUserLiked] = useAxios(
    {
      url: `Users/${id}/check?type=${type}`,
      method: "GET",
    },
    { manual: true, useCache: false },
  );

  const [, toggleLike] = useAxios(
    {
      url: `Likes/${id}?type=${type}`,
      method: "POST",
    },
    { manual: true },
  );

  // console.log("likescount", likes);
  React.useEffect(() => {
    if (UserStore.isLoggedIn) {
      // console.log("logged in");
      getUserLiked()
        .then((res) => {
          if (res?.data !== undefined) {
            setIsLiked(res.data);
          }
        })
        .catch((e) => {
          setIsLiked(false);
        });
    } else {
      setIsLiked(false);
    }
    // }
  }, [UserStore.isLoggedIn, id]);

  const handleLikeButton = () => {
    if (!UserStore.isLoggedIn) {
      navigate("/sign-in");
      return;
    }
    setLikesCount(likesCount + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
    toggleLike().catch((e) => {
      setLikesCount(likesCount + (isLiked ? -1 : 1));
      setIsLiked(!isLiked);
    });
  };
  return (
    <>
      <Button
        onClick={handleLikeButton}
        variant={"outlined"}
        sx={{
          px: 1,
          py: 0.5,
          borderColor: isLiked ? "transparent" : "#9ab",
          bgcolor: isLiked ? "rgba(255, 89, 89, 1)" : "transparent",
          color: isLiked ? "#fff" : "#9ab",
          ":hover": {
            bgcolor: isLiked ? "rgb(199,68,68)" : "transparent",
            borderColor: isLiked ? "transparent" : "rgba(255, 89, 89, 1)",
            color: isLiked ? "#fff" : "rgba(255, 89, 89, 1) ",
          },
        }}
      >
        {isLiked ? (
          <>
            <FavoriteIcon sx={{ fontSize: 20, mr: 0.5 }} /> {"Liked"}
          </>
        ) : (
          <>
            <FavoriteBorderIcon sx={{ fontSize: 20, mr: 0.5 }} /> {"Like"}
          </>
        )}
      </Button>
      <span>
        {likesCount} {" likes"}
      </span>
    </>
  );
});
