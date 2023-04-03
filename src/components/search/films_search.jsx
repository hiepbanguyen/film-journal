import PaginatedList from "../common/paginated_list.jsx";
import { Box, Typography } from "@mui/material";
import FilmCard from "../common/film-card.jsx";
import React from "react";
import { useParams } from "react-router-dom";

function FilmSearchResult(props) {
  const { title, releasedYear, director, cast } = props;
  return (
    <Box my={2} display={"flex"} alignItems={"center"} gap={2}>
      <FilmCard size={70} />
      <Box>
        <Typography variant={"h5"}>
          <strong style={{ color: "#fff" }}>{title}</strong> <span style={{ fontSize: 17 }}>{releasedYear}</span>
        </Typography>
        <Typography>
          Directed by: <span style={{ color: "#fff" }}>{director}</span>
        </Typography>
        <Typography>
          Cast: <span style={{ color: "#fff" }}>{cast.join(", ")}</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default function FilmsSearch() {
  const { searchParams } = useParams();

  return (
    <>
      <Typography color={"#fff"} fontWeight={600}>
        Found 15 films matching '{searchParams}':
      </Typography>
      <PaginatedList rowsPerPage={10}>
        {Array.from({ length: 15 }).map((i, idx) => (
          <React.Fragment key={idx}>
            <FilmSearchResult
              title={"A film title"}
              releasedYear={2022}
              director={"Sarah Pauley"}
              cast={["Jim Cameron", "Hong Chau", "Dolly D", "Kerry Mulligan", "Sandra Oh"]}
            />
          </React.Fragment>
        ))}
      </PaginatedList>
    </>
  );
}
