import Header from "./header/index.jsx";
import Footer from "./footer.jsx";
import { Box } from "@mui/material";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Box minHeight={"calc(100vh - 92px)"}>{props.children}</Box>
      <Footer />
    </>
  );
}
