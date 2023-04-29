import * as React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import ReviewPreview from "../../../common/review-preview.jsx";

export const PopularReview = () => {
  return (
    <Box my={5}>
      <Typography variant={"body1"} textTransform={"uppercase"} color={"#fff"}>
        popular reviews
      </Typography>
      <Divider />
      <Stack color={"#9ab"} mt={1}>
        {Array.from({ length: 2 }).map((i, idx) => (
          <ReviewPreview
            key={idx}
            title={"A film title"}
            releasedYear={2022}
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the" +
              " leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
            ratings={4}
            likeCount={10}
            commentCount={50}
            reviewDate={new Date()}
            notShowUser={true}
          />
        ))}
      </Stack>
    </Box>
  );
};

export const RecentReview = () => {
  return (
    <Box my={5}>
      <Typography variant={"body1"} textTransform={"uppercase"} color={"#fff"}>
        recent reviews
      </Typography>
      <Divider />
      <Stack color={"#9ab"} mt={1}>
        {Array.from({ length: 2 }).map((i, idx) => (
          <ReviewPreview
            key={idx}
            title={"A film title"}
            releasedYear={2022}
            content={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the" +
              " leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
            ratings={4}
            likeCount={10}
            commentCount={50}
            reviewDate={new Date()}
            notShowUser={true}
          />
        ))}
      </Stack>
    </Box>
  );
};
