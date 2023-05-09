import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import PaginationBase from "../common/pagination-base.jsx";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";


const AnswerBox = ({ right, wrong, data }) => {
  return (
    <Card
      sx={{
        display: "flex",
        bgcolor: right ? "rgb(45,164,82)" : wrong ? "rgb(220,55,55)" : "#456",
        color: "#fff",
        ":hover": {
          cursor: "pointer",
          bgcolor: right ? "rgba(45,164,82,0.8)" : wrong ? "rgba(220,55,55,0.8)" : "rgba(153,170,187,0.2)",
        },
      }}
    >
      <Box flex={1} sx={{ display: "flex", alignItems: "center" }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box width={20} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {right ? <CheckCircleOutlineIcon /> : wrong ? <CancelOutlinedIcon /> : <></>}
          </Box>
          <Typography>{data.answer}</Typography>
        </CardContent>
      </Box>
      {data.Image && (
        <CardMedia component="img" sx={{ width: 100, height: 150 }} image={data.Image} alt={data.answer} />
      )}
    </Card>
  );
};

export const FilmTrivia = ({ filmId }) => {
  const [{ data, loading }] = useAxios(`Question/QuestionsAndAnswers?FilmID=${filmId}`);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [rightAnswer, setRightAnswer] = React.useState(null);
  const [wrongAnswer, setWrongAnswer] = React.useState(null);
  const handeAnswerClick = (answerIdx, questionIdx, right) => {
    if (!right) {
      setWrongAnswer(answerIdx);
    }
    setRightAnswer(data.Data?.[questionIdx - 1].answers.findIndex((i) => i.RightAnswer));
  };

  const handleChangePage = (newPage) => {
    setPageIndex(newPage);
    setRightAnswer(null);
    setWrongAnswer(null);
  };

  if (loading) return <Loading paddingY={10} />;
  return (
    <Box className="related_films" mb={5}>
      <Box className="tag_reviews">
        <p>FILM TRIVIA</p>
      </Box>
      <Typography variant={"h6"} my={3}>
        {data?.Data?.[pageIndex - 1].question}
      </Typography>
      <Grid container spacing={2} mb={3}>
        {data?.Data?.[pageIndex - 1].answers.map((i, idx) => (
          <Grid key={idx} item xs={12} sm={6} onClick={() => handeAnswerClick(idx, pageIndex, i.RightAnswer)}>
            <AnswerBox data={i} right={rightAnswer === idx} wrong={wrongAnswer === idx} />
          </Grid>
        ))}
      </Grid>
      <PaginationBase totalPage={data?.Total ?? 0} pageIndex={pageIndex} onChange={handleChangePage} />
    </Box>
  );
};
