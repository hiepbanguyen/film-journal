import { Box, Grid } from "@mui/material";
const similar_films = [
  {
    id: 1,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/t1/n6/d1/k6/g2mqdMU3jaz6uEosF5aqJgbw7e9-0-230-0-345-crop.jpg?v=f105fa4be0",
    url: "https://letterboxd.com/film/star-wars-the-force-awakens/",
  },
  {
    id: 2,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/wx/hm/hf/14/uKnhbfNt1ZR2TdoZpdn7vSNZlhX-0-230-0-345-crop.jpg?v=3bdae194cc",
    url: "https://letterboxd.com/film/man-of-steel/",
  },
  {
    id: 3,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/8x/qv/nm/63/ijQHiImv16vNSeZQsmih04kwn0C-0-230-0-345-crop.jpg?v=fa3e7ba9ed",
    url: "https://letterboxd.com/film/war-for-the-planet-of-the-apes/",
  },
  {
    id: 4,
    image:
      "https://a.ltrbxd.com/resized/film-poster/3/0/9/1/0/7/309107-godzilla-king-of-the-monsters-0-230-0-345-crop.jpg?v=d6625b756a",
    url: "https://letterboxd.com/film/godzilla-king-of-the-monsters-2019/",
  },
  {
    id: 5,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/nx/8b/vs/gc/cDbNAY0KM84cxXhmj8f0dLWza3t-0-230-0-345-crop.jpg?v=49eed12751",
    url: "https://letterboxd.com/film/dune-2021/",
  },
  {
    id: 6,
    image: "https://a.ltrbxd.com/resized/film-poster/2/2/5/0/6/0/225060-aquaman-0-230-0-345-crop.jpg?v=a5a1c0b649",
    url: "https://letterboxd.com/film/aquaman-2018/",
  },
];

export default function SimilarFilms() {
  return (
    <Box className="similar_films">
      <Box className="tag_reviews">
        <p>SILIMAR FILMS</p>
        <p>ALL</p>
      </Box>
      <Box display={"flex"} flexWrap={"wrap"}>
        {similar_films.map((similar_film_item, idx) => (
          <a key={idx} href={similar_film_item.url} target="_blank">
            <img className="image_form" src={similar_film_item.image}></img>
          </a>
        ))}
      </Box>
    </Box>
  );
}
