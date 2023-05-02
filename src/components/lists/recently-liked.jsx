import React from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../home/popular-lists.jsx";
import { Link } from "react-router-dom";
import { ListPreviewHorizontal } from "../common/list-preview-horizontal.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading";

export const ListPreviewVertical = (props) => {
  const { title, username, userAvatar, fullname, films, posters, listLink } = props;

  return (
    <Box mt={2} mb={1} component={Link} to={listLink ?? ""}>
      <Box width={"100%"}>
        <FilmCardsStackedFive posters={posters} />
      </Box>
      <Box width={"100%"}>
        <Typography variant={"body1"} color={"#fff"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
          {title.slice(0, 34)}
          {title.length > 34 && "..."}
        </Typography>
        <Box display={"flex"} alignItems={"center"} my={1}>
          <Avatar sx={{ width: 25, height: 25 }} src={userAvatar ?? ""} />
          <Typography variant={"body2"} ml={0.5} mr={1}>
            {fullname ?? username}
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
  const [{ data, loading, error }, refetch] = useAxios(`Lists/RecentLike`);

  return (
    <>
      <Typography variant={"body1"} textTransform={"uppercase"} color={"#fff"}>
        rencently liked
      </Typography>
      <Divider />
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <Box display={"flex"} flexDirection={"column"}>
          {data.map((i, idx) => (
            <Box key={idx} my={2}>
              <ListPreviewHorizontal
                title={i.ListName ?? ""}
                description={i.Description ?? ""}
                fullname={i.User?.FullName ?? ""}
                username={i.User?.UserName ?? ""}
                userAvatar={i.User?.Avatar ?? ""}
                favoriteCount={i.LikesCount ?? 0}
                commentCount={i.CommentsCount ?? 0}
                posters={i.List}
                films={i.Total ?? 0}
                listLink={`/u/${i.User?.UserName}/lists/${i.ListID}`}
              />
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};
export default RecentlyLike;
