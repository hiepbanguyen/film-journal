import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { ListPreviewVertical } from "./recently-liked.jsx";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";

export const MostEngaged = (props) => {
  const [{ data, loading, error }, refetch] = useAxios(`Lists/MostEngaged`);

  return (
    <Box>
      <Typography variant={"body1"} color={"#fff"} textTransform={"uppercase"}>
        most engaged
      </Typography>
      <Divider />
      <Box display={"flex"} flexWrap={"wrap"} gap={{ sm: 5, lg: 10 }} justifyContent={"center"} color={"#9ab"}>
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
    </Box>
  );
};
