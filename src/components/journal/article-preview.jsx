import { Box, Link, Typography } from "@mui/material";
import Timestamp from "./timestamp.jsx";

export default function ArticlePreview(props) {
  const { title, intro, author, date, link, imgSrc } = props;
  return (
    <Box component={Link} href={link} gap={1} display={"flex"} flexDirection={"column"} mb={4} px={{ sm: 3 }}>
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
          variant={"h6"}
          color={"#456"}
          fontWeight={600}
          sx={{ ":hover": { textDecoration: "underline" } }}
        >
          {title}
          {"."}
        </Typography>
        <Typography display={"inline"} color={"#89a"} fontSize={18} fontWeight={500}>
          {intro}
        </Typography>
      </Box>
      <Typography
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
  );
}
