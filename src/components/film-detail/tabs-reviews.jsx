import { Box, Button, Divider, Stack, Tooltip, Typography } from "@mui/material";
import CustomTabs from "../common/tabs.jsx";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReviewPreview from "../common/review-preview.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";

function TabReviews({ filmId, from, sort }) {
  const [{ data, loading, error }, fetchReviews] = useAxios({
    url: "Reviews/Paging",
    method: "POST",
    data: {
      id: filmId,
      pageSize: 5,
      pageIndex: 1,
      from: from,
      sort: sort,
    },
  });

  return (
    <>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <Stack divider={<Divider />}>
          {data?.Data?.map((i, idx) => (
            <ReviewPreview
              key={idx}
              title={i.Film?.Title ?? ""}
              poster={i.Film?.Poster_path ?? ""}
              filmId={i.Film?.FilmID ?? ""}
              releasedYear={i.Film?.Release_date ? new Date(i.Film?.Release_date).getFullYear() : ""}
              content={i.Content ?? ""}
              username={i.User?.UserName ?? ""}
              fullname={i.User?.FullName ?? ""}
              userAvatar={i.User?.Avatar ?? ""}
              ratings={i.Score ?? 0}
              likeCount={i.LikesCount ?? 0}
              commentCount={i.CommentsCount ?? 0}
              spoiler={i.HaveSpoiler ?? 0}
              reviewDate={i.WatchedDate ? new Date(i.WatchedDate) : ""}
              link={`/u/${i.User?.UserName}/reviews/${i.ReviewID}`}
              notShowFilmCard={true}
              notShowTitle={true}
            />
          ))}
        </Stack>
      )}
    </>
  );
}

const tabLabels = ["POPULAR", "RECENT", "FRIENDS", "YOURS"];

export default function TabsReviews({ filmId }) {
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
        <TabReviews filmId={filmId} from={"Everyone"} sort={"Popularity"} />
        <TabReviews filmId={filmId} from={"Everyone"} sort={"Most recent"} />
        <TabReviews filmId={filmId} from={"Friends"} sort={"Most recent"} />
        <TabReviews filmId={filmId} from={"You"} sort={"Most recent"} />
      </CustomTabs>
    </Box>
  );
}
