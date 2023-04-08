import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import PaginatedList from "../common/paginated_list.jsx";
import React from "react";
import { ListPreviewHorizontal } from "../common/list-preview-horizontal.jsx";

export default function ListsSearch() {
  const { searchParams } = useParams();

  return (
    <>
      <Typography color={"#fff"}>
        Found 15 lists matching <strong>'{searchParams}'</strong>:
      </Typography>
      <PaginatedList rowsPerPage={10}>
        {Array.from({ length: 15 }).map((i, idx) => (
          <ListPreviewHorizontal
            key={idx}
            title={"Lorem Ipsum is simply dummy text"}
            username={"Bá Hiệp Nguyễn"}
            favoriteCount={400}
            commentCount={50}
            films={2}
            description={"Lorem Ipsum is simply dummy text"}
          />
        ))}
      </PaginatedList>
    </>
  );
}
