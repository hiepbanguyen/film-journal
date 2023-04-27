import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import blankCard from "../../assets/img/blank-card-list.png";

export default function FilmCard(props) {
  const { size, list, link, shadow, src } = props;
  return (
    <>
      {list ? (
        <Card
          elevation={0}
          sx={{
            width: size ?? 80,
            height: size ? (size * 3) / 2 : 120,
            boxShadow: list && shadow ? "8px 0 5px -2px #000" : "none",
            border: "1px solid rgba(0,0,0,0.3)",
          }}
        >
          <CardMedia component="img" height="100%" image={src ?? blankCard} alt="Paella dish" />
        </Card>
      ) : (
        <Link to={link ?? "/films/1"}>
          <Card
            elevation={0}
            sx={{
              width: size ?? 80,
              height: size ? (size * 3) / 2 : 120,
              boxShadow: list ? "8px 0 5px -2px #000" : "none",
              border: "1px solid rgba(0,0,0,0.2)",
              "&:hover": {
                border: "2px solid #00e054",
              },
            }}
          >
            <CardMedia component="img" height="100%" image={src ?? blankCard} alt="Paella dish" />
          </Card>
        </Link>
      )}
    </>
  );
}
