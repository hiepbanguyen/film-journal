import { Box, Container, Divider, Typography } from "@mui/material";
import SpotlightArticle from "./spotlight-article.jsx";
import ArticlesAfterSpotlight from "./articles-after-spotlight.jsx";
import Reviews from "./reviews.jsx";
import News from "./news.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading";

export default function Journal() {
  const [{ data, loading }] = useAxios("Journals/New");

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
            {/*<SelectTopic />*/}
          </Box>
          <Divider variant={"fullWidth"} sx={{ mb: 5, mt: 2, borderColor: "#bcd" }} />
          {loading ? (
            <Loading paddingY={10} />
          ) : (
            <SpotlightArticle
              topic={data?.[0]?.Category}
              title={data?.[0]?.Title}
              intro={data?.[0]?.Intro}
              imgSrc={data?.[0]?.Banner}
              link={`${data?.[0]?.JournalID}`}
              date={data?.[0]?.ModifiedDate}
              author={data?.[0]?.Author ? JSON.parse(data[0].Author.replace("\\", ""))?.name : ""}
            />
          )}
        </Container>
      </Box>
      <Box sx={{ background: "#fff", color: "#89a", position: "relative" }}>
        <Container>
          {loading ? <Loading paddingY={10} /> : <ArticlesAfterSpotlight data={data?.slice(1)} />}
          <Reviews />
          <News />
        </Container>
      </Box>
    </Box>
  );
}
