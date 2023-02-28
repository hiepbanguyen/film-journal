import { Box, Card, CardMedia } from "@mui/material";

export default function FilmCard(props) {
  const { size, elevation } = props;
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Card elevation={elevation ?? 0} sx={{ width: size === "medium" ? 150 : 100 }}>
        <CardMedia
          component="img"
          height="100%"
          image="https://a.ltrbxd.com/resized/film-poster/8/2/2/3/3/3/822333-the-quiet-girl-0-150-0-225-crop.jpg?v=34c5de0af7"
          alt="Paella dish"
        />
      </Card>
    </Box>
  );
}
