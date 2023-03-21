import { Components, Theme } from "@mui/material";
import { SelectIcon } from "../components/icons/select_icon";

export const COMPONENT_THEME = {
  MuiButton: {
    styleOverrides: {
      root: {
        color: "#fff",
        elevation: 0,
      },
    },
  },
  // MuiBottomNavigation: {
  //   styleOverrides: {
  //     root: {
  //       // backgroundColor: "rgb(255 255 255 / 50%)",
  //       // backdropFilter: "blur(2px)",
  //       background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  //       backdropFilter: "blur(12px)",
  //       borderTop: "1px solid #ffffff3b",
  //     },
  //   },
  // },
  // MuiBottomNavigationAction: {
  //   styleOverrides: {
  //     root: {
  //       color: "#292D32",
  //       "&.Mui-selected": {
  //         color: "#6555EE",
  //       },
  //     },
  //     label: {
  //       fontSize: 12,
  //       "&.Mui-selected": {
  //         fontSize: 12,
  //       },
  //     },
  //   },
  // },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 5,
        background: "#445566",
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      elevation1: {
        boxShadow: "0px 4px 16px rgb(0 0 0 / 20%)",
      },
      root: {
        background: "#445566",
      },
    },
  },

  MuiLink: {
    styleOverrides: {
      root: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: {
        color: "rgba(255,255,255,0.3)",
        borderColor: "rgba(255,255,255,0.3)",
      },
    },
  },

  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: "inherit",
      },
    },
  },
};
