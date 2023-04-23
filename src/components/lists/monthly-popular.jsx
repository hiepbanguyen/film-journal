import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { ListPreviewVertical } from "./recently-liked.jsx";

export const MonthlyPopular = () => {
  return (
    <>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
        popular this month
      </Typography>
      <Divider />
      <Box display={"flex"} flexWrap={"wrap"} gap={{ xs: 1, sm: 5, lg: 1 }} justifyContent={"center"} color={"#9ab"}>
        {Array.from({ length: 5 }).map((i, idx) => (
          <ListPreviewVertical
            key={idx}
            title={"Lorem Ipsum is simply dummy text"}
            username={"Nguyễn Việt Hoàn"}
            films={100}
          />
        ))}
      </Box>
    </>
  );
};
