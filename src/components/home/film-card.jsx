import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

export default function FilmCard(props) {
  const { size, list, link, shadow } = props;
  return (
    <>
      {list ? (
        <Card
          elevation={0}
          sx={{
            width: size === "medium" ? 140 : 80,
            boxShadow: list && shadow ? "8px 0 5px -2px #000" : "none",
            border: "1px solid rgba(0,0,0,0.3)",
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            image="https://a.ltrbxd.com/resized/film-poster/8/2/2/3/3/3/822333-the-quiet-girl-0-150-0-225-crop.jpg?v=34c5de0af7"
            alt="Paella dish"
          />
        </Card>
      ) : (
        <Link to={link ?? "/film/a/1"}>
          <Card
            elevation={0}
            sx={{
              width: size === "medium" ? 140 : 80,
              boxShadow: list ? "8px 0 5px -2px #000" : "none",
              border: "1px solid rgba(0,0,0,0.2)",
              "&:hover": {
                border: "2px solid rgba(255,255,255,0.7)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image="https://a.ltrbxd.com/resized/film-poster/8/2/2/3/3/3/822333-the-quiet-girl-0-150-0-225-crop.jpg?v=34c5de0af7"
              alt="Paella dish"
            />
          </Card>
        </Link>
      )}
    </>
  );
}
