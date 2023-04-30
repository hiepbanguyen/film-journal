import { Box, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "../../../common/film-card.jsx";
import { WatchList } from "./watchlist.jsx";
import { RecentLists } from "./recent-lists.jsx";
import ListFollow from "./following.jsx";
import CompiledRatings from "../../../common/compiled-ratings.jsx";
import { PopularReviews, RecentReviews } from "./reviews.jsx";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { Loading } from "../../../common/loading.jsx";
import { RecentlyLikedReviews } from "./recently-liked-reviews.jsx";

const FavoriteFilms = ({ gap, filmCardSize, films }) => {
  // console.log(films);
  return (
    <>
      <Typography variant={"body1"} textTransform={"uppercase"} color="#fff">
        favorite films
      </Typography>
      <Divider />
      <Box
        my={3}
        gap={gap}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {films?.Films.map((i, idx) => (
          <FilmCard key={idx} size={filmCardSize} src={i?.Poster_path} link={`/films/${i?.FilmID}`} />
        ))}
      </Box>
    </>
  );
};

export const ProfileTab = () => {
  const { username } = useParams();
  const [{ data, loading, error }, refetch] = useAxios(`Users/${username}/Profile`);

  if (loading) return <Loading paddingY={10} />;
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column-reverse", md: "row" }}
      gap={5}
      sx={{ color: "#fff", mt: 3 }}
      px={{ sm: 5, md: 0 }}
    >
      <Box flex={8}>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          })}
        >
          <FavoriteFilms breakpoints={"md"} gap={3} filmCardSize={120} films={data?.FavouriteFilms} />
        </Box>
        <RecentlyLikedReviews data={data?.RecentLikeReview ?? []} />
        <RecentReviews data={data?.ListRecentReview ?? []} username={username} />
        <PopularReviews data={data?.ListPopularReview ?? []} username={username} />
      </Box>
      <Grid flex={4}>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.not("sm")]: {
              display: "none",
            },
          })}
        >
          <FavoriteFilms breakpoints={"sm"} gap={3} filmCardSize={100} films={data?.FavouriteFilms} />
        </Box>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.not("xs")]: {
              display: "none",
            },
          })}
        >
          <FavoriteFilms breakpoints={"xs"} gap={1} filmCardSize={76} films={data?.FavouriteFilms} />
        </Box>
        <CompiledRatings stats={data?.RateStats} />
        <ListFollow following={data?.Following?.List ?? []} />
        <WatchList data={data?.WatchList} />
        <RecentLists data={data?.ListRecentList} username={username} />
      </Grid>
    </Box>
  );
};
