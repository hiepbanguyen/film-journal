import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import ReviewCard from "../../../common/review-card.jsx";

export const RecentlyLikedReviews = ({ data }) => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={2} color="#fff">
          recently liked reviews
        </Typography>
      </Box>
      <Divider />
      <Box display={"flex"} flexWrap={"wrap"} mt={3} gap={{ xs: 1, sm: 3 }} sx={{ justifyContent: "center" }}>
        {data?.map((i, idx) => (
          <ReviewCard
            key={idx}
            size={{ xs: 100, md: 120 }}
            rating={i?.Score ?? 0}
            username={i?.User?.UserName}
            fullname={i?.User?.FullName}
            link={`/u/${i?.User?.UserName}/reviews/${i?.ReviewID}`}
            avatar={i?.User?.Avatar}
            poster={i?.Film?.Poster_path}
          />
        ))}
      </Box>
    </>
  );
};
