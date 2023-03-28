import Container from "@mui/system/Container";
import FilmsSearchForm from "../common/films-search-form.jsx";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ListDetail() {
  return (
    <Container sx={{ marginTop: 13, color: "#9ab" }}>
      <Box display={"flex"} gap={1} alignItems={"center"}>
        <Typography>Created by</Typography>
        <Link to={"/member/hiep"} style={{ textDecoration: "none", color: "inherit" }}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Avatar sx={{ height: 30, width: 30 }} />
            <strong>{"Ba Hiep"}</strong>
          </Box>
        </Link>
      </Box>
      <Typography my={1}>
        <i>Last updated: 6d</i>
      </Typography>
      <FilmsSearchForm />
      {/*<FilmsListPopularFilms />*/}
    </Container>
  );
}
