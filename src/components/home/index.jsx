import Container from "@mui/material/Container";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "../common/film-card.jsx";
import { Features } from "./features.jsx";
import { JustReviewed } from "./just-reviewed.jsx";
import { PopularReviews } from "./review-preview.jsx";
import { PopularLists } from "./list-preview.jsx";
import { PopularReviewers } from "./reviewer-preview.jsx";
import React from "react";

const WelcomeSection = () => {
  return (
    <>
      <Typography
        fontSize={{ md: 32, xs: 15 }}
        fontWeight={"bold"}
        textAlign={"center"}
        fontFamily={"TiemposHeadlineWeb-Bold,Georgia,serif"}
      >
        Track films you’ve watched.
        <br /> Save those you want to see.
        <br /> Tell your friends what’s good.
      </Typography>
      <Box mt={5} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant={"contained"}
          sx={{ background: "#00c030", textTransform: "uppercase" }}
          href={"/sign-up/"}
          size={"large"}
        >
          Get started - It's free!
        </Button>
      </Box>
      <Typography variant={"h6"} textAlign={"center"} mt={5}>
        The social network for film lovers.
      </Typography>
    </>
  );
};

const PopularFilms = () => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2} mt={5}>
      {Array.from({ length: 6 }).map((i, idx) => (
        <FilmCard key={idx} size={140} />
      ))}
    </Box>
  );
};
export default function Home() {
  return (
    <>
      <Box position={"relative"}>
        <Box
          width={{ sm: "80vw", xs: "100vw" }}
          component="img"
          sx={{
            position: "absolute",
            top: -10,
            left: 0,
            right: 0,
            marginX: "auto",
            aspectRatio: "1920/1080",
            alignSelf: "center",
            zIndex: -2,
          }}
          alt="The house from the offer."
          src="https://a.ltrbxd.com/resized/sm/upload/69/2u/4d/eu/xi1DsPSW81udsXfyiAzcdUxhp56-1920-1920-1080-1080-crop-000000.jpg?v=be0e99a9c5"
        />
        <Box
          width={{ sm: "80vw", xs: "100vw" }}
          sx={{
            position: "absolute",
            top: -10,
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
      <Container>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} color={"#fff"}>
          <Box mt={{ md: 30, xs: 10 }}>
            <WelcomeSection />
          </Box>
          <PopularFilms />
          <Features />
          <JustReviewed />
          <Grid container spacing={{ md: 5 }} sx={{ color: "#9ab" }} pt={3}>
            <Grid item xs={12} md={7.5} lg={8.5}>
              <PopularReviews />
            </Grid>
            <Grid item xs={12} md={4.5} lg={3.5}>
              <PopularLists />
              <PopularReviewers />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
