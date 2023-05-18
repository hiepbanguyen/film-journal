import { Avatar, Box } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import useAxios from "axios-hooks";
import { Loading } from "../common/loading.jsx";

export default function MembersAside() {
  const [{ data, loading, error }] = useAxios({
    url: `Users/Popular`,
    method: "POST",
    data: {
      pageSize: 20,
      pageIndex: 1,
      sort: "Month",
    },
  });

  return (
    <>
      {loading ? (
        <Loading paddingY={10} />
      ) : (
        <Box display={"flex"} flexWrap={"wrap"} sx={{ justifyContent: "center" }} gap={0.5}>
          {data?.Data?.map((i, idx) => (
            <Link key={idx} to={i?.UserName && `/u/${i?.UserName}`}>
              <Avatar sx={{ width: 50, height: 50 }} src={i?.Avatar} alt={i?.UserName ?? "user avatar"} />
            </Link>
          ))}
        </Box>
      )}
    </>
  );
}
