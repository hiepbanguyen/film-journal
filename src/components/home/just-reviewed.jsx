import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import FilmCard from "../common/film-card.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import React from "react";

export const JustReviewed = () => {
  const [{ data, loading, error }, refetch] = useAxios(`Films/JustReviewed`);

  return (
    <>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
            <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
              Just Reviewed...
            </Typography>
            <Typography variant={"body2"} mt={5}>
              {data.TotalReview ?? 0} films watched
            </Typography>
          </Box>
          <Divider />
          <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={1} mt={1.5}>
            {data?.Data?.map((i, idx) => (
              <FilmCard key={idx} link={i.FilmID && `/films/${i.FilmID}`} src={i?.Poster_path} />
            ))}
          </Box>
        </>
      )}
      <Typography variant={"h6"} mt={3} textAlign={"center"}>
        Write and share reviews. Compile your own lists. Share your life in film.
      </Typography>
    </>
  );
};
