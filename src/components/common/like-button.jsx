import React, { useEffect } from "react";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder.js";
import useAxios from "axios-hooks";
import UserStore from "../../store/user.store.js";
import { useNavigate } from "react-router-dom";

export const LikeButton = ({ likes, type, id }) => {
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = React.useState(likes);
  const [isLiked, setIsLiked] = React.useState(false);
  const [{ data: userLiked, loading: userLikedLoading, error: userLikedError }, getUserLiked] = useAxios(
    {
      url: `Users/${id}/check?type=${type}`,
    },
    { manual: true },
  );

  const [, toggleLike] = useAxios(
    {
      url: `Likes/${id}?type=${type}`,
      method: "POST",
    },
    { manual: true },
  );
  useEffect(() => {
    if (UserStore.isLoggedIn) {
      getUserLiked();
    }
  }, [UserStore.isLoggedIn]);

  useEffect(() => {
    if (!userLikedLoading) setIsLiked(userLiked);
  }, [userLikedLoading]);

  const handleLikeButton = async () => {
    if (!UserStore.isLoggedIn) {
      navigate("/sign-in");
      return;
    }
    await toggleLike();
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
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
        {likeCount} {" likes"}
      </span>
    </>
  );
};
