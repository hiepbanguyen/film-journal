import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import PaginatedList from "../common/paginated_list.jsx";
import React from "react";
import ReviewPreview from "../common/review-preview.jsx";

export default function ReviewsSearch() {
  const { searchParams } = useParams();

  return (
    <>
      <Typography color={"#fff"} fontStyle={"italic"}>
        Found 15 review(s) matching <strong>'{searchParams}'</strong>:
      </Typography>
      <PaginatedList rowsPerPage={10}>
        {Array.from({ length: 15 }).map((i, idx) => (
          <React.Fragment key={idx}>
            <ReviewPreview
              title={"A film title"}
              releasedYear={2022}
              content={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the" +
                " leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
              username={"bahiepnguyen"}
              fullname={"Nguyen Ba Hiep"}
              ratings={4}
              likeCount={10}
              commentCount={50}
              reviewDate={new Date()}
            />
          </React.Fragment>
        ))}
      </PaginatedList>
    </>
  );
}
