import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "../home/film-card";
import StarIcon from "@mui/icons-material/Star";
import ListIcon from "@mui/icons-material/List";
import { WatchList } from "./watchlist";
import { Diary } from "./diary";
import { RecentReview } from "./recent-review";
import { PopularReview } from "./popular-review";
import { RecentList } from "./recent-list";
import ListFollow from "./following";
import ProfileTags from "./profile-tags";

export const TabProfile = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={7}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
            <Typography variant={"body1"} textTransform={"uppercase"} mt={5} color="#fff">
              favorite films
            </Typography>
          </Box>
          <Divider variant="fullWidth" />
          <Grid container mt={1} spacing={2.9}>
            {Array.from({ length: 4 }).map((i, idx) => (
              <Grid item key={idx}>
                <FilmCard size={"medium"} />
              </Grid>
            ))}
          </Grid>

          <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
            <Typography variant={"body1"} textTransform={"uppercase"} mt={5} color="#fff">
              recent likes
            </Typography>
          </Box>
          <Divider variant="fullWidth" />
          <Grid container mt={1} spacing={2.9}>
            {Array.from({ length: 4 }).map((i, idx) => (
              <Grid item key={idx}>
                <FilmCard size={"medium"} />
                {Array.from({ length: 5 }).map((i, idx) => (
                  <StarIcon sx={{ color: "#8ea3c9" }} fontSize={"small"} key={idx} />
                ))}
                <ListIcon sx={{ color: "#8ea3c9", marginLeft: 1 }} fontSize={"small"} />
              </Grid>
            ))}
          </Grid>
          <RecentReview />
          <PopularReview />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ProfileTags />
            </Grid>
            <Grid item xs={6}>
              <ListFollow />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <WatchList />
          <RecentList title={"haon1231asdzxcasdasdasdasdasdas"} films={12} />
          {/* <Diary /> */}
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
            <Typography variant={"body1"} textTransform={"uppercase"} mt={5} color="#fff">
              activity
            </Typography>
          </Box>
          <Divider variant="fullWidth" />
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Code</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </>
  );
};
