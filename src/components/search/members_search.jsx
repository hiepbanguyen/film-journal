import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import PaginatedList from "../common/paginated_list.jsx";
import React from "react";
import MemberPreview from "../common/member-preview.jsx";

export default function MemberSearch() {
  const { searchParams } = useParams();

  return (
    <>
      <Typography color={"#fff"}>
        Found 15 members matching <strong>'{searchParams}'</strong>:
      </Typography>
      <PaginatedList rowsPerPage={10}>
        {Array.from({ length: 15 }).map((i, idx) => (
          <React.Fragment key={idx}>
            <MemberPreview fullname={"Ba Hiep"} username={"bahiep"} followers={15} following={20} filmsReviewed={200} />
          </React.Fragment>
        ))}
      </PaginatedList>
    </>
  );
}
