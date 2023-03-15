import { createTheme } from "@mui/material/styles";
import { TYPO_THEME } from "./typo.theme";
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
  components: COMPONENT_THEME,
  typography: TYPO_THEME,
});

export default theme;
