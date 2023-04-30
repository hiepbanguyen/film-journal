import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import ReviewCard from "../../../common/review-card.jsx";

export const RecentlyLikedReviews = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={2} color="#fff">
          recently liked reviews
        </Typography>
      </Box>
      <Divider />
      <Box display={"flex"} flexWrap={"wrap"} mt={3} gap={{ xs: 1, sm: 3 }} sx={{ justifyContent: "center" }}>
        {Array.from({ length: 4 }).map((i, idx) => (
          <ReviewCard
            key={idx}
            size={{ xs: 100, md: 120 }}
            rating={3.5}
            username={"bahiep"}
            link={"/u/bahiep/reviews/324"}
            avatar={
              "https://a.ltrbxd.com/resized/avatar/twitter/1/6/4/1/1/5/6/shard/http___pbs.twimg.com_profile_images_1603038301899956226_mcfyp7Bu-0-48-0-48-crop.jpg?v=44bebebad9"
            }
          />
        ))}
      </Box>
    </>
  );
};