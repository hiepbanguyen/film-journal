import { Box } from "@mui/material";

export default function MentionedInArticles() {
  return (
    <Box>
      <Box className="tag_reviews">
        <p style={{ textTransform: "uppercase" }}>Mentioned in articles</p>
      </Box>
      <Box className="cart_summary" mt={5}>
        <img
          src="https://a.ltrbxd.com/resized/sm/upload/t9/q5/dj/9a/Journal%20header%205-620-620-348-348-crop-fill.jpg?k=ecccb7d256"
          alt=""
        />
        <Box className="cart_summary_title" p={1}>
          <p>
            NEWS The Letterboxd crew rounds up our favorite first-time watches of 2022.<b> READ POST</b>
          </p>
        </Box>
      </Box>
    </Box>
  );
}
