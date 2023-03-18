import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchBox from "./search-box.jsx";
import UserMenu from "./user-menu.jsx";
import MobileDrawer from "../mobile-drawer.jsx";
import LoginIcon from "@mui/icons-material/Login";
import { Logo } from "../logo.jsx";
import { AnimatedUnderlineBox } from "../animated-underline-box.jsx";
import { Link } from "react-router-dom";

const pages = [
  { href: "/films", label: "films" },
  { href: "/lists", label: "lists" },
  { href: "/members", label: "members" },
  { href: "/journals", label: "journals" },
];

export const HeaderHeight = 64;

function Header() {
  const signed_in = false;

  return (
    <>
      <AppBar position="fixed" sx={{ background: "rgba(240, 240, 240, 0.1)", height: HeaderHeight, boxShadow: "none" }}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                justifyContent: "space-between",
              },
            })}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }} mr={1}>
              <MobileDrawer pages={pages} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
              <Logo />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((i, idx) => (
                <Link to={i.href} key={idx}>
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    <AnimatedUnderlineBox>{i.label}</AnimatedUnderlineBox>
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexGrow: 0 }}>
              <SearchBox />
              <Box width={10}></Box>
              {signed_in ? (
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box height={HeaderHeight}></Box>
    </>
  );
}

export default Header;
