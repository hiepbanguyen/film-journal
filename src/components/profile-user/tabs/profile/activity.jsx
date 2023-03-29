import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { TimelineOppositeContent } from "@mui/lab";

export default function Activity() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        p: 0,
        "& .MuiTimelineContent-root, .MuiTimelineOppositeContent-root": {
          fontSize: 13,
          color: "#9ab",
        },
        "& .MuiTimelineOppositeContent-root": {
          flex: 0,
        },
        "& .MuiTimelineDot-root": {
          p: 0.25,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent>2023/04/05</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Patrick Willems reviewed and rated Scream V</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>2023/04/01</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
