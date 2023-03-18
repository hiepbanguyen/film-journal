import Header from "./header/index.jsx";
import Footer from "./footer.jsx";
import { Box } from "@mui/material";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: -5000,
          backgroundColor: "#14181c",
          backgroundSize: "cover",
          height: "100vh",
        }}
      />
      <Box minHeight={"calc(100vh - 92px)"}>{props.children}</Box>
      <Footer />
    </>
  );
}
