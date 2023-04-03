import { Box, Container, Divider, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../home/list-preview";
import { Link } from "react-router-dom";

export const CrewList = (props) => {
  const { title } = props;
  return (
    <Box mt={2} mb={2} component={Link} to={"/u/hiep/lists/id123"}>
      <FilmCardsStackedFive />
      <Typography variant={"body1"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
        {title}
      </Typography>
    </Box>
  );
};

export const ListCrew = (props) => {
  return (
    <Container>
      <Box>
        <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
          crew lists
        </Typography>
        <Divider variant="fullWidth" />
        <Box display={"flex"} flexWrap={"wrap"} gap={{ sm: 5, lg: 10 }} justifyContent={"center"} color={"#fff"}>
          {Array.from({ length: 3 }).map((i, idx) => (
            <CrewList key={idx} title={"Lorem Ipsum is simply dummy text"} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};
