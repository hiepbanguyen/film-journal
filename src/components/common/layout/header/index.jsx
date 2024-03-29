import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchBox from "./search-box.jsx";
import MobileDrawer from "../mobile-drawer.jsx";
import { Logo } from "../logo.jsx";
import { AnimatedUnderlineBox } from "../../animated-underline-box.jsx";
import { Link, useLocation } from "react-router-dom";
import { AuthBox } from "./auth-box.jsx";
import TheatersIcon from "@mui/icons-material/Theaters";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp.js";
import PeopleIcon from "@mui/icons-material/People";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const pages = [
  { href: "/films", label: "films" },
  { href: "/lists", label: "lists" },
  { href: "/members", label: "members" },
  { href: "/journals", label: "journals" },
];

export const PageIcon = (props) => {
  const { label } = props;

  return (
    <>
      {label === "films" && <TheatersIcon fontSize={"small"} />}
      {label === "lists" && <GridViewSharpIcon fontSize={"small"} />}
      {label === "members" && <PeopleIcon sx={{ fontSize: 22 }} />}
      {label === "journals" && <NewspaperIcon fontSize={"small"} />}
    </>
  );
};

export const HeaderHeight = 64;

function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          // background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0.1) 100%)",
          background: "rgba(0,0,0,0.5)",
          boxShadow: "none",
          backdropFilter: "blur(5px)",
          "&:hover": {
            background: "rgba(0,0,0,0.7)",
          },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                justifyContent: "space-between",
              },
              height: HeaderHeight,
            })}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }} mr={1}>
              <MobileDrawer pages={pages} currPath={pathname} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
              <Logo />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 0.5 }}>
              {pages.map((i, idx) => (
                <Link to={i.href} key={idx} style={{ textDecoration: "none" }}>
                  <Button sx={{ my: 2, color: "white", display: "block", textTransform: "uppercase" }}>
                    <AnimatedUnderlineBox open={pathname === i.href}>
                      <PageIcon label={i.label} />
                      {i.label}
                    </AnimatedUnderlineBox>
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ display: "flex", gap: 0.5, flexGrow: 0 }}>
              <SearchBox />
              <AuthBox />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box height={HeaderHeight}></Box>
    </>
  );
}

export default Header;
