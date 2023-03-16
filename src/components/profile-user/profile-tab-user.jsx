import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "../home/film-card";

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
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
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
      <Grid container>
        <Grid item xs={7}>
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
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
