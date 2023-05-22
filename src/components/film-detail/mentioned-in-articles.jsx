import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function MentionedInArticles({ data }) {
  return (
    <Box>
      <Box className="tag_reviews">
        <p style={{ textTransform: "uppercase" }}>Mentioned in articles</p>
      </Box>
      <Box mt={2}>
        {data?.length === 0 && <Typography textAlign={"center"}>No articles</Typography>}
        {data?.length > 0 &&
          data.map((i, idx) => (
            <Box
              mb={2}
              minHeight={80}
              component={Link}
              to={`/journals/${i?.JournalID}`}
              key={idx}
              sx={{ display: "flex", bgcolor: "#2c3440", borderRadius: 1 }}
            >
              <Box
                sx={(theme) => ({
                  height: 120,
                  borderRadius: "4px 0 0 4px",
                  [theme.breakpoints.only("xs")]: { display: "none" },
                })}
                component={"img"}
                src={i?.Banner}
                alt="Article banner"
              />
              <Box className="cart_summary_title" p={1}>
                <p>
                  {i?.Title}
                  <b> {"  READ ARTICLE"}</b>
                </p>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
