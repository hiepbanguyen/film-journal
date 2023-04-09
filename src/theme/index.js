import { createTheme } from "@mui/material/styles";
import { COMPONENT_THEME } from "./component.theme";

// Create a theme instance.
const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#5946FF",
    // },
    // text: {
    //   primary: "#504C67",
    //   secondary: "#737373",
    // },
    // success: {
    //   main: "#00DA57",
    //   contrastText: "white",
    // },
    // background: {
    //   default: "#F3F8FF",
    //   // paper: "#F3F8FF", //F8F8F8
    // },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 630,
      md: 980,
      lg: 1200,
      xl: 1440,
    },
  },
  components: COMPONENT_THEME,
});

export default theme;
