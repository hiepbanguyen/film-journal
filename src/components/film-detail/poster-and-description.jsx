import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import ViewsLikesLists from "./views-likes-lists.jsx";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded.js";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";

export default function PosterAndDescription(props) {
  return (
    <>
      <Box display={"flex"} gap={{ xs: 2, sm: 5 }} mb={3}>
        <Box>
          <Box component={"img"} sx={{ borderRadius: 2 }} src={props.image} alt="" width={{ xs: 100, sm: 240 }} />
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
            <ViewsLikesLists views={props.views} likes={props.likes} lists={props.lists} />
          </Box>
        </Box>
        <Box color={"rgba(255,255,255,0.8)"}>
          <Typography
            fontSize={{ xs: 25, md: 40 }}
            fontWeight={700}
            fontFamily="TiemposTextWeb,Georgia,serif,ColorEmoji"
            color={"#fff"}
          >
            {props.title}
          </Typography>
          <Typography variant={"h6"}>{props.releasedYear}</Typography>
          <Typography>
            {"Directed by "}
            {props.director}
          </Typography>
          <Typography>
            {props.runtime} {" minutes"}
          </Typography>
          <Box sx={(theme) => ({ color: "#fff", mt: 3, [theme.breakpoints.only("xs")]: { display: "none" } })}>
            <h3>{props.subtitle}</h3>
            <Typography>{props.description}</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={(theme) => ({ mt: 1, [theme.breakpoints.not("xs")]: { display: "none" } })}>
        <h3>{props.subtitle}</h3>
        <Typography>{props.description}</Typography>
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
        <ViewsLikesLists views={props.views} likes={props.likes} lists={props.lists} />
      </Box>
    </>
  );
}
