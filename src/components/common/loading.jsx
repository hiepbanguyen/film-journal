import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const Loading = (props) => {
  return (
    <Box display={"flex"} sx={{ justifyContent: "center" }} py={props.paddingY ?? 5}>
      <CircularProgress />
    </Box>
  );
};
