import * as React from "react";
import { Box, Button, Divider, IconButton, Stack, SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "./logo.jsx";
import { AnimatedUnderlineBox } from "../animated-underline-box.jsx";
import { Link } from "react-router-dom";
import { PageIcon } from "./header/index.jsx";

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
        sx={{
          "& .MuiPaper-root": {
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <Stack mt={2} gap={1} sx={{ width: 280, color: "#fff" }}>
          <Logo />
          <Stack divider={<Divider variant={"middle"} sx={{ borderColor: "#9ab" }} />} mt={1}>
            {pages.map((i, idx) => (
              <React.Fragment key={idx}>
                <Box component={Link} to={i.href} display={"flex"} justifyContent={"center"}>
                  <Button
                    fullWidth
                    sx={{ color: "inherit", mt: 1, textTransform: "uppercase" }}
                    onClick={() => {
                      setOpenDrawer(false);
                    }}
                  >
                    <AnimatedUnderlineBox open={currPath === i.href}>
                      <PageIcon label={i.label} />
                      {i.label}
                    </AnimatedUnderlineBox>
                  </Button>
                </Box>
              </React.Fragment>
            ))}
          </Stack>
        </Stack>
      </SwipeableDrawer>
    </div>
  );
}
