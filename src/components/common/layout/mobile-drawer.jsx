import * as React from "react";
import { Box, Button, Divider, IconButton, Stack, SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "./logo.jsx";
import { AnimatedUnderlineBox } from "../animated-underline-box.jsx";
import { Link } from "react-router-dom";

export default function MobileDrawer(props) {
  const { pages, currPath } = props;
  const [openDrawer, setOpenDrawer] = React.useState(false);

  // const toggleDrawer = (event) => {
  //   if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
  //     return;
  //   }
  //
  //   setOpenDrawer(!openDrawer);
  // };

  return (
    <div>
      <IconButton
        onClick={() => {
          setOpenDrawer(true);
        }}
      >
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
      <SwipeableDrawer
        anchor={"left"}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
      >
        <Stack mt={2} gap={1} sx={{ width: 250, color: "#fff" }}>
          <Logo />
          <Box mt={1}>
            {pages.map((i, idx) => (
              <React.Fragment key={idx}>
                <Box component={Link} to={i.href} display={"flex"} justifyContent={"center"}>
                  <Button sx={{ color: "inherit", mt: 1, textTransform: "uppercase" }}>
                    <AnimatedUnderlineBox open={currPath === i.href}>{i.label}</AnimatedUnderlineBox>
                  </Button>
                </Box>
                {idx !== pages.length - 1 ? <Divider variant={"middle"} sx={{ borderColor: "#9ab" }} /> : <></>}
              </React.Fragment>
            ))}
          </Box>
        </Stack>
      </SwipeableDrawer>
    </div>
  );
}
