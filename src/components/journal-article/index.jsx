import React from "react";
import "./journal-article.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import { Avatar, Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Timestamp from "../journal/timestamp.jsx";
import { articles } from "../journal/articles-after-spotlight.jsx";
import ArticlePreview from "../journal/article-preview.jsx";

function ListIconShare() {
  return (
    <Box display={"flex"} gap={2} justifyContent={"center"}>
      <TwitterIcon></TwitterIcon>

      <FacebookOutlinedIcon></FacebookOutlinedIcon>

      <MailOutlineOutlinedIcon></MailOutlineOutlinedIcon>

      <InsertLinkOutlinedIcon></InsertLinkOutlinedIcon>
    </Box>
  );
}

const data = {
  Banner:
    "https://a.ltrbxd.com/resized/sm/upload/69/2u/4d/eu/xi1DsPSW81udsXfyiAzcdUxhp56-1920-1920-1080-1080-crop-000000.jpg?v=be0e99a9c5",
  Category: "Festival Circuit",
  Title: "Explainer: What’s behind looming Hollywood writers’ strike?",
  Author: {
    Name: "Ba Hiep Nguyen",
    Avatar:
      "https://a.ltrbxd.com/resized/avatar/twitter/4/9/4/7/shard/http___pbs.twimg.com_profile_images_1184457647652663296_PZX58ViG-0-220-0-220-crop.jpg?v=270eae35ac",
  },
  CreatedDate: new Date(),
  Intro:
    "From subversive rom-coms to Hollywood unsavory history Mia Vicino combs through Letterboxd lists to highlight some of the best Asian" +
    " American and Asian Canadian stories for your AAPI month viewing (and year round).",
  Content: [
    {
      type: "text",
      text: "May is Asian American, Native Hawaiian and Pacific Islander Heritage Month in the US, and Asian Heritage Month in Canada. The idea of these “official” recognitions is to celebrate the influence of generations of AAPI immigrants on North American culture and society—an impact that is being felt more and more on screen (and behind the scenes) in contemporary films such as Turning Red, Minari, Nomadland, Fire Island and the forthcoming Past Lives, Joy Ride and Next Goal Wins.",
    },
    {
      type: "pic",
      caption: "This is the picture caption",
      pic: "https://a.ltrbxd.com/resized/sm/upload/he/te/ay/pl/AAPI2023_Header-0-1920-0-0.png?k=eaf334fd6b",
    },
    {
      type: "text",
      text: "May is Asian American, Native Hawaiian and Pacific Islander Heritage Month in the US, and Asian Heritage Month in Canada. The idea of these “official” recognitions is to celebrate the influence of generations of AAPI immigrants on North American culture and society—an impact that is being felt more and more on screen (and behind the scenes) in contemporary films such as Turning Red, Minari, Nomadland, Fire Island and the forthcoming Past Lives, Joy Ride and Next Goal Wins.",
    },
    {
      type: "pic",
      caption: "This is the picture caption",
      pic: "https://a.ltrbxd.com/resized/sm/upload/he/te/ay/pl/AAPI2023_Header-0-1920-0-0.png?k=eaf334fd6b",
    },
    {
      type: "text",
      text: "May is Asian American, Native Hawaiian and Pacific Islander Heritage Month in the US, and Asian Heritage Month in Canada. The idea of these “official” recognitions is to celebrate the influence of generations of AAPI immigrants on North American culture and society—an impact that is being felt more and more on screen (and behind the scenes) in contemporary films such as Turning Red, Minari, Nomadland, Fire Island and the forthcoming Past Lives, Joy Ride and Next Goal Wins.",
    },
    {
      type: "pic",
      caption: "This is the picture caption",
      pic: "https://a.ltrbxd.com/resized/sm/upload/he/te/ay/pl/AAPI2023_Header-0-1920-0-0.png?k=eaf334fd6b",
    },
    {
      type: "text",
      text: "May is Asian American, Native Hawaiian and Pacific Islander Heritage Month in the US, and Asian Heritage Month in Canada. The idea of these “official” recognitions is to celebrate the influence of generations of AAPI immigrants on North American culture and society—an impact that is being felt more and more on screen (and behind the scenes) in contemporary films such as Turning Red, Minari, Nomadland, Fire Island and the forthcoming Past Lives, Joy Ride and Next Goal Wins.",
    },
    {
      type: "text",
      text: "May is Asian American, Native Hawaiian and Pacific Islander Heritage Month in the US, and Asian Heritage Month in Canada. The idea of these “official” recognitions is to celebrate the influence of generations of AAPI immigrants on North American culture and society—an impact that is being felt more and more on screen (and behind the scenes) in contemporary films such as Turning Red, Minari, Nomadland, Fire Island and the forthcoming Past Lives, Joy Ride and Next Goal Wins.",
    },
  ],
};

