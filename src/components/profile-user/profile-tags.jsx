import { Box, Divider } from "@mui/material";
import * as React from "react";
import Tags from "../lists/tags";

export default function ProfileTags() {
  return (
    <Box sx={{ marginBottom: "24px" }}>
      <Box
        sx={{
          fontSize: { xs: "12px", md: "14px" },
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "23px",
        }}
      >
        <Box sx={{ color: "#fff", textDecoration: "none", "&:hover": { color: "#40bcf4" } }} component="a">
          tags
        </Box>
        <Box sx={{ color: "#fff", textDecoration: "none", "&:hover": { color: "#40bcf4" } }} component="a">
          23
        </Box>
      </Box>
      <Divider variant={"fullWidth"} />
      <Box mt={2}>
        <Tags />
      </Box>
    </Box>
  );
}
