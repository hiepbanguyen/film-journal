import UserStore from "../../../store/user.store.js";
import UserMenu from "./user-menu.jsx";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login.js";
import * as React from "react";
import { observer } from "mobx-react-lite";

export const AuthBox = observer(() => {
  const loading = !UserStore.isLoadedFromLocal;

  return (
    <>
      {loading ? null : UserStore.isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <Button variant={"contained"} color={"warning"} href={"/sign-in"} sx={{ boxShadow: "none" }}>
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
              href={"/sign-in"}
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: {
                  display: "none",
                },
              })}
            />
          </Button>
        </>
      )}
    </>
  );
});
