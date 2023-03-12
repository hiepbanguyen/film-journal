import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { AllTimeList } from "../home/list-preview";

export const ListAllTime = (props) => {
    return (
      <Container>
      <Box mt={2} mb={2} ml={{ md: 0, xs: "5%" }}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
          <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
            all-time lists
          </Typography>
          <Typography variant={"caption"} mt={5}>
            MORE
          </Typography>
        </Box>
          <Divider variant="fullWidth" color={"#fff"} />
          <Grid container spacing={2} color={"#fff"}>
            {Array.from({ length: 2 }).map((i, idx) => (
              <Grid key={idx} item xs={6}>
                <AllTimeList
                  title={"Lorem Ipsum is simply dummy text"}
                  username={"Hoan"}
                  year={"4"}
                />
              </Grid>
            ))}
          </Grid>
      </Box>
      </Container>
    );
  };