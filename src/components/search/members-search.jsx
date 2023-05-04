import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import PaginatedList from "../common/paginated_list.jsx";
import React from "react";
import MemberPreview from "../common/member-preview.jsx";

export default function MemberSearch() {
  const { searchParams } = useParams();

  return (
    <>
      <Typography color={"#fff"} fontStyle={"italic"}>
        Found 15 member(s) matching <strong>'{searchParams}'</strong>:
      </Typography>
      <PaginatedList rowsPerPage={10}>
        {Array.from({ length: 15 }).map((i, idx) => (
          <Box my={1} key={idx}>
            <MemberPreview fullname={"Ba Hiep"} username={"bahiep"} followers={15} following={20} filmsReviewed={200} />
          </Box>
        ))}
      </PaginatedList>
    </>
  );
}
