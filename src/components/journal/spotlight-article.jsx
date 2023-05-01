import { Box, Typography } from "@mui/material";
import Timestamp from "./timestamp.jsx";
import { Link } from "react-router-dom";

export default function SpotlightArticle(props) {
  const { topic, title, intro, author, date, link, imgSrc } = props;
  return (
    <Box component={Link} to={link ?? ""} display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={5}>
      <Box
        component={"img"}
        src={imgSrc}
        width={{ md: "50%" }}
        mx={{ sm: 10, md: 0 }}
        sx={{
          transition: "all .2s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
          borderRadius: 1,
        }}
      />

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems="center"
        textAlign={"center"}
        flexGrow={1}
        px={{ sm: 3 }}
      >
        <Typography fontWeight={600} mb={1}>
          {topic}
          <Timestamp date={date} />
        </Typography>
        <Typography color={"#fff"} variant={"h4"} fontWeight={600} sx={{ ":hover": { textDecoration: "underline" } }}>
          {title}
        </Typography>
        <Typography variant={"h5"} color={"#bcd"} fontWeight={500}>
          {intro}
        </Typography>
        <Typography
          mt={2}
          letterSpacing={3}
          textTransform={"uppercase"}
          color={"#9ab"}
          fontSize={12}
          fontWeight={600}
          fontFamily={"Graphik-Regular-Web,sans-serif"}
        >
          {author}
        </Typography>
      </Box>
    </Box>
  );
}
