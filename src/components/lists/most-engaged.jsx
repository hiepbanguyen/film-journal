import { Box, Divider, Typography } from "@mui/material";
import { FilmCardsStackedFive } from "../home/popular-lists.jsx";
import { Link } from "react-router-dom";
import React from "react";
import { ListPreviewVertical } from "./recently-liked.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";

export const CrewList = (props) => {
  const { title } = props;
  return (
    <Box mt={2} mb={2} component={Link} to={"/u/hiep/lists/id123"}>
      <FilmCardsStackedFive />
      <Typography variant={"body1"} color={"#9ab"} sx={{ ":hover": { color: "#00e8ff" } }} fontWeight={600}>
        {title}
      </Typography>
    </Box>
  );
};

export const MostEngaged = (props) => {
  const [{ data, loading, error }, refetch] = useAxios(`Lists/MostEngaged`);

  return (
    <Box>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
        most engaged
      </Typography>
      <Divider />
      <Box display={"flex"} flexWrap={"wrap"} gap={{ sm: 5, lg: 10 }} justifyContent={"center"} color={"#9ab"}>
        {loading ? (
          <Loading paddingY={10} />
        ) : (
          <>
            {data.map((i, idx) => (
              <ListPreviewVertical
                key={idx}
                title={i.ListName ?? ""}
                fullname={i.User?.FullName ?? ""}
                username={i.User?.UserName ?? ""}
                userAvatar={i.User?.Avatar ?? ""}
                films={i.Total ?? 0}
                posters={i.List}
                listLink={`/u/${i.User?.UserName}/lists/${i.ListID}`}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};
