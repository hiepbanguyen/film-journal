import * as React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import FilmCard from "../home/film-card.jsx";

export const RecentList = (props) => {
  const [count, setCount] = React.useState("123");
  const { title, films } = props;
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} color={"#fff"}>
        <Typography variant={"body1"} textTransform={"uppercase"} mt={5}>
          recent list
        </Typography>
        <Typography variant={"caption"} mt={5}>
          {count}
        </Typography>
      </Box>
      <Divider variant="fullWidth" />
      <Grid container mt={0} spacing={2} color={"#fff"}>
        <Grid item xs={12} sm={6} md={12}>
          <Box mt={2} mb={2} ml={{ md: 0, xs: "5%" }}>
            <Box position={"relative"} height={160}>
              {Array.from({ length: 5 }).map((i, idx) => (
                <Box key={idx} position={"absolute"} zIndex={10 - idx} left={`${idx * 18}%`}>
                  <FilmCard elevation={3} />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box color={"#fff"} display="flex">
        <Typography>
          {title} <span> {`${films}`} films</span>
        </Typography>
      </Box>
    </Box>
  );
};
