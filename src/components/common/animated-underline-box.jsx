import { Box, styled } from "@mui/system";

export const AnimatedUnderlineBox = styled(Box, {
  shouldForwardProp: (props) => props !== "open",
})(({ theme, open }) => ({
  display: "flex",
  gap: "4px",
  color: "rgba(255,255,255,0.75)",
  position: "relative",
  textDecoration: "none",
  textAlign: "center",
  "&:after": {
    // background: "none repeat scroll 0 0 transparent",
    content: `""`,
    position: "absolute",
    display: "block",
    left: "50%",
    bottom: -6,
    width: "0%",
    borderBottom: `2px solid`,
    borderBottomColor: "inherit",
    transition: "width 0.3s ease 0s, left 0.3s ease 0s",
  },
  "&:hover": {
    // textDecoration: "none",
    color: "inherit",
    "&:after": {
      width: "100%",
      left: 0,
      // transition: (theme.transitions as any).create(["width"]),
    },
  },
  ...(open && {
    //@ts-ignore
    color: "#fff",
  }),
}));
