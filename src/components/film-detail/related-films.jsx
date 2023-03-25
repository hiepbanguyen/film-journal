import { Box, Grid } from "@mui/material";
const related_films = [
  {
    id: 1,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/1p/mh/li/l2/b7nR3eKeTOwHPKmDLUWunIGasKo-0-230-0-345-crop.jpg?v=0bb5ec98ec",
    url: "https://letterboxd.com/film/avatar/",
  },
  {
    id: 2,
    image: "https://a.ltrbxd.com/resized/film-poster/7/0/0/0/7/70007-avatar-3-0-230-0-345-crop.jpg?v=1aec45e4be",
    url: "https://letterboxd.com/film/avatar-3/",
  },
  {
    id: 3,
    image: "https://a.ltrbxd.com/resized/film-poster/1/5/3/5/9/3/153593-avatar-4-0-230-0-345-crop.jpg?v=2f9bb2d0b4",
    url: "https://letterboxd.com/film/avatar-4/",
  },
  {
    id: 4,
    image: "https://a.ltrbxd.com/resized/film-poster/3/2/7/6/8/0/327680-avatar-5-0-230-0-345-crop.jpg?v=97fcab3aed",
    url: "https://letterboxd.com/film/avatar-5/",
  },
];

export default function RelatedFilms() {
  return (
    <Box className="related_films">
      <Box className="tag_reviews">
        <p>RELATED FILMS</p>
      </Box>
      <Box display={"flex"} flexWrap={"wrap"}>
        {related_films.map((related_film_item, idx) => (
          <a key={idx} href={related_film_item.url} target="_blank">
            <img className="image_form" src={related_film_item.image}></img>
          </a>
        ))}
      </Box>
    </Box>
  );
}
