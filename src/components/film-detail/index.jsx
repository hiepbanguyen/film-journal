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
import { TabsReviews } from "./tabs-reviews.jsx";
import CompiledRatings from "../common/compiled-ratings.jsx";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import UserStore from "../../store/user.store.js";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import { formatCompactNumber } from "../../utils/number.js";
import { PageNotExist } from "../common/page-not-exist";
import { FilmTrivia } from "./trivia.jsx";

const ActionPanel = observer(({ filmTitle, releasedYear }) => (
  <>{UserStore.isLoggedIn ? <ActionBox filmTitle={filmTitle} releasedYear={releasedYear} /> : <SigninAndShare />}</>
));

const FilmDetail = () => {
  const { filmId } = useParams();
  const [{ data, loading }] = useAxios(`Films/${filmId}/Detail`);
  const cachedData = React.useMemo(() => {
    if (!data) return;
    const cached = { ...data };
    const more_detail = [];
    if (data?.Credits) {
      const cast = [];
      const crew = new Map();
      const credits = JSON.parse(String(data.Credits).replace("\\", ""));
      credits.forEach((i) => {
        if (i.known_for_department === "Acting") {
          cast.unshift(i);
        } else {
          const job = i.job === "NULL" ? "Crew" : i.job;
          crew.set(job, crew.has(job) ? [...crew.get(job), i.name] : [i.name]);
        }
      });
      cached.Cast = cast.map((i) => ({ name: i.name, character: i.character_, avatar: i.poster_path }));
      cached.Crew = Array.from(crew);
      delete cached.Credits;
    }
    if (data?.Genres) {
      const genres = JSON.parse(data.Genres.replace("\\", ""));
      delete cached.Genres;
      cached.Genres = genres.map((i) => i.name);
    }
    if (data?.Status) {
      more_detail.push(["Status", [data.Status]]);
      delete cached.Status;
    }
    if (data?.Trailer) {
      more_detail.push(["Trailer", [data.Trailer]]);
      delete cached.Trailer;
    }
    if (data?.Homepage) {
      more_detail.push(["Homepage", [data.Homepage]]);
      delete cached.Homepage;
    }
    if (data?.Budget) {
      more_detail.push(["Budget", [`${formatCompactNumber(Number(data.Budget))} USD`]]);
      delete cached.Budget;
    }
    if (data?.Revenue) {
      more_detail.push(["Revenue", [`${formatCompactNumber(Number(data.Revenue))} USD`]]);
      delete cached.Revenue;
    }
    if (data?.Production_companies) {
      const productionCompanies = JSON.parse(data.Production_companies.replace("\\", ""));
      more_detail.push(["Production companies", [...productionCompanies.slice(0, 5).map((i) => i.name)]]);
      delete cached.Production_companies;
    }
    if (data?.Production_countries) {
      const productionCountries = JSON.parse(data.Production_countries.replace("\\", ""));
      more_detail.push(["Production countries", [...productionCountries.slice(0, 5).map((i) => i.name)]]);
      delete cached.Production_countries;
    }
    if (data?.Spoken_languages) {
      const spokenLanguages = JSON.parse(data.Spoken_languages.replace("\\", ""));
      more_detail.push(["Spoken languages", [...spokenLanguages.slice(0, 5).map((i) => i.english_name)]]);
      delete cached.Spoken_languages;
    }
    cached.More_detail = more_detail;
    // console.log(cached);
    return cached;
  }, [filmId, loading]);
  // console.log(cachedData);

  if (loading) return <Loading paddingY={15} />;
  if (!loading && !data) return <PageNotExist />;
  return (
    <Container maxWidth={"lg"}>
      <Box position={"relative"}>
        <Box
          width={{ xs: "95vw", md: "80vw", lg: "100%" }}
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
          src={data?.Backdrop_path}
        />
        <Box
          width={{ xs: "95vw", md: "80vw", lg: "100%" }}
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
          <PosterAndDescription {...cachedData} filmId={filmId} />
          <Box display={"flex"} flexDirection={{ xs: "column-reverse", sm: "row" }} gap={5}>
            <Box flex={2}>
              <TabsCastNCrew cast={cachedData?.Cast} crew={cachedData?.Crew} detail={cachedData?.More_detail} />
            </Box>
            <Stack flex={1} pt={2} gap={4} sx={{ mt: 1.2 }}>
              <CompiledRatings stats={cachedData?.RateStats} />
              <ActionPanel
                filmTitle={cachedData?.Original_title}
                releasedYear={cachedData?.Release_date ? new Date(cachedData.Release_date).getFullYear() : ""}
              />
            </Stack>
          </Box>
          <Box pb={5}>
            <TabsReviews filmId={filmId} />
            <RelatedFilms filmId={filmId} />
            <SimilarFilms filmId={filmId} />
            <MentionedInArticles data={cachedData?.MentionedInArticles} />
            <FilmTrivia />
          </Box>
        </Box>
      </Container>
    </Container>
  );
};
export default FilmDetail;
