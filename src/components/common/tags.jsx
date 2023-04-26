import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

const options = [
  "Vue",
  "Angular",
  "a",
  "Vue",
  "Angular",
  "Vue",
  "Angular",
  "Vue",
  "Angular",
  "Vue",
  "Angular",
  "Vue",
  "Angular",
  "a",
  "Vue",
  "Angular",
  "Vue",
  "Angular",
  "Vue",
];

const Tags = () => {
  return (
    <Box display={"flex"} gap={1} flexWrap={"wrap"}>
      {options.map((tag, idx) => (
        <Link key={idx} to={""} style={{ textDecoration: "none" }}>
          <Chip label={tag} sx={{ background: "#456", color: "#9ab" }} clickable />
        </Link>
      ))}
    </Box>
  );
};

export default Tags;
