import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { PaginatedFilmsGrid } from "../../../common/paginated-films-grid.jsx";

export const UserWatchList = (props) => {
  const { username } = useParams();
  return (
    <Box
      sx={{
        marginTop: "32px",
      }}
    >
      <PaginatedFilmsGrid fetchUrl={`Users/${username}/Profile/Watchlist`}>
        <Typography textTransform={"uppercase"} mt={3}>
          Watch List
        </Typography>
        <Divider />
      </PaginatedFilmsGrid>
    </Box>
  );
};
