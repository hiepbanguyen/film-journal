import { Box, Button, Grid, Typography } from "@mui/material";
import Timestamp from "./timestamp.jsx";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

export const ArticlePreview = (props) => {
  const { topic, title, intro, author, date, link, imgSrc, bgColor } = props;
  return (
    <Box
      component={Link}
      to={link}
      gap={1}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems="center"
      textAlign={"center"}
      mb={4}
      mx={{ sm: 3 }}
      borderRadius={1}
      bgcolor={bgColor}
    >
      <Box
        component={"img"}
        src={imgSrc}
        width={"100%"}
        sx={{
          transition: "all .2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
          borderRadius: !!bgColor ? "4px 4px 0 0" : 1,
        }}
      />
      <Box p={!!bgColor && 2}>
        <Typography fontSize={13} fontWeight={600} color={"#9ab"}>
          {topic}
          <Timestamp date={date} />
        </Typography>
        <Box mt={1} mb={2}>
          <Typography
            display={"inline"}
            variant={"h6"}
            fontWeight={600}
            sx={{ ":hover": { textDecoration: "underline" } }}
          >
            {title}
            {"."}
          </Typography>
          <Typography display={"inline"} color={"#89a"} fontSize={18} fontWeight={500}>
            {" "}
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
    </Box>
  );
};

export default function ArticlesAfterSpotlight({ data }) {
  return (
    <>
      <Grid container spacing={2} sx={{ position: "relative", top: -60, color: "#456" }}>
        {data.map((i, idx) => (
          <Grid item key={idx} xs={12} md={4}>
            <ArticlePreview
              topic={i?.Category}
              title={i?.Title}
              intro={i?.Intro}
              imgSrc={i?.Banner}
              link={`${i?.JournalID}`}
              date={i?.ModifiedDate}
              author={i?.Author ? JSON.parse(i.Author)?.name : ""}
            />
          </Grid>
        ))}
      </Grid>
      <Box display={"flex"} flexDirection={"row-reverse"}>
        <Link to={"all"}>
          <Button sx={{ textTransform: "none", color: "#456", fontWeight: 600 }}>
            Older article <NavigateNextIcon sx={{ fontSize: 20 }} />
          </Button>
        </Link>
      </Box>
    </>
  );
}
