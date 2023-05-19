import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const listYear = [
  { label: "Upcoming", value: -1 },
  { label: "2020s", value: 2020 },
  { label: "2010s", value: 2010 },
  { label: "2000s", value: 2000 },
  { label: "1990s", value: 1990 },
  { label: "1980s", value: 1980 },
  { label: "1970s", value: 1970 },
  { label: "1960s", value: 1960 },
  { label: "1950s", value: 1950 },
  { label: "1940s", value: 1940 },
  { label: "1930s", value: 1930 },
  { label: "1920s", value: 1920 },
  { label: "1910s", value: 1910 },
  { label: "1900s", value: 1900 },
  { label: "1890s", value: 1890 },
  { label: "1880s", value: 1880 },
  { label: "1870s", value: 1870 },
];

const listRating = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];

const listGenre = [
  { label: "Action", value: "action" },
  { label: "Adventure", value: "adventure" },
  { label: "Animation", value: "animation" },
  { label: "Comedy", value: "comedy" },
  { label: "Crime", value: "crime" },
  { label: "Documentary", value: "documentary" },
  { label: "Drama", value: "drama" },
  { label: "Family", value: "family" },
  { label: "Fantasy", value: "fantasy" },
  { label: "History", value: "history" },
  { label: "Horror", value: "horror" },
  { label: "History", value: "history" },
  { label: "Music", value: "music" },
  { label: "Mystery", value: "mystery" },
  { label: "Romance", value: "romance" },
  { label: "Science Fiction", value: "science fiction" },
  { label: "Thriller", value: "thriller" },
  { label: "War", value: "war" },
  { label: "Western", value: "western" },
];
export default function SearchForm({ onSubmit }) {
  const { setValue, handleSubmit, reset } = useForm();
  // Khai bao params
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [filmName, setFilmName] = useState("");

  // Function Handle value
  const handleYearChange = (event) => {
    setValue("year", event.target.value);
    setYear(event.target.value);
  };

  const handleRatingChange = (event) => {
    setValue("rating", event.target.value);
    setRating(event.target.value);
  };

  const handleGenreChange = (event) => {
    setValue("genre", event.target.value);
    setGenre(event.target.value);
  };

  const handleFilmNameChange = (event) => {
    setValue("filmName", event.target.value);
    setFilmName(event.target.value);
  };

  // Clear form
  const handleClear = () => {
    reset();
    setYear("");
    setGenre("");
    setRating("");
    setFilmName("");
  };

  return (
    <Box className="search-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={"flex"} flexWrap={"wrap"} gap={1}>
          <FormControl
            sx={{
              minWidth: 90,
              flex: 1,
              height: "40px",
            }}
            size="small"
          >
            <InputLabel
              sx={{
                color: "#9ab",
                fontSize: { xs: "14px", md: "16px" },
                backgroundColor: "#14181c",
                padding: "0 8px",
              }}
              id="search-year-label"
            >
              Year
            </InputLabel>
            <Select
              labelId="search-year-label"
              id="search-year"
              value={year}
              onChange={handleYearChange}
              sx={{ color: "#9ab", fontSize: { xs: "14px", md: "16px" } }}
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
              minWidth: 100,
              flex: 1,
            }}
            size="small"
          >
            <InputLabel
              sx={{
                color: "#9ab",
                fontSize: { xs: "14px", md: "16px" },
                backgroundColor: "#14181c",
                padding: "0 8px",
              }}
              id="search-rating-label"
            >
              Rating
            </InputLabel>
            <Select
              labelId="search-rating-label"
              id="search-rating"
              value={rating}
              onChange={handleRatingChange}
              sx={{ color: "#9ab", fontSize: { xs: "14px", md: "16px" } }}
            >
              {listRating.map((rating, idx) => (
                <MenuItem key={idx} value={rating.value}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>{rating.label}</Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{
              minWidth: 100,
              flex: 1,
            }}
            size="small"
          >
            <InputLabel
              sx={{
                color: "#9ab",
                fontSize: { xs: "14px", md: "16px" },
                backgroundColor: "#14181c",
                padding: "0 8px",
              }}
              id="search-genre-label"
            >
              Genre
            </InputLabel>
            <Select
              labelId="search-genre-label"
              id="search-genre"
              value={genre}
              onChange={handleGenreChange}
              sx={{ color: "#9ab", fontSize: { xs: "14px", md: "16px" } }}
            >
              {listGenre.map((genre, idx) => (
                <MenuItem key={idx} value={genre.value}>
                  {genre.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="film-name-search"
            label="Find a film..."
            variant="outlined"
            value={filmName}
            onChange={handleFilmNameChange}
            size="small"
            sx={{
              minWidth: 200,
              flex: 3,
              fontSize: { xs: "14px", md: "16px" },
              " input,label,fieldset": {
                borderColor: "#9ab",
                color: "#9ab",
              },
            }}
          />
          <Box sx={{ display: { xs: "block", md: "inline-block" } }}>
            <Button
              size="medium"
              sx={{
                border: "1px solid #9ab",
                marginRight: "8px",
                ":hover": { border: "1px solid #9ab" },
              }}
              onClick={handleClear}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              type="submit"
              size="medium"
              sx={{
                backgroundColor: "#9ab !important",
                color: "#000",
                ":hover": { backgroundColor: "#9ab !important" },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
