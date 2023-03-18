import { Grid } from '@mui/material';
import Chip from "@mui/material/Chip";

const SearchTags = ({ options, onSelect }) => {
  const handleSelectTag = (tag) => {
    onSelect(tag);
  };

  return (
    <Grid container spacing={1}>
      {options.map((tag, idx) => (
        <Grid item key={idx}>
          <Chip label={tag} color={"primary"} onClick={() => handleSelectTag(tag)} />
        </Grid>
      ))}
    </Grid>
  );
};

const options = ["Reacttttttttttt", "Angularrrrrrrrrrrrrrrrr", "Vue", "Angular", "a", "Vue", "Angular", "Vue", "Angular", "Vue", "Angular", "Vue", "Angular", "Vue", "Angular", "a", "Vue", "Angular", "Vue", "Angular", "Vue", "Angular", "Vue", "Angular", "Vue", "Angular", "a", "Vue", "Angular", "Vue", "Angular", "Vue"];

const Tags = () => {
  const handleSearch = (tag) => {
    console.log(tag); // In ra tag được chọn
    // Gọi hàm tìm kiếm với keyword là tag
  };

  return (
    <SearchTags options={options} onSelect={handleSearch} />
  );
};

export default Tags;