import { Avatar, Box, Divider, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

export default function ListFollow({ following }) {
  return (
    <Box mt={3.8}>
      <Box sx={{ marginBottom: "24px" }}>
        <Link to={"following"}>
          <Box
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "23px",
              ":hover": { color: "#40bcf4" },
            }}
          >
            <Typography>{"Following"}</Typography>
            <Typography variant={"caption"}>{following?.Total ?? 0}</Typography>
          </Box>
        </Link>

        <Divider variant={"fullWidth"} />
        <Box mt={2} display={"flex"} flexWrap={"wrap"} gap={0.25}>
          {(following?.List ?? []).map((i, idx) => (
            <Link key={idx} to={`/u/${i?.UserName}`}>
              <Avatar key={idx} src={i?.Avatar} />
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
