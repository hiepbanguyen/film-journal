import { Box } from "@mui/material";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import { Link } from "react-router-dom";

const related_films = [
  {
    id: 1,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/1p/mh/li/l2/b7nR3eKeTOwHPKmDLUWunIGasKo-0-230-0-345-crop.jpg?v=0bb5ec98ec",
    url: "https://letterboxd.com/film/avatar/",
  },
  {
    id: 2,
    image: "https://a.ltrbxd.com/resized/film-poster/7/0/0/0/7/70007-avatar-3-0-230-0-345-crop.jpg?v=1aec45e4be",
    url: "https://letterboxd.com/film/avatar-3/",
  },
  {
    id: 3,
    image: "https://a.ltrbxd.com/resized/film-poster/1/5/3/5/9/3/153593-avatar-4-0-230-0-345-crop.jpg?v=2f9bb2d0b4",
    url: "https://letterboxd.com/film/avatar-4/",
  },
  {
    id: 4,
    image: "https://a.ltrbxd.com/resized/film-poster/3/2/7/6/8/0/327680-avatar-5-0-230-0-345-crop.jpg?v=97fcab3aed",
    url: "https://letterboxd.com/film/avatar-5/",
  },
];

export default function RelatedFilms({ filmId }) {
  const [{ data, loading }] = useAxios({
    url: `Films/${filmId}/Related`,
    method: "POST",
    data: {
      pageSize: 8,
      pageIndex: 1,
    },
  });
  return (
    <Box className="related_films">
      <Box className="tag_reviews">
        <p>RELATED FILMS</p>
      </Box>
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
