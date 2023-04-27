import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import PaginatedList from "../common/paginated_list.jsx";
import React from "react";
import { ListPreviewHorizontal } from "../common/list-preview-horizontal.jsx";

export default function ListsSearch() {
  const { searchParams } = useParams();

  return (
    <>
      <Typography color={"#fff"} fontStyle={"italic"}>
        Found 15 lists matching <strong>'{searchParams}'</strong>:
      </Typography>
      <PaginatedList rowsPerPage={10}>
        {Array.from({ length: 15 }).map((i, idx) => (
          <Box key={idx} my={2}>
            <ListPreviewHorizontal
              title={"Lorem Ipsum is simply dummy text"}
              username={"Bá Hiệp Nguyễn"}
              favoriteCount={400}
              commentCount={50}
              films={2}
              description={"Lorem Ipsum is simply dummy text"}
            />
          </Box>
        ))}
      </PaginatedList>
    </>
  );
}
