import React from "react";
import "./film-detail.scss";
import { Box, Container, Stack } from "@mui/material";
import SigninAndShare from "./signin-and-share.jsx";
import TabsCastNCrew from "./tabs-cast-n-crew.jsx";
import MentionedInArticles from "./mentioned-in-articles.jsx";
import RelatedFilms from "./related-films.jsx";
import SimilarFilms from "./similar-films.jsx";
import PosterAndDescription from "./poster-and-description.jsx";
import ActionBox from "./action-box.jsx";
import TabsReviews from "./tabs-reviews.jsx";
import CompiledRatings from "../common/compiled-ratings.jsx";

const film_detail = {
  title: "Avatar: The Way of Water",
  releasedYear: "2022",
  runtime: "190",
  director: "James Cameron",
  description:
    "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure",
  tagline: "Return to Pandora.",
  genres: ["Drama", "Action", "Fantasy"],
  image:
    "https://a.ltrbxd.com/resized/film-poster/6/3/0/5/8/63058-avatar-the-way-of-water-0-230-0-345-crop.jpg?v=37a1014065",
  banner:
    "https://a.ltrbxd.com/resized/sm/upload/rv/ns/3w/jz/679F452B-D31A-4793-838D-F374A7C34D98-1200-1200-675-675-crop-000000.jpg?v=704ba56f3d",
  likes: 256000,
  lists: 139000,
  views: 749000,
};

const FilmDetail = () => {
  // console.log("filmdetail render");
  const loggedIn = true;
  return (
    <>
      <Box position={"relative"}>
        <Box
          width={{ xs: "95vw", md: "80vw" }}
          component="img"
          sx={{
            position: "absolute",
            top: { md: -50 },
            left: 0,
            right: 0,
            marginX: "auto",
            aspectRatio: "1920/1080",
            alignSelf: "center",
            zIndex: -2,
          }}
          alt="The house from the offer."
          src={film_detail.banner}
        />
        <Box
          width={{ xs: "95vw", md: "80vw" }}
          sx={{
            position: "absolute",
            top: { md: -50 },
            left: 0,
            right: 0,
            marginX: "auto",
            aspectRatio: "1920/1080",
            alignSelf: "center",
            zIndex: -1,
            background:
              "linear-gradient(90deg,#14181d 0,rgba(20,24,29,.986) .97%,rgba(20,24,29,.945) 2.07833333%,rgba(20,24,29,.883) 3.29666667%,rgba(20,24,29,.803) 4.60166667%,rgba(20,24,29,.711) 5.96666667%,rgba(20,24,29,.61) 7.365%,rgba(20,24,29,.504) 8.77166667%,rgba(20,24,29,.398) 10.16%,rgba(20,24,29,.296) 11.505%,rgba(20,24,29,.203) 12.78%,rgba(20,24,29,.122) 13.95833333%,rgba(20,24,29,.059) 15.01666667%,rgba(20,24,29,.016) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.016) 84.07166667%,rgba(20,24,29,.059) 84.98333333%,rgba(20,24,29,.122) 86.04166667%,rgba(20,24,29,.203) 87.22%,rgba(20,24,29,.296) 88.495%,rgba(20,24,29,.398) 89.84%,rgba(20,24,29,.504) 91.22833333%,rgba(20,24,29,.61) 92.635%,rgba(20,24,29,.711) 94.03333333%,rgba(20,24,29,.803) 95.39833333%,rgba(20,24,29,.883) 96.70333333%,rgba(20,24,29,.945) 97.92166667%,rgba(20,24,29,.986) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.986) 23.63703704%,rgba(20,24,29,.945) 26.1%,rgba(20,24,29,.883) 28.80740741%,rgba(20,24,29,.803) 31.70740741%,rgba(20,24,29,.711) 34.74074074%,rgba(20,24,29,.61) 37.84814815%,rgba(20,24,29,.504) 40.97407407%,rgba(20,24,29,.398) 44.05925926%,rgba(20,24,29,.296) 47.04814815%,rgba(20,24,29,.203) 49.88148148%,rgba(20,24,29,.122) 52.5%,rgba(20,24,29,.059) 54.85185185%,rgba(20,24,29,.016) 56.87777778%,rgba(20,24,29,0) 58.51851852%)",
          }}
        />
      </Box>
      <Container className="film_detail_page" sx={{ position: "relative", color: "#fff" }}>
        <Box pt={{ xs: 20, sm: 32, lg: 40 }} gap={5} mx={{ md: 10 }}>
          <PosterAndDescription {...film_detail} />
          <Box display={"flex"} flexDirection={{ xs: "column-reverse", sm: "row" }} gap={5}>
            <Box flex={2}>
              <TabsCastNCrew />
            </Box>
            <Stack flex={1} pt={2} gap={4} sx={{ mt: 1.2 }}>
              <CompiledRatings />
              {loggedIn ? <ActionBox /> : <SigninAndShare />}
            </Stack>
          </Box>
          <Box pb={5}>
            <TabsReviews />
            <RelatedFilms />
            <SimilarFilms />
            <MentionedInArticles />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default FilmDetail;
