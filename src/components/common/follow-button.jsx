import { Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done.js";
import ClearIcon from "@mui/icons-material/Clear.js";
import AddIcon from "@mui/icons-material/Add.js";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import UserStore from "../../store/user.store.js";

export const FollowButton = ({ followed, targetUsername }) => {
  const navigate = useNavigate();
  const [following, setFollowing] = React.useState(!!followed);

  const handleFollow = () => {
    if (!UserStore.isLoggedIn) {
      navigate("/sign-in");
      return;
    }
    setFollowing(true);
  };

  const handleUnfollow = () => {
    setFollowing(false);
  };

  if (UserStore.isLoggedIn && UserStore.user.UserName === targetUsername) return <></>;
  return (
    <>
      {following ? (
        <Button
          onClick={() => handleUnfollow()}
          className="btn-remove-follow"
          sx={{
            "&:hover .done-icon": {
              backgroundColor: "#000",
              display: "none",
            },
            "&:hover .clear-icon": {
              display: "inline",
            },
            display: "inline-block",
            borderRadius: "50%",
            minWidth: "unset",
            padding: "0",
            height: "30px",
          }}
        >
          <DoneIcon
            className="done-icon"
            sx={{
              color: "#fff",
              backgroundColor: "#00b020",
              fontSize: "30px",
              padding: "4px",
              borderRadius: "50%",
            }}
          ></DoneIcon>
          <ClearIcon
            className="clear-icon"
            sx={{
              color: "#fff",
              backgroundColor: "#ff9010",
              fontSize: "30px",
              padding: "4px",
              borderRadius: "50%",
              display: "none",
            }}
          ></ClearIcon>
        </Button>
      ) : (
        <Button
          onClick={() => handleFollow()}
          sx={{
            display: "inline-block",
            borderRadius: "50%",
            minWidth: "unset",
            padding: "0",
            height: "30px",
          }}
        >
          <AddIcon
            className="add-icon"
            sx={{
              color: "#fff",
              backgroundColor: "#556677",
              fontSize: "30px",
              padding: "4px",
              borderRadius: "50%",
              transition: "0.2s",
              "&:hover": {
                backgroundColor: "#8e99a4",
              },
            }}
            onClick={() => followingMember(member)}
          ></AddIcon>
        </Button>
      )}
    </>
  );
};
