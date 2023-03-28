import Container from "@mui/system/Container";
import { Box, Grid } from "@mui/material";
import ReviewDetailMainSection from "./review-detail-main-section";
import ReviewDetailAside from "./review-detail-aside";
import ReviewDetailListComment from "./review-detail-list-comment";

export default function ReviewDetail() {
  const reviewDetail = {
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

  const listLikedReview = [
    { userName: "Apple", userAvatar: "https://picsum.photos/200/200", reviewLink: "/review-detail/", reviewRate: 3 },
    { userName: "Orange", userAvatar: "https://picsum.photos/202/200", reviewLink: "/review-detail/", reviewRate: 4 },
    { userName: "Grape", userAvatar: "https://picsum.photos/203/200", reviewLink: "/review-detail/", reviewRate: 2 },
    { userName: "Cherri", userAvatar: "https://picsum.photos/201/200", reviewLink: "/review-detail/", reviewRate: 5 },
    { userName: "Banana", userAvatar: "https://picsum.photos/200/202", reviewLink: "/review-detail/", reviewRate: 3 },
    { userName: "Mango", userAvatar: "https://picsum.photos/200/203", reviewLink: "/review-detail/", reviewRate: 1 },
  ];

  const listComment = {
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

  return (
    <Container>
      <Box sx={{ marginTop: 13 }}>
        <Grid container spacing={8} columns={12}>
          {/* Main */}
          <Grid item xs={12} md={9}>
            {/* Main-top */}
            <ReviewDetailMainSection
              reviewDetail={reviewDetail}
              listLikedReview={listLikedReview}
            ></ReviewDetailMainSection>
            {/* List Cmt */}
            <ReviewDetailListComment listComment={listComment} reviewDetail={reviewDetail}></ReviewDetailListComment>
          </Grid>
          {/* Aside */}
          <Grid item xs={12} md={3}>
            <ReviewDetailAside></ReviewDetailAside>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
