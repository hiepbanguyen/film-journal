import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ListPreview from "../home/list-preview";

const Popular = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"} mt={5}>
        popular this week
      </Typography>
      <Divider variant={"fullWidth"} />
      <Box display={"flex"} flexWrap={"wrap"} gap={{ md: 5, lg: 10 }} justifyContent={"center"} color={"#fff"}>
        {Array.from({ length: 3 }).map((i, idx) => (
          <ListPreview
            key={idx}
            title={"Lorem Ipsum is simply dummy text"}
            fullname={"Bá Hiệp Nguyễn"}
            username={"bahiep"}
            favoriteCount={4}
            commentCount={50}
          />
        ))}
      </Box>
    </Container>
  );
};
export default Popular;
