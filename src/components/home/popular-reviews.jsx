import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import ReviewPreview from "../common/review-preview.jsx";

export const PopularReviews = () => {
  return (
    <>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
        popular reviews this week
      </Typography>
      <Divider />
      <Box>
        {Array.from({ length: 6 }).map((i, idx) => (
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
            />
            {idx < 5 && <Divider variant={"fullWidth"} />}
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};
