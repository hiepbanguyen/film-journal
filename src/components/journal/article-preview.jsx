import { Box, Typography } from "@mui/material";
import Timestamp from "./timestamp.jsx";
import { Link } from "react-router-dom";
import React from "react";

export default function ArticlePreview(props) {
  const { title, intro, author, date, link, imgSrc, small, titleColor } = props;
  return (
    <Box component={Link} to={link} gap={1} display={"flex"} flexDirection={"column"} mb={4} px={{ sm: 3 }}>
      <Box
        component={"img"}
        src={imgSrc}
        width={"100%"}
        sx={{
          transition: "all .2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
          borderRadius: 1,
        }}
      />
      <Box>
        <Typography fontSize={13} fontWeight={600}>
          <Timestamp date={date} noSeparator={true} />
        </Typography>
        <Typography
          display={"inline"}
          variant={small ? "body2" : "h6"}
          color={titleColor ?? "#456"}
          fontWeight={600}
          sx={{ ":hover": { textDecoration: "underline" } }}
        >
          {title}
          {"."}
        </Typography>
        <Typography display={"inline"} color={"#89a"} fontSize={small ? 13 : 18} fontWeight={500}>
          {" "}
          {String(intro).slice(0, 140)}
          {intro.length > 140 && (
            <>
              {"... "}
              <Box component={"span"} sx={{ ":hover": { color: "#456" } }}>
                Read more
              </Box>
            </>
          )}
        </Typography>
      </Box>
      <Typography
        letterSpacing={3}
        textTransform={"uppercase"}
        color={"#9ab"}
        fontSize={small ? 10 : 12}
        fontWeight={600}
        fontFamily={"Graphik-Regular-Web,sans-serif"}
      >
        {author}
      </Typography>
    </Box>
  );
}
