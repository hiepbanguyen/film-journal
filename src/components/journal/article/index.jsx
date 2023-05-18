import React from "react";
import { Avatar, Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Timestamp from "../timestamp.jsx";
import ArticlePreview from "../article-preview.jsx";
import { FilmSearchResult } from "../../search/films-search.jsx";
import useAxios from "axios-hooks";
import { useParams } from "react-router-dom";
import { Loading } from "../../common/loading";

const JournalArticle = () => {
  const { journalId } = useParams();
  const [{ data, loading }] = useAxios(`Journals/${journalId}`);
  const [{ data: relatedArticles }] = useAxios({
    url: `Journals/GetRelatedArticles?JournalID=${journalId}`,
    method: "POST",
  });
  const [{ data: mentionedFilm }] = useAxios({
    url: `Journals/GetMentionedFilm?JournalID=${journalId}`,
    method: "POST",
  });
  const author = data?.Author && JSON.parse(data.Author);

  if (loading) return <Loading paddingY={10} />;
  return (
    <Box sx={{ fontFamily: "TiemposTextWeb,Georgia,serif,ColorEmoji" }}>
      <Box sx={{ background: "#456", color: "#bcd" }}>
        <Container sx={{ pb: 8, pt: 12, px: { xs: 2, md: 10, lg: 20 } }}>
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
          </Box>
          <Divider variant={"fullWidth"} sx={{ my: 2, borderColor: "#bcd" }} />
          <Typography mb={1}>{data?.Category}</Typography>
          <Typography color={"#fff"} variant={"h5"} fontWeight={"bold"}>
            {data?.Title}
          </Typography>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mt={5} fontSize={14}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Avatar src={author?.avatar} />
              <Typography
                letterSpacing={3}
                textTransform={"uppercase"}
                color={"#c5daef"}
                fontSize={12}
                fontWeight={600}
                fontFamily={"Graphik-Regular-Web,sans-serif"}
              >
                {author?.name}
              </Typography>
            </Box>
            <Timestamp date={data?.ModifiedDate} noSeparator={true} />
          </Box>
        </Container>
      </Box>
      <Box sx={{ background: "#fff", color: "#89a", position: "relative" }}>
        <Container sx={{ px: { xs: 2, md: 10, lg: 20 } }}>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              position={"relative"}
              component={"img"}
              src={data?.Banner}
              sx={{
                borderRadius: 1,
                maxWidth: 800,
                width: "90%",
                aspectRatio: 7 / 4,
                top: -40,
              }}
            />
          </Box>
          <Typography variant={"body1"} color={"#456"} fontWeight={"bold"}>
            {data?.Intro}
          </Typography>
          <Stack gap={3} my={4}>
            {data?.Content &&
              JSON.parse(data.Content)?.map((i, idx) => (
                <React.Fragment key={idx}>
                  {i.type === "text" ? (
                    <Typography variant={"body1"} color={"#1b3552"}>
                      {i.text}
                    </Typography>
                  ) : (
                    <>
                      <Box mt={2} display={"flex"} flexDirection={"column"} alignItems={"center"} fontSize={13}>
                        <Box
                          component={"img"}
                          pb={0.5}
                          src={i.pic.src}
                          sx={{
                            maxWidth: 700,
                            width: "80%",
                            aspectRatio: 7 / 4,
                          }}
                        />
                        {i.pic.caption}
                      </Box>
                    </>
                  )}
                </React.Fragment>
              ))}
          </Stack>
          <Divider sx={{ mt: 1 }} />
          <Typography fontSize={18} color={"#082f52"}>
            Mentioned film
          </Typography>
          <Box px={{ sm: 3 }}>
            <FilmSearchResult
              title={mentionedFilm?.Title}
              poster={mentionedFilm?.Poster_Path}
              releasedYear={mentionedFilm?.ReleaseDate ? new Date(mentionedFilm.ReleaseDate).getFullYear() : ""}
              director={mentionedFilm?.Director}
              cast={mentionedFilm?.Cast}
              link={`/films/${mentionedFilm?.FilmID}`}
              fontColor={"#456"}
            />
          </Box>
          <Divider sx={{ mt: 1 }} />
          <Typography fontSize={18} color={"#082f52"}>
            Related articles
          </Typography>
          <Grid container sx={{ fontFamily: "TiemposTextWeb,Georgia,serif,ColorEmoji" }} mt={5}>
            {relatedArticles?.map((i, idx) => (
              <Grid item key={idx} xs={12} sm={4}>
                <ArticlePreview
                  key={idx}
                  topic={i?.Category}
                  title={i?.Title}
                  intro={i?.Intro}
                  imgSrc={i?.Banner}
                  link={`/journals/${i?.JournalID}`}
                  date={i?.ModifiedDate}
                  author={i?.Author ? JSON.parse(i.Author)?.name : ""}
                  titleColor={"#202830"}
                  small={true}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default JournalArticle;
