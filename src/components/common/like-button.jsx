import { observer } from "mobx-react-lite";
import React from "react";
import UserStore from "../../store/user.store.js";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder.js";

export const LikeButton = observer(() => {
  const [likeState, setLikeState] = React.useState(true);

  return (
    <>
      {UserStore.isLoggedIn && (
        <Button
          onClick={() => setLikeState(!likeState)}
          variant={"outlined"}
          sx={{
            px: 1,
            py: 0.5,
            borderColor: likeState ? "transparent" : "#9ab",
            bgcolor: likeState ? "rgba(255, 89, 89, 1)" : "transparent",
            color: likeState ? "#fff" : "#9ab",
            ":hover": {
              bgcolor: likeState ? "rgb(199,68,68)" : "transparent",
              borderColor: likeState ? "transparent" : "rgba(255, 89, 89, 1)",
              color: likeState ? "#fff" : "rgba(255, 89, 89, 1) ",
            },
          }}
        >
          {likeState ? (
            <>
              <FavoriteIcon sx={{ fontSize: 20, mr: 0.5 }} /> {"Liked"}
            </>
          ) : (
            <>
              <FavoriteBorderIcon sx={{ fontSize: 20, mr: 0.5 }} /> {"Like"}
            </>
          )}
        </Button>
      )}
    </>
  );
});
