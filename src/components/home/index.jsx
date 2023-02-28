import Container from "@mui/material/Container";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "./film-card.jsx";
import { Features } from "./features.jsx";
import { JustReviewed } from "./just-reviewed.jsx";
import ReviewPreview, { PopularReviews } from "./review-preview.jsx";
import { PopularLists } from "./list-preview.jsx";
import { PopularReviewers } from "./reviewer-preview.jsx";

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
        <Button variant={"contained"} sx={{ background: "#00c030" }} href={"/sign-up/"} size={"large"}>
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
    <Grid container mt={5} spacing={1}>
      {Array.from({ length: 6 }).map((i, idx) => (
        <Grid item key={idx} md={2} xs={4}>
          <FilmCard size={"medium"} />
        </Grid>
      ))}
    </Grid>
  );
};
export default function Home() {
  return (
    <>
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    position: "fixed",*/}
      {/*    top: 0,*/}
      {/*    width: "100%",*/}
      {/*    zIndex: -1,*/}
      {/*    // background: `url("https://image.tmdb.org/t/p/w1280/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg")`,*/}
      {/*    backgroundSize: "cover",*/}
      {/*    height: "100vh",*/}
      {/*  }}*/}
      {/*/>*/}
      <Container>
        <Box mx={{ md: 10, xs: 0 }} display={"flex"} flexDirection={"column"} justifyContent={"center"} color={"#fff"}>
          <Box mt={{ md: 20, xs: 10 }}>
            <WelcomeSection />
          </Box>
          <PopularFilms />
          <Features />
          <JustReviewed />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={9}>
              <PopularReviews />
            </Grid>
            <Grid item xs={12} sm={3}>
              <PopularLists />
              <PopularReviewers />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
