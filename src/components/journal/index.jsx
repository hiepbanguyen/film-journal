import { Box, Container, Divider, Typography } from "@mui/material";
import SpotlightArticle from "./spotlight-article.jsx";
import ArticlesAfterSpotlight from "./articles-after-spotlight.jsx";
import LifeInFilm from "./life-in-film.jsx";
import FestivalCircuit from "./festival-circuit.jsx";
import SelectTopic from "./topic-select.jsx";

export default function Journal() {
  return (
    <Box sx={{ fontFamily: "TiemposTextWeb,Georgia,serif,ColorEmoji" }}>
      <Box sx={{ background: "#456", color: "#bcd" }}>
        <Container sx={{ p: 5, pb: 20, pt: 12 }}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography
              fontWeight={800}
              fontSize={20}
              letterSpacing={10}
              ml={{ sm: 10 }}
              color={"#fff"}
              fontFamily={
                "GraphikWeb,-apple-system,BlinkMacSystemFont,Segoe UI,Hiragino Sans,Meiryo,sans-serif,ColorEmoji"
              }
            >
              JOURNAL
            </Typography>
            <SelectTopic />
          </Box>
          <Divider variant={"fullWidth"} sx={{ mb: 5, mt: 2, borderColor: "#bcd" }} />
          <SpotlightArticle
            topic={"Interview"}
            title={"An Appropriate Article Title"}
            intro={
              "Lorem Ipsum is simply dummy text of the printing and typesetting" +
              " industry. Lorem Ipsum has been the industry's standard dummy text" +
              " remaining essentially unchanged."
            }
            author={"Hiep Ba Nguyen"}
            date={new Date()}
            imgSrc={
              "https://a.ltrbxd.com/resized/sm/upload/r1/5i/sx/nn/Twice%20Colonized%20-%20Still%201%20-%20Aaju%20Peter-0-640-0-360-crop-fill.jpg?k=11c75d69bb"
            }
            link={"/"}
          />
        </Container>
      </Box>
      <Box sx={{ background: "#fff", color: "#89a", position: "relative" }}>
        <Container>
          <ArticlesAfterSpotlight />
          <LifeInFilm />
          <FestivalCircuit />
        </Container>
      </Box>
    </Box>
  );
}
