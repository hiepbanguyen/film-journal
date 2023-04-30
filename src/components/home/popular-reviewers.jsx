import { Divider, Grid, Typography } from "@mui/material";
import MemberPreview from "../common/member-preview.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";
import React from "react";

export const PopularReviewers = () => {
  const [{ data, loading, error }] = useAxios({
    url: `Users/Popular`,
    method: "POST",
    data: {
      pageSize: 6,
      pageIndex: 1,
    },
  });

  return (
    <>
      <Typography variant={"body1"} textTransform={"uppercase"} color={"#fff"} mt={5}>
        popular reviewers this week
      </Typography>
      <Divider />
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <Grid container spacing={1.5} mt={0.5}>
          {(data?.Data ?? []).map((i, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={12} sx={{ pr: 4, display: "flex", justifyContent: "center" }}>
              <MemberPreview
                fullname={i.FullName ?? ""}
                username={i.UserName ?? ""}
                followers={i.Follows ?? 0}
                following={i.Following ?? 0}
                filmsReviewed={i.Reviews ?? 0}
                avatar={i.Avatar ?? ""}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
