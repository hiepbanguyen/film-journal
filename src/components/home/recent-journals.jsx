import { Box, Divider, Grid, Typography } from "@mui/material";
import { ArticlePreview } from "../journal/articles-after-spotlight.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import React from "react";

export const RecentJournals = () => {
  const [{ data, loading, error }] = useAxios({
    url: `Journals/GetPaging?pageSize=6&pageIndex=1`,
    method: "POST",
  });

  return (
    <Box mt={5}>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
        recent journals
      </Typography>
      <Divider />
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <>
          <Grid container sx={{ fontFamily: "TiemposTextWeb,Georgia,serif,ColorEmoji" }} mt={3} px={{ xs: 3, sm: 0 }}>
            {data?.Data?.map((i, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <ArticlePreview
                  key={idx}
                  topic={i?.Category}
                  title={i?.Title}
                  intro={i?.Intro}
                  imgSrc={i?.Banner}
                  link={`/journals/${i?.JournalID}`}
                  date={i?.ModifiedDate}
                  author={i?.Author ? JSON.parse(i.Author)?.name : ""}
                  titleColor={"#fff"}
                  small={true}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};
