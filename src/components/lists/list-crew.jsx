import { Box, Container, Divider, Typography } from "@mui/material";
import { CrewList } from "../home/list-preview";

export const ListCrew = (props) => {
  return (
    <Container>
      <Box>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
          <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
            crew lists
          </Typography>
          <Typography variant={"caption"} mt={5}>
            MORE
          </Typography>
        </Box>
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
