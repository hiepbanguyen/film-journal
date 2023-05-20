import { Box, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import { Link } from "react-router-dom";
import React from "react";

export default function SimilarFilms({ filmId }) {
  const [{ data, loading }] = useAxios({
    url: `Films/${filmId}/Similar`,
    method: "POST",
    data: {
      pageSize: 8,
      pageIndex: 1,
    },
  });

  return (
    <Box className="related_films">
      <Box className="tag_reviews">
        <p>SIMILAR FILMS</p>
      </Box>
      {data?.Total === 0 && <Typography textAlign={"center"}>No similar films</Typography>}
      {loading ? (
        <Loading />
      ) : (
        <Box display={"flex"} flexWrap={"wrap"}>
          {data?.Data?.map((i, idx) => (
            <Link key={idx} to={`/films/${i?.FilmID}`}>
              <img className="image_form" src={i?.Poster_path}></img>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}
