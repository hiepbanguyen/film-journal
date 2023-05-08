import { Box, Button, Grid, Typography } from "@mui/material";
import Timestamp from "./timestamp.jsx";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

export const articles = [
  {
    topic: "News",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "",
    imgSrc: "https://a.ltrbxd.com/resized/sm/upload/g9/k6/ev/5y/disco%20boy-0-640-0-360-crop-fill.jpg?k=1da83271e5",
  },
  {
    topic: "News",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "",
    imgSrc: "https://a.ltrbxd.com/resized/sm/upload/4l/gs/jb/gv/TG_Car-0-640-0-360-crop-fill.jpg?k=d10fa8f047",
  },
  {
    topic: "News",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "",
    imgSrc: "https://a.ltrbxd.com/resized/sm/upload/j6/n1/k8/m9/0.%20JuliaPorch-0-640-0-360-crop-fill.jpg?k=cf42488f0e",
  },
  {
    topic: "News",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "",
    imgSrc: "https://a.ltrbxd.com/resized/sm/upload/i6/8x/33/ei/header-0-640-0-360-crop-fill.jpg?k=5f70ab0309",
  },
  {
    topic: "News",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "",
    imgSrc:
      "https://a.ltrbxd.com/resized/sm/upload/oq/aa/qv/2i/Fancy%20Dance%20-%20Still%201-0-640-0-360-crop-fill.jpg?k=cffcf9d148",
  },
  {
    topic: "News",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "",
    imgSrc: "https://a.ltrbxd.com/resized/sm/upload/kg/j0/u1/m5/header-0-640-0-360-crop-fill.jpg?k=b56f75aecd",
  },
];

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
              author={i?.Author ? JSON.parse(i.Author.replace("\\", ""))?.name : ""}
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
