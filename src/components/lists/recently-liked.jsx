import React from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../home/popular-lists.jsx";
import { Link } from "react-router-dom";
import { ListPreviewHorizontal } from "../common/list-preview-horizontal.jsx";

export const ListPreviewVertical = (props) => {
  const { title, username, films } = props;

  return (
    <Box mt={2} mb={1} component={Link} to={"/u/hiep/lists/id123"}>
      <Box width={"100%"}>
        <FilmCardsStackedFive />
      </Box>
      <Box width={"100%"}>
        <Typography variant={"body1"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
          {title}
        </Typography>
        <Box display={"flex"} alignItems={"center"} my={1}>
          <Avatar sx={{ width: 25, height: 25 }}>H</Avatar>
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {username}
          </Typography>
          <Typography variant={"body2"} ml={0.5} mr={0.8}>
            {`${films}`} films
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const RecentlyLike = () => {
  return (
    <>
      <Typography variant={"body1"} textTransform={"uppercase"} color={"#fff"}>
        rencently liked
      </Typography>
      <Divider />
      <Box display={"flex"} flexDirection={"column"} alignItems={{ xs: "center", lg: "flex-start" }}>
        {Array.from({ length: 7 }).map((i, idx) => (
          <Box key={idx} my={2}>
            <ListPreviewHorizontal
              title={"Lorem Ipsum is simply dummy text"}
              username={"Bá Hiệp Nguyễn"}
              favoriteCount={400}
              commentCount={50}
              films={2}
              description={"Lorem Ipsum is simply dummy text"}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
export default RecentlyLike;
