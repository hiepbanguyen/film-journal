import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import PaginationBase from "../../../common/pagination-base";
import ReviewPreview from "../../../common/review-preview.jsx";

export default function ReviewsTab() {
  const [pageIndex, setPageIndex] = useState(1);

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
  };

  return (
    <Box className="profile-reviews-tab" sx={{ color: "#9ab", marginTop: "20px", paddingBottom: "48px" }}>
      <Stack sx={{ mx: { md: 20 } }}>
        {Array.from({ length: 5 }).map((i, idx) => (
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
      <PaginationBase totalPage={20} pageIndex={pageIndex} onChange={handleChangePage} />
    </Box>
  );
}
