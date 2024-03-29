import Container from "@mui/material/Container";
import { Box, Button, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "../common/film-card.jsx";
import { Features } from "./features.jsx";
import { JustReviewed } from "./just-reviewed.jsx";
import { PopularReviews } from "./popular-reviews.jsx";
import { PopularLists } from "./popular-lists.jsx";
import { PopularReviewers } from "./popular-reviewers.jsx";
import React from "react";
import { Link } from "react-router-dom";
import UserStore from "../../store/user.store.js";
import { observer } from "mobx-react-lite";
import { Loading } from "../common/loading.jsx";
import { RecentJournals } from "./recent-journals.jsx";
import useAxios from "axios-hooks";
import ReviewCard from "../common/review-card.jsx";

const WelcomeSection = () => {
  return (
    <>
      <Typography
        fontSize={{ md: 32, sm: 26, xs: 15 }}
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
          component={Link}
          variant={"contained"}
          sx={{ background: "#00c030", textTransform: "uppercase" }}
          to={"/sign-up/"}
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
  const [{ data, loading, error }] = useAxios({
    url: `Films/Popular`,
    method: "POST",
    data: {
      pageSize: 6,
      pageIndex: 1,
    },
  });

  return (
    <>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2} mt={5}>
          {data?.Data.map((i, idx) => (
            <FilmCard key={idx} size={140} link={`/films/${i?.FilmID}`} src={i?.Poster_path} />
          ))}
        </Box>
      )}
    </>
  );
};

const NewFromFriends = observer(() => {
  const [{ data, loading, error }, refetch] = useAxios(`Reviews/NewFromFriend`);

  React.useEffect(() => {
    refetch();
  }, [UserStore.user.UserName]);

  return (
    <Box mt={{ xs: 7, md: 13, lg: 18 }}>
      <Typography fontSize={{ md: 30, sm: 25, xs: 14 }} textAlign={"center"} fontFamily={"Georgia"} color={"#b0c3d7"}>
        {"Welcome back, "}
        <Link to={`/u/${UserStore.user?.UserName}`}>
          <Box component={"span"} sx={{ color: "#fff", ":hover": { textDecoration: "underline" } }}>
            {UserStore.user?.FullName ?? UserStore.user?.UserName}
          </Box>
        </Link>
        {"."}
        <br />
        {"Here's what your friends have been watching..."}
      </Typography>
      <Typography mt={5}>NEW REVIEWS FROM FRIENDS</Typography>
      <Divider />
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={2} mt={3}>
          {data?.map((i, idx) => (
            <ReviewCard
              key={idx}
              size={{ xs: 100, md: 120 }}
              rating={i?.Score ?? 0}
              username={i?.User?.UserName}
              fullname={i?.User?.FullName}
              link={`/u/${i?.User?.UserName}/reviews/${i?.ReviewID}`}
              avatar={i?.User?.Avatar}
              poster={i?.Film?.Poster_path}
            />
          ))}
        </Box>
      )}
    </Box>
  );
});

const Welcome = observer(() => {
  // console.log("is logged in", !!UserStore.token);

  return (
    <>
      {!UserStore.isLoadedFromLocal ? (
        <Loading />
      ) : UserStore.isLoggedIn ? (
        <NewFromFriends />
      ) : (
        <>
          <WelcomeSection />
          <PopularFilms />
          <Features />
        </>
      )}
    </>
  );
});

const Banner = () => {
  const [{ data, loading }] = useAxios("Reviews/HomeBanner");

  if (loading) return <Loading paddingY={15} />;
  return (
    <Box position={"relative"}>
      <Box
        width={{ sm: "80vw", xs: "100vw", lg: "100%" }}
        component="img"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          marginX: "auto",
          aspectRatio: "1920/1080",
          alignSelf: "center",
          zIndex: -2,
        }}
        alt="Home Banner"
        src={data?.Banner}
      />
      <Box
        width={{ sm: "80vw", xs: "100vw", lg: "100%" }}
        sx={{
          position: "absolute",
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
  );
};

export default function Home() {
  // console.log("render home");
  return (
    <Container maxWidth={"lg"}>
      <Banner />
      <Container sx={{ mb: 3 }}>
        <Box
          pt={{ xs: 21, sm: 28, md: 32 }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          color={"#fff"}
        >
          <Welcome />
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
          <RecentJournals />
        </Box>
      </Container>
    </Container>
  );
}