const JournalArticle = () => {
  return (
    <Box sx={{ fontFamily: "TiemposTextWeb,Georgia,serif,ColorEmoji" }}>
      <Box sx={{ background: "#456", color: "#bcd" }}>
        <Container sx={{ pb: 8, pt: 12, px: { xs: 2, md: 10, lg: 20 } }}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography
              fontWeight={800}
              fontSize={20}
              letterSpacing={10}
              ml={{ sm: 10 }}
              color={"#fff"}
              fontFamily={
                "GraphikWeb,-apple-system,BlinkMacSystemFont,Segoe UI,Hiragino Sans,Meiryo,sans-serif,ColorEmoji"
              }
            >
              JOURNAL
            </Typography>
          </Box>
          <Divider variant={"fullWidth"} sx={{ my: 2, borderColor: "#bcd" }} />
          <Typography mb={1}>{data?.Category}</Typography>
          <Typography color={"#fff"} variant={"h5"} fontWeight={"bold"}>
            {data?.Title}
          </Typography>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mt={5} fontSize={14}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Avatar src={data?.Author?.Avatar} />
              <Typography
                letterSpacing={3}
                textTransform={"uppercase"}
                color={"#c5daef"}
                fontSize={12}
                fontWeight={600}
                fontFamily={"Graphik-Regular-Web,sans-serif"}
              >
                {data?.Author?.Name}
              </Typography>
            </Box>
            <Timestamp date={data?.CreatedDate} noSeparator={true} />
          </Box>
        </Container>
      </Box>
      <Box sx={{ background: "#fff", color: "#89a", position: "relative" }}>
        <Container sx={{ px: { xs: 2, md: 10, lg: 20 } }}>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              position={"relative"}
              component={"img"}
              src={data?.Banner}
              sx={{
                borderRadius: 1,
                maxWidth: 800,
                width: "90%",
                aspectRatio: 7 / 4,
                top: -40,
              }}
            />
          </Box>
          <Typography variant={"body1"} color={"#456"} fontWeight={"bold"}>
            {data?.Intro}
          </Typography>
          <Stack gap={3} my={4}>
            {data?.Content?.map((i, idx) => (
              <React.Fragment key={idx}>
                {i.type === "text" ? (
                  <Typography variant={"body1"} color={"#1b3552"}>
                    {i.text}
                  </Typography>
                ) : (
                  <>
                    <Box mt={2} display={"flex"} flexDirection={"column"} alignItems={"center"} fontSize={13}>
                      <Box
                        component={"img"}
                        pb={0.5}
                        src={i.pic}
                        sx={{
                          borderRadius: 1,
                          maxWidth: 700,
                          width: "80%",
                          aspectRatio: 7 / 4,
                        }}
                      />
                      {i.caption}
                    </Box>
                  </>
                )}
              </React.Fragment>
            ))}
          </Stack>
          <ListIconShare />
          <Divider sx={{ mt: 1 }} />
          <Typography fontSize={18} color={"#082f52"}>
            Related articles
          </Typography>
          <Grid container sx={{ fontFamily: "TiemposTextWeb,Georgia,serif,ColorEmoji" }} mt={5} px={{ xs: 3, sm: 0 }}>
            {articles.slice(2, 5).map((i, idx) => (
              <Grid item key={idx} xs={12} sm={4}>
                <ArticlePreview
                  key={idx}
                  topic={i.topic}
                  title={i.title}
                  intro={i.intro}
                  imgSrc={i.imgSrc}
                  link={i.link}
                  date={i.date}
                  author={i.author}
                  bgColor={"#202830"}
                  small={true}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default JournalArticle;
