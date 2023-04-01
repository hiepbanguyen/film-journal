import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star.js";

export default function ReviewFilters() {
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const [listYear, setListYear] = useState([
    { label: "Year", value: "" },
    { label: "Upcoming", value: "upcomming" },
    { label: "2020s", value: "2020s" },
    { label: "2010s", value: "2010s" },
    { label: "2000s", value: "2000s" },
    { label: "1990s", value: "1990s" },
  ]);

  const [listRating, setListRating] = useState([
    { label: "Rating", value: "" },
    { label: "5", value: "5" },
    { label: "4.5", value: "4.5" },
    { label: "4", value: "4" },
    { label: "3.5", value: "3.5" },
    { label: "3", value: "3" },
    { label: "2.5", value: "2.5" },
    { label: "2", value: "2" },
    { label: "1.5", value: "1.5" },
    { label: "1", value: "1" },
    { label: "0.5", value: "0.5" },
  ]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleClear = () => {
    setListYear("");
    setGenre("");
  };

  const handleSubmitFormSearch = (event) => {
    event.preventDefault();

    // Router to page '/films/search?filmName=...&year=...&genre=...&rating=...
    let url =
      "/films/search?" + (rating.length > 0 ? "rating=" + rating + "&" : "") + (year.length > 0 ? "year=" + year : "");

    console.log("url", url);
  };

  return (
    <Box display={"flex"}>
      <form onSubmit={handleSubmitFormSearch} style={{ display: "flex" }}>
        <FormControl
          sx={{
            minWidth: 120,
            " fieldset,svg": {
              borderColor: "#9ab",
              color: "#9ab",
            },
            ":hover fieldset,svg": {
              borderColor: "#9ab",
              color: "#9ab",
            },
          }}
          size="small"
        >
          <InputLabel sx={{ color: "#9ab", backgroundColor: "#14181c", padding: "0 8px" }} id="films-search-year-label">
            Sort by
          </InputLabel>
          <Select
            labelId="films-search-year-label"
            id="films-search-year"
            value={year}
            onChange={handleYearChange}
            sx={{ color: "#9ab" }}
          >
            {listYear.map((year, idx) => (
              <MenuItem key={idx} value={year.value}>
                {year.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{
            minWidth: 120,
            " fieldset,svg": {
              borderColor: "#9ab",
              color: "#9ab",
            },
            ":hover fieldset,svg": {
              borderColor: "#9ab",
              color: "#9ab",
            },
          }}
          size="small"
        >
          <InputLabel
            sx={{ color: "#9ab", backgroundColor: "#14181c", padding: "0 8px" }}
            id="films-search-rating-label"
          >
            Rating
          </InputLabel>
          <Select
            labelId="films-search-rating-label"
            id="films-search-rating"
            value={rating}
            onChange={handleRatingChange}
            sx={{ color: "#9ab" }}
          >
            {listRating.map((rating, idx) => (
              <MenuItem key={idx} value={rating.value}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {rating.label}{" "}
                  {rating.value > 0 && <StarIcon sx={{ marginLeft: "4px", fontSize: "22px" }}></StarIcon>}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
      <Box sx={{ display: "flex" }}>
        <Button
          type="clear"
          sx={{
            border: "1px solid #9ab",
            ":hover": { border: "1px solid #9ab" },
          }}
          onClick={handleClear}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#9ab !important",
            color: "#000",
            ":hover": { backgroundColor: "#9ab !important" },
          }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
}
