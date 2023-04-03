import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchForm from "../../../common/search-form";
import ReviewCard from "../../../common/review-card";
import PaginationBase from "../../../common/pagination-base";

const data = {
  total: 6,
  totalPage: 2,
  pageSize: 3,
  pageIndex: 1,
  list: [
    {
      id: 1,
      film: {
        id: 1,
        name: "Jonh Wick: Chapter 4",
        yearRelease: 2023,
        thumbnail: "https://picsum.photos/201/300",
        isLiked: true,
      },
      user: {
        avatar: "https://picsum.photos/49/48",
        userFullname: "Charlie Puth",
        userName: "charlieputh69",
        userId: 1,
      },
      content:
        "Everyone is trying to rip off the way John Wick movies do action but Everyone is trying to rip off the way John Wick movies do action but Everyone is trying to rip off the way John Wick movies do action but Everyone is trying to rip off the way John Wick movies do action butEveryone is trying to rip off the way John Wick movies do action but I wish they would also try to rip off the way John Wick movies are really pretty and lit extremely well",
      rate: 2,
      totalComment: 63445,
      totalLike: 3654,
      isLiked: true,
    },
    {
      id: 2,
      film: {
        id: 2,
        name: "Avenger 7: End Game",
        yearRelease: 2019,
        thumbnail: "https://picsum.photos/200/301",
        isLiked: false,
      },
      user: {
        avatar: "https://picsum.photos/48/49",
        userFullname: "Selena Gomez",
        userName: "selena69",
        userId: 2,
      },
      content: "John Wick's biggest enemy was those damn stairs",
      rate: 5,
      totalComment: 2465,
      totalLike: 3654,
      isLiked: false,
    },
    {
      id: 3,
      film: {
        id: 3,
        name: "Jonh Wick: Chapter 4",
        yearRelease: 2023,
        thumbnail: "https://picsum.photos/201/300",
        isLiked: true,
      },
      user: {
        avatar: "https://picsum.photos/49/48",
        userFullname: "Charlie Puth",
        userName: "charlieputh69",
        userId: 3,
      },
      content:
        "Everyone is trying to rip off the way John Wick movies do action but Everyone is trying to rip off the way John Wick movies do action but Everyone is trying to rip off the way John Wick movies do action but Everyone is trying to rip off the way John Wick movies do action butEveryone is trying to rip off the way John Wick movies do action but I wish they would also try to rip off the way John Wick movies are really pretty and lit extremely well",
      rate: 5,
      totalComment: 63445,
      totalLike: 3654,
      isLiked: true,
    },
  ],
};

export default function ReviewsTab() {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPage, setTotalPage] = useState(data.totalPage);

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
  };

  const [listReviews, setListReviews] = useState(data.list);

  return (
    <Box className="profile-reviews-tab" sx={{ color: "#9ab", marginTop: "48px", paddingBottom: "48px" }}>
      <Box sx={{ marginBottom: "24px" }}>
        <SearchForm></SearchForm>
      </Box>
      <Box>
        {listReviews.map((review, idx) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </Box>
      <PaginationBase totalPage={totalPage} pageIndex={pageIndex} onChange={handleChangePage}></PaginationBase>
    </Box>
  );
}
