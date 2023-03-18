import Header from "./header/index.jsx";
import Footer from "./footer.jsx";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Layout from "./layout";

export default function Root() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
