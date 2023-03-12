import { styled } from "@mui/styles";
import { Box, Link } from "@mui/material";

export const AnimatedLink = styled(Link)(({ theme }) => ({
  color: "inherit",
  position: "relative",
  textDecoration: "none",

  "&:after": {
    // background: "none repeat scroll 0 0 transparent",
    content: `""`,
    position: "absolute",
    display: "block",
    height: 1,
    left: "50%",
    bottom: 0,
    width: "0%",
    borderBottom: "2px solid #504C67",
    transition: "width 0.3s ease 0s, left 0.3s ease 0s",
  },
  "&:hover": {
    // textDecoration: "none",
    "&:after": {
      width: "100%",
      left: 0,
      // transition: (theme.transitions as any).create(["width"]),
    },
  },
}));
