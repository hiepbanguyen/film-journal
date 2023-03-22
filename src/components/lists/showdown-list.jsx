import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { ListShowdown } from "../home/list-preview";

export const ShowdownLists = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
          <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
            popular lists
          </Typography>
          <Typography variant={"caption"} mt={5}>
            MORE
          </Typography>
        </Box>
        <Divider variant="fullWidth" />
        <Grid container spacing={1}>
          {Array.from({ length: 3 }).map((i, idx) => (
            <Grid key={idx} item xs={4}>
              <ListShowdown title={"Lorem Ipsum is simply dummy text"} description={"Bá Hiệp Nguyễn"} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
