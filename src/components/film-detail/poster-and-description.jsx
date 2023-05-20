import { Box, Typography } from "@mui/material";
import ViewsLikesLists from "../common/views-likes-lists.jsx";
import React from "react";

export default function PosterAndDescription(props) {
  const directors = React.useMemo(() => {
    return (
      props?.Crew?.find(
        (i) => i?.[0] === "Director" || i?.[0] === "Writer" || i?.[0] === "Producer" || i?.[0] === "Co-Director",
      )?.[1]
        ?.slice(0, 3)
        .join(", ") ?? "Various directors"
    );
  }, [props?.Crew]);

  return (
    <>
      <Box display={"flex"} gap={{ xs: 2, sm: 5 }} mb={3}>
        <Box>
          <Box
            component={"img"}
            sx={{ borderRadius: 1 }}
            src={props?.Poster_path}
            alt="Film Poster"
            width={{ xs: 100, sm: 240 }}
          />
          <Box
            gap={1}
            sx={(theme) => ({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              [theme.breakpoints.only("xs")]: {
                display: "none",
              },
            })}
          >
            <ViewsLikesLists
              views={props?.ReviewsCount ?? 0}
              likes={props?.LikesCount ?? 0}
              lists={props?.Appears ?? 0}
              filmId={props.filmId}
            />
          </Box>
        </Box>
        <Box color={"#a2d1ec"}>
          <Typography
            fontSize={{ xs: 25, sm: 30, md: 40 }}
            lineHeight={1}
            fontWeight={700}
            fontFamily="TiemposTextWeb,Georgia,serif,ColorEmoji"
            color={"#fff"}
          >
            {props?.Title}
          </Typography>
          {props?.Original_title && (
            <Typography variant={"h6"} fontStyle={"italic"}>
              {"Original title: "}
              {props?.Original_title}
            </Typography>
          )}
          <Typography variant={"h6"}>
            {props?.Release_date ? new Date(props.Release_date).getFullYear() : ""}
          </Typography>
          <Typography fontSize={15}>
            {"Directed by "}
            <b>{directors}</b>
          </Typography>
          <Typography fontSize={15} pb={1}>
            {props?.Runtime} {" minutes"}
          </Typography>
          <Box className={"crew_people"} display={"flex"} flexWrap={"wrap"} mb={0.5}>
            {props?.Genres.map((i, idx) => (
              <a key={idx}>{i}</a>
            ))}
          </Box>
          <Box sx={(theme) => ({ color: "#fff", mt: 3, [theme.breakpoints.only("xs")]: { display: "none" } })}>
            <h3>{props?.Tagline}</h3>
            <Typography>{props?.Overview}</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={(theme) => ({ mt: 1, [theme.breakpoints.not("xs")]: { display: "none" } })}>
        <h3>{props?.Tagline}</h3>
        <Typography>{props?.Overview}</Typography>
      </Box>
      <Box
        gap={1}
        mt={3}
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          [theme.breakpoints.not("xs")]: {
            display: "none",
          },
        })}
      >
        <ViewsLikesLists
          views={props?.ReviewsCount ?? 0}
          likes={props?.LikesCount ?? 0}
          lists={props?.Appears ?? 0}
          filmId={props.filmId}
        />
      </Box>
    </>
  );
}
