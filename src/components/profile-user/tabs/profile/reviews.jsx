import * as React from "react";
import { Box, Divider, Rating, Stack, Typography } from "@mui/material";
import FilmCard from "../../../common/film-card.jsx";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ReviewPreview from "../../../common/review-preview.jsx";

export const ReviewInProfile = (props) => {
  const { title, year, ratings, watchedAt, description, favoriteCount } = props;

  return (
    <Box display={"flex"} marginTop={3}>
      <FilmCard />
      <Box>
        <Typography variant={"body1"} marginLeft={3} fontSize={20}>
          <strong>{title}</strong> <span style={{ color: "#9dbad7" }}>{year}</span>
        </Typography>
        <Box alignItems={"center"} marginLeft={3}>
          <Box display={"flex"} mt={0.5}>
            <Typography variant={"body2"}>
              <Rating defaultValue={ratings} readOnly />
            </Typography>
            <Typography variant={"body1"} marginLeft={2} color={"#fff"}>
              {watchedAt}
            </Typography>
          </Box>
          <Typography variant={"body2"} mr={1} mt={0.5}>
            {description}
          </Typography>
          <Box display={"flex"} mt={1}>
            <FavoriteIcon fontSize={"small"} />
            <Typography variant={"body2"} marginLeft={1} color={"#e4d5d5"}>
              {" "}
            </Typography>
            <Typography variant={"body2"} marginLeft={1} color={"#fff"}>
              {" "}
              {`${favoriteCount}`} likes
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const PopularReview = () => {
  return (
    <Box my={5}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"}>
          popular review
        </Typography>
        <Typography variant={"caption"} textTransform={"uppercase"}>
          more
        </Typography>
      </Box>
      <Divider />
      <Stack color={"#9ab"} mt={1}>
        {Array.from({ length: 2 }).map((i, idx) => (
          <ReviewPreview
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
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"}>
          recent review
        </Typography>
        <Typography variant={"caption"} textTransform={"uppercase"}>
          more
        </Typography>
      </Box>
      <Divider />
      <Stack color={"#9ab"} mt={1}>
        {Array.from({ length: 2 }).map((i, idx) => (
          <ReviewPreview
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
