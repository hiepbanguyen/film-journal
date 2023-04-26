import { Box, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "../../../common/film-card.jsx";
import { WatchList } from "./watchlist.jsx";
import { RecentList } from "./recent-list.jsx";
import ListFollow from "./following.jsx";
import CompiledRatings from "../../../common/compiled-ratings.jsx";
import { PopularReview, RecentReview } from "./reviews.jsx";
import ReviewCard from "../../../common/review-card.jsx";

export const ProfileTab = () => {
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
          <Typography variant={"body1"} textTransform={"uppercase"} color="#fff">
            favorite films
          </Typography>
          <Divider />
          <Box display={"flex"} mt={3} gap={3} sx={{ justifyContent: "center" }}>
            {Array.from({ length: 4 }).map((i, idx) => (
              <FilmCard key={idx} size={120} />
            ))}
          </Box>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
          <Typography variant={"body1"} textTransform={"uppercase"} mt={5} color="#fff">
            recently liked reviews
          </Typography>
        </Box>
        <Divider />
        <Box display={"flex"} flexWrap={"wrap"} mt={3} gap={{ xs: 1, sm: 3 }} sx={{ justifyContent: "center" }}>
          {Array.from({ length: 4 }).map((i, idx) => (
            <ReviewCard
              key={idx}
              size={{ xs: 100, md: 120 }}
              rating={3.5}
              username={"bahiep"}
              link={"/u/bahiep/reviews/324"}
              avatar={
                "https://a.ltrbxd.com/resized/avatar/twitter/1/6/4/1/1/5/6/shard/http___pbs.twimg.com_profile_images_1603038301899956226_mcfyp7Bu-0-48-0-48-crop.jpg?v=44bebebad9"
              }
            />
          ))}
        </Box>
        <RecentReview />
        <PopularReview />
      </Box>
      <Grid flex={4}>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
          })}
        >
          <Typography variant={"body1"} textTransform={"uppercase"} color="#fff">
            favorite films
          </Typography>
          <Divider />
          <Box display={"flex"} my={3} gap={{ xs: 1, sm: 3, justifyContent: "center" }}>
            {Array.from({ length: 4 }).map((i, idx) => (
              <FilmCard key={idx} size={{ xs: 70, sm: 100 }} />
            ))}
          </Box>
        </Box>
        <CompiledRatings />
        <ListFollow />
        <WatchList />
        <RecentList title={"haon1231asdzxcasdasdasdasdasdas"} films={12} />
        {/*<Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>*/}
        {/*  <Typography variant={"body1"} textTransform={"uppercase"} mt={5} color="#fff">*/}
        {/*    activity*/}
        {/*  </Typography>*/}
        {/*</Box>*/}
        {/*<Divider />*/}
        {/*<Activity />*/}
      </Grid>
    </Box>
  );
};
