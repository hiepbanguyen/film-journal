import Container from "@mui/system/Container";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import React from "react";
import { PageNotExist } from "../common/page-not-exist.jsx";
import ReviewCommentSection from "./review-comment-section.jsx";
import ReviewDetailMain from "./review-detail-main.jsx";
import { Loading } from "../common/loading.jsx";

const TakeLikedReviews = 10;
export default function ReviewDetail() {
  const { reviewId } = useParams();
  const [{ data: detail, loading: detailLoading, error: detailError }, refetch] = useAxios(
    `Reviews/${reviewId}/detail?limitUser=${TakeLikedReviews}`,
  );

  const refetchDetail = () => {
    refetch();
  };

  if (!detailLoading && !detail) return <PageNotExist />;

  return (
    <Container>
      <Box sx={{ marginTop: 10, mx: { md: 10, lg: 20 } }}>
        {/* Main */}
        {detailLoading ? <Loading paddingY={15} /> : <ReviewDetailMain data={detail} refetchDetail={refetchDetail} />}
        {/* Comments */}
        <ReviewCommentSection reviewId={reviewId} />
      </Box>
    </Container>
  );
}
