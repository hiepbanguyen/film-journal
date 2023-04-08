export const COMPONENT_THEME = {
  MuiButton: {
    styleOverrides: {
      root: {
        color: "#fff",
        boxShadow: 0,
        textTransform: "none",
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        ":hover": {
          border: "1px solid #fff",
        },
      },
    },
  },
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
        borderColor: "#456",
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

  MuiRating: {
    defaultProps: {
      precision: 0.5,
    },
    styleOverrides: {
      iconFilled: {
        color: "#00e054",
      },
      iconEmpty: {
        color: "#bcd",
      },
      sizeSmall: {
        fontSize: 16,
      },
      sizeMedium: {
        fontSize: 20,
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        background: "#456",
        color: "#9ab",
        "&:hover": {
          color: "#fff",
          background: "#678",
        },
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        "fieldset,svg": {
          borderColor: "#9ab",
          color: "#9ab",
        },
        "&:hover fieldset": {
          borderColor: "#fff !important",
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: {
        "& .MuiDialog-paper": {
          background: "#eee",
        },
      },
    },
  },
  // MuiMenuItem: {
  //   styleOverrides: {
  //     root: {
  //       "& .Mui-selected": {
  //         fontWeight: "bold",
  //       },
  //     },
  //   },
  // },
  MuiMenu: {
    styleOverrides: {
      root: {
        "& .MuiPaper-root": {
          background: "#9ab",
          color: "#2c3440",
        },
        "& .MuiMenuItem-root": {
          "&:hover": {
            background: "#678",
            color: "#fff",
          },
        },
        "& .Mui-selected": {
          fontWeight: "bold",
        },
      },
    },
  },
};
