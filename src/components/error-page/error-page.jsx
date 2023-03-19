import { useRouteError } from "react-router-dom";
import Layout from "../common/layout.jsx";
import { Box, Typography } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <Box
        pt={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Typography variant={"h2"}>Oops!</Typography>
        <Typography>Sorry, an unexpected error has occurred.</Typography>
        <Typography>
          <i>{error.statusText || error.message}</i>
        </Typography>
      </Box>
    </Layout>
  );
}
