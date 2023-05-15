import { Box } from "@mui/material";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import { Link } from "react-router-dom";

export default function RelatedFilms({ filmId }) {
  const [{ data, loading }] = useAxios({
    url: `Films/${filmId}/Related`,
    method: "POST",
    data: {
      pageSize: 8,
      pageIndex: 1,
    },
  });

  if (data?.Total === 0) return <></>;
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
