import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { estimatedTimeElapsed } from "../../utils/time.js";
import React from "react";

export function Comment(props) {
  return (
    <>
      <Box
        my={2}
        sx={{
          flexGrow: 1,
          color: "#9ab",
          fontSize: "14px",
          display: "flex",
        }}
      >
        <Grid container spacing={1}>
          {/* User-time */}
          <Grid item xs={12} md={3}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Box
                component={Link}
                to={props.Username ? "/u/" + props.Username : ""}
                display={"flex"}
                alignItems={"center"}
                gap={1}
                sx={{ ":hover": { color: "#fff" } }}
              >
                <Avatar sx={{ width: 25, height: 25 }} alt="User Avatar test" src={props.Avatar ?? ""} />
                <Typography variant={"body2"} fontWeight={600}>
                  {props.FullName ?? props.Username ?? ""}
                </Typography>
              </Box>
              <Typography variant={"body2"}>
                {estimatedTimeElapsed(new Date(props.CreatedDate ?? Date.now()))}
              </Typography>
            </Box>
          </Grid>
          {/* Comment-content */}
          <Grid item xs={12} md={9} sx={{ display: "flex", alignItems: "center" }}>
            {props.Content ?? ""}
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
}
