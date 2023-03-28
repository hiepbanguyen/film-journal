import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";

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
    <Grid container spacing={1}>
      {options.map((tag, idx) => (
        <Grid item key={idx}>
          <Chip label={tag} sx={{ background: "#456", color: "#9ab" }} clickable />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tags;
