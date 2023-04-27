import Container from "@mui/system/Container";
import { Box } from "@mui/material";
import ReviewDetailMain from "./review-detail-main.jsx";
import ReviewCommentSection from "./review-comment-section.jsx";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import React from "react";
import { Loading } from "../common/loading.jsx";
import { PageNotExist } from "../common/page-not-exist.jsx";

export const reviewDetail = {
  userFirstName: "Pepe",
  userName: "Pepe Luizbola",
  filmName: "Ant-Man and the Wash: Quantumania",
  yearRelease: "2023",
  watchedTime: "Watched Feb 14, 2023",
  reviewContent: "It took me 31 films but I finally started to empathize with Scorsese.",
  rate: 4,
  likesCount: 16932,
  poster:
    "https://a.ltrbxd.com/resized/film-poster/5/6/6/2/3/7/566237-ant-man-and-the-wasp-quantumania-0-300-0-450-crop.jpg?v=27ced3fac4",
};

export const listComment = {
  total: 20,
  page: 1,
  list: [
    {
      userName: "Apple",
      userAvatar: "https://picsum.photos/200/200",
      content: "Yeu hay khong yeu, thuong em anh hay noi. Trao nhau doi moi roi se tro thanh doi.",
      time: new Date("2023-03-01T12:32:00Z"),
      id: 1,
    },
    {
      userName: "Grape",
      userAvatar: "https://picsum.photos/201/202",
      content:
        "It would be better if in the second half they all had to band together to fight a giant alien monster and send it back wherever it came from. 6/10",
      time: new Date("2023-03-16T12:32:00Z"),
      id: 2,
    },
    {
      userName: "Banana",
      userAvatar: "https://picsum.photos/203/204",
      content: "Just rewatched this today too — so comforting",
      time: new Date("2023-03-16T12:22:00Z"),
      id: 3,
    },
    {
      userName: "Apple",
      userAvatar: "https://picsum.photos/200/200",
      content: "Yeu hay khong yeu, thuong em anh hay noi. Trao nhau doi moi roi se tro thanh doi.",
      time: new Date("2023-03-17T12:32:00Z"),
      id: 4,
    },
    {
      userName: "Grape",
      userAvatar: "https://picsum.photos/201/202",
      content:
        "It would be better if in the second half they all had to band together to fight a giant alien monster and send it back wherever it came from. 6/10",
      time: new Date("2023-03-17T12:32:00Z"),
      id: 5,
    },
    {
      userName: "Banana",
      userAvatar: "https://picsum.photos/203/204",
      content: "Just rewatched this today too — so comforting",
      time: new Date("2023-03-17T12:32:00Z"),
      id: 6,
    },
    {
      userName: "Apple",
      userAvatar: "https://picsum.photos/200/200",
      content: "Yeu hay khong yeu, thuong em anh hay noi. Trao nhau doi moi roi se tro thanh doi.",
      time: new Date("2023-03-18T12:32:00Z"),
      id: 7,
    },
    {
      userName: "Grape",
      userAvatar: "https://picsum.photos/201/202",
      content:
        "It would be better if in the second half they all had to band together to fight a giant alien monster and send it back wherever it came from. 6/10",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 8,
    },
    {
      userName: "Banana",
      userAvatar: "https://picsum.photos/203/204",
      content: "Just rewatched this today too — so comforting",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 9,
    },
    {
      userName: "Apple",
      userAvatar: "https://picsum.photos/200/200",
      content: "Yeu hay khong yeu, thuong em anh hay noi. Trao nhau doi moi roi se tro thanh doi.",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 10,
    },
    {
      userName: "Grape",
      userAvatar: "https://picsum.photos/201/202",
      content:
        "It would be better if in the second half they all had to band together to fight a giant alien monster and send it back wherever it came from. 6/10",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 11,
    },
    {
      userName: "Banana",
      userAvatar: "https://picsum.photos/203/204",
      content: "Just rewatched this today too — so comforting",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 12,
    },
    {
      userName: "Apple",
      userAvatar: "https://picsum.photos/200/200",
      content: "Yeu hay khong yeu, thuong em anh hay noi. Trao nhau doi moi roi se tro thanh doi.",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 13,
    },
    {
      userName: "Grape",
      userAvatar: "https://picsum.photos/201/202",
      content:
        "It would be better if in the second half they all had to band together to fight a giant alien monster and send it back wherever it came from. 6/10",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 14,
    },
    {
      userName: "Banana",
      userAvatar: "https://picsum.photos/203/204",
      content: "Just rewatched this today too — so comforting",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 15,
    },
    {
      userName: "Apple",
      userAvatar: "https://picsum.photos/200/200",
      content: "Yeu hay khong yeu, thuong em anh hay noi. Trao nhau doi moi roi se tro thanh doi.",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 16,
    },
    {
      userName: "Grape",
      userAvatar: "https://picsum.photos/201/202",
      content:
        "It would be better if in the second half they all had to band together to fight a giant alien monster and send it back wherever it came from. 6/10",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 17,
    },
    {
      userName: "Banana",
      userAvatar: "https://picsum.photos/203/204",
      content: "Just rewatched this today too — so comforting",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 18,
    },
    {
      userName: "Apple",
      userAvatar: "https://picsum.photos/200/200",
      content: "Yeu hay khong yeu, thuong em anh hay noi. Trao nhau doi moi roi se tro thanh doi.",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 19,
    },
    {
      userName: "Grape",
      userAvatar: "https://picsum.photos/201/202",
      content:
        "It would be better if in the second half they all had to band together to fight a giant alien monster and send it back wherever it came from. 6/10",
      time: new Date("2023-03-19T12:32:00Z"),
      id: 20,
    },
  ],
};

export default function ReviewDetail() {
  const { reviewId } = useParams();
  const [{ data: detail, loading: detailLoading, error: detailError }] = useAxios(`Reviews/${reviewId}/detail`);
  if (!detailLoading && !detail) return <PageNotExist />;

  return (
    <Container>
      <Box sx={{ marginTop: 10, mx: { md: 10, lg: 20 } }}>
        {/* Main */}
        {detailLoading ? <Loading paddingY={15} /> : <ReviewDetailMain data={detail} />}
        {/* Comments */}
        <ReviewCommentSection listComment={listComment} reviewDetail={reviewDetail} reviewId={reviewId} />
      </Box>
    </Container>
  );
}
