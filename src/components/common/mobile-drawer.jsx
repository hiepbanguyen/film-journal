import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Button, IconButton, Link, Stack, SwipeableDrawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "./logo.jsx";

export default function MobileDrawer(props) {
  const { pages } = props;
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
        <Stack mt={2} gap={1} sx={{ width: 300, color: "#fff" }}>
          <Logo />
          {pages.map((i, idx) => (
            <Button key={idx} sx={{ color: "inherit" }}>
              <Typography>
                <Link href={i.href}>{i.label}</Link>
              </Typography>
            </Button>
          ))}
        </Stack>
      </SwipeableDrawer>
    </div>
  );
}
