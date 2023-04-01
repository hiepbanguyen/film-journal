import Header from "./header/index.jsx";
import Footer from "./footer.jsx";
import { Box } from "@mui/material";

export default function Layout(props) {
  return (
    <>
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
      <Box
        height={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              background: "rgba(255,255,255,0.2)",
              width: 15,
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255,255,255,0.7)",
            },
          },
        })}
      >
        <Header />
        <Box>{props.children}</Box>
        <Footer />
      </Box>
    </>
  );
}
