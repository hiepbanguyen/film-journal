import { Box, Button, Container, Divider, Grid, Link, Typography } from "@mui/material";
import Timestamp from "./timestamp.jsx";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const articles = [
  {
    topic: "Festival Circuit",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "/",
    imgSrc: "https://a.ltrbxd.com/resized/sm/upload/g9/k6/ev/5y/disco%20boy-0-640-0-360-crop-fill.jpg?k=1da83271e5",
  },
  {
    topic: "Festival Circuit",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "/",
    imgSrc: "https://a.ltrbxd.com/resized/sm/upload/4l/gs/jb/gv/TG_Car-0-640-0-360-crop-fill.jpg?k=d10fa8f047",
  },
  {
    topic: "Festival Circuit",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "/",
    imgSrc: "https://a.ltrbxd.com/resized/sm/upload/j6/n1/k8/m9/0.%20JuliaPorch-0-640-0-360-crop-fill.jpg?k=cf42488f0e",
  },
  {
    topic: "Festival Circuit",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "/",
    imgSrc: "https://a.ltrbxd.com/resized/sm/upload/i6/8x/33/ei/header-0-640-0-360-crop-fill.jpg?k=5f70ab0309",
  },
  {
    topic: "Festival Circuit",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "/",
    imgSrc:
      "https://a.ltrbxd.com/resized/sm/upload/oq/aa/qv/2i/Fancy%20Dance%20-%20Still%201-0-640-0-360-crop-fill.jpg?k=cffcf9d148",
  },
  {
    topic: "Festival Circuit",
    date: new Date(),
    title: "Five to Watch from Berlinale 2023",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Hiep Ba Nguyen",
    link: "/",
    imgSrc: "https://a.ltrbxd.com/resized/sm/upload/kg/j0/u1/m5/header-0-640-0-360-crop-fill.jpg?k=b56f75aecd",
  },
];

const ArticlePreview = (props) => {
  const { topic, title, intro, author, date, link, imgSrc } = props;
  return (
    <Box
      component={Link}
      href={link}
      gap={1}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems="center"
      textAlign={"center"}
      mb={4}
      px={{ sm: 3 }}
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
        }}
      />
      <Typography fontSize={13} fontWeight={600}>
        {topic}
        <Timestamp date={date} />
      </Typography>
      <Box>
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
  );
};

export default function ArticlesAfterSpotlight() {
  return (
    <>
      <Grid container spacing={2} sx={{ position: "relative", top: -60 }}>
        {articles.map((i, idx) => (
          <Grid item key={idx} xs={12} md={4}>
            <ArticlePreview
              topic={i.topic}
              title={i.title}
              intro={i.intro}
              imgSrc={i.imgSrc}
              link={i.link}
              date={i.date}
              author={i.author}
            />
          </Grid>
        ))}
      </Grid>
      <Box display={"flex"} flexDirection={"row-reverse"}>
        <Button sx={{ textTransform: "none", color: "#456", fontWeight: 600 }}>
          Older article <NavigateNextIcon sx={{ fontSize: 20 }} />
        </Button>
      </Box>
    </>
  );
}
