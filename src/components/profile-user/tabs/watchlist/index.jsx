import * as React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { WatchlistFilmsGrid } from "./films-grid.jsx";

export const UserWatchList = () => {
  const { username } = useParams();
  return (
    <Box
      sx={{
        marginTop: "32px",
      }}
    >
      <WatchlistFilmsGrid username={username} />
    </Box>
  );
};
