import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { ListPreviewVertical } from "./recently-liked.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";

export const MonthlyPopular = () => {
  const [{ data, loading, error }, refetch] = useAxios(`Lists/Popular/Month`);

  return (
    <>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
        popular this month
      </Typography>
      <Divider />
      <Box display={"flex"} flexWrap={"wrap"} gap={{ xs: 1, sm: 5, lg: 1 }} justifyContent={"center"} color={"#9ab"}>
        {loading ? (
          <Loading paddingY={10} />
        ) : (
          <>
            {data.map((i, idx) => (
              <ListPreviewVertical
                key={idx}
                title={i.ListName ?? ""}
                fullname={i.User?.FullName ?? ""}
                username={i.User?.UserName ?? ""}
                userAvatar={i.User?.Avatar ?? ""}
                films={i.Total ?? 0}
                posters={i.List}
                listLink={`/u/${i.User?.UserName}/lists/${i.ListID}`}
              />
            ))}
          </>
        )}
      </Box>
    </>
  );
};
