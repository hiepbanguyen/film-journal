import { Box, Button, Divider, Stack, Tooltip, Typography } from "@mui/material";
import CustomTabs from "../common/tabs.jsx";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReviewPreview from "../common/review-preview.jsx";

function PopularReviews() {
  return (
    <Stack divider={<Divider />}>
      {Array.from({ length: 5 }).map((i, idx) => (
        <React.Fragment key={idx}>
          <ReviewPreview
            title={"A film title"}
            releasedYear={2022}
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the" +
              " leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
            username={"bahiepnguyen"}
            fullname={"Nguyen Ba Hiep"}
            ratings={4}
            likeCount={10}
            commentCount={50}
            reviewDate={new Date()}
            notShowFilmCard={true}
            notShowTitle={true}
          />
        </React.Fragment>
      ))}
    </Stack>
  );
}

function RecentReviews() {
  return (
    <Stack divider={<Divider />}>
      {Array.from({ length: 5 }).map((i, idx) => (
        <React.Fragment key={idx}>
          <ReviewPreview
            title={"A film title"}
            releasedYear={2022}
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the" +
              " leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
            username={"bahiepnguyen"}
            fullname={"Nguyen Ba Hiep"}
            ratings={4}
            likeCount={10}
            commentCount={50}
            reviewDate={new Date()}
            notShowFilmCard={true}
            notShowTitle={true}
          />
        </React.Fragment>
      ))}
    </Stack>
  );
}

const tabLabels = ["POPULAR", "RECENT", "FRIENDS", "YOURS"];

export default function TabsReviews() {
  return (
    <Box mt={3} sx={{ color: "#9ab" }}>
      <Tooltip title={"See all reviews"}>
        <Button component={Link} to={"reviews"} variant={"contained"} sx={{ bgcolor: "#456", mb: 1 }}>
          <Typography fontSize={16} pr={1}>
            All Reviews
          </Typography>
          <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
        </Button>
      </Tooltip>
      <CustomTabs labels={tabLabels} bottom_border_only={true}>
        <PopularReviews />
        <RecentReviews />
        <PopularReviews />
        <RecentReviews />
      </CustomTabs>
    </Box>
  );
}
