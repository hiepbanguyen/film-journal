import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function MentionedInArticles({ data }) {
  if (data?.length === 0) return <></>;
  return (
    <Box>
      <Box className="tag_reviews">
        <p style={{ textTransform: "uppercase" }}>Mentioned in articles</p>
      </Box>
      <Box mt={5}>
        {data?.length > 0 &&
          data.map((i, idx) => (
            <Box
              component={Link}
              to={`/journals/${i?.JournalID}`}
              key={idx}
              sx={{ display: "flex", bgcolor: "#2c3440", borderRadius: 1 }}
            >
              <Box
                component={"img"}
                src={i?.Banner}
                alt="Article banner"
                sx={{ height: 120, borderRadius: "4px 0 0 4px" }}
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
