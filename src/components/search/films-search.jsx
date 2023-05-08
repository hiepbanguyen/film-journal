import { Box, Stack, Typography } from "@mui/material";
import FilmCard from "../common/film-card.jsx";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../common/loading.jsx";
import PaginationBase from "../common/pagination-base.jsx";
import useAxios from "axios-hooks";

export function FilmSearchResult(props) {
  const { title, releasedYear, director, cast, poster, link, fontColor } = props;
  return (
    <Box my={2} display={"flex"} alignItems={"center"} gap={2}>
      <FilmCard size={70} src={poster} link={link ?? ""} />
      <Box component={Link} to={link ?? ""}>
        <Typography variant={"h5"}>
          <strong style={{ color: fontColor ?? "#fff" }}>{title}</strong>{" "}
          <span style={{ fontSize: 17 }}>{releasedYear}</span>
        </Typography>
        <Typography>
          Directed by:{" "}
          <span style={{ color: fontColor ?? "#fff" }}>
            {director ? (director.length > 50 ? `${director.slice(0, 50)}...` : director) : "N/A"}
          </span>
        </Typography>
        <Typography>
          Cast:{" "}
          <span style={{ color: fontColor ?? "#fff" }}>
            {cast ? (cast.length > 100 ? `${cast.slice(0, 160)}...` : director) : "N/A"}
          </span>
        </Typography>
      </Box>
    </Box>
  );
}

export default function FilmsSearch() {
  const { searchParams } = useParams();
  const [pageIndex, setPageIndex] = React.useState(1);
  const [{ data, loading }] = useAxios({
    url: `Users/film/search/${searchParams.replace("%", " ")}`,
    method: "POST",
    data: {
      pageSize: 10,
      pageIndex: pageIndex,
    },
  });

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
  };

  return (
    <>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Typography color={"#fff"} fontStyle={"italic"}>
            Found {data?.Total ?? 0} film(s) matching <strong>'{searchParams}'</strong>:
          </Typography>
          <Stack>
            {data?.Data?.films?.map((i, idx) => (
              <FilmSearchResult
                key={idx}
                title={i?.Title}
                poster={i?.Poster_Path}
                releasedYear={i?.ReleaseDate ? new Date(i.ReleaseDate).getFullYear() : ""}
                director={i?.Director}
                cast={i?.Cast}
                link={`/films/${i?.FilmID}`}
              />
            ))}
          </Stack>
          <PaginationBase totalPage={data?.TotalPage ?? 0} pageIndex={pageIndex} onChange={handleChangePage} />
        </>
      )}
    </>
  );
}
