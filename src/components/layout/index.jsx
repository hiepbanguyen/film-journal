import Header from "./header.jsx";
import Footer from "./footer.jsx";
import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function AppLayout(props) {
  const {showHeader, showFooter, children} = props;
  return (
    <>
      {showHeader && <Header/>}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {children}
          {/*{showFooter && <Footer/>}*/}
        </Container>
      </ThemeProvider>
    </>
  )
}