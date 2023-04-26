import UserStore from "../../../../store/user.store.js";
import UserMenu from "./user-menu.jsx";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login.js";
import * as React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export const AuthBox = observer(() => {
  const loading = !UserStore.isLoadedFromLocal;

  return (
    <>
      {loading ? null : UserStore.isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <Button variant={"contained"} color={"warning"} sx={{ boxShadow: "none" }}>
            <Link to={"/sign-in"} style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant={"body2"}
                sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                })}
              >
                Sign In
              </Typography>
              <LoginIcon
                sx={(theme) => ({
                  [theme.breakpoints.up("sm")]: {
                    display: "none",
                  },
                })}
              />
            </Link>
          </Button>
        </>
      )}
    </>
  );
});
