import * as React from "react";
import { Box, Button, Divider, Typography, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Grid from "@mui/material/Grid";

export default function ProfileAddNewListFilm() {
  const [formNewList, setFormNewList] = React.useState({
    name: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formNewList);
  };

    const handleNameChange = (event) => {
      setFormNewList((prev) => ({
        ...prev,
        ['name']: event.target.value
      }))
    };
    const handleDescriptionChange = (event) => {
        setFormNewList((prev) => ({
          ...prev,
          ['description']: event.target.value
        }))
    };
  return (
    <Box sx={{ margin: "24px 0", color: "#9ab" }}>
      <Box sx={{ marginBottom: "24px" }}>
        <Box sx={{ fontSize: "20px" }}>New List</Box>
        <Divider></Divider>
      </Box>
      <Box sx={{ width: "40%" }}>
        <Box
          sx={{
            ".MuiFormControl-root": {
              minHeight: "80px",
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              required
              value={formNewList.name}
              onChange={handleNameChange}
              InputLabelProps={{ required: true }}
              size="small"
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                " input,label,fieldset": {
                  borderColor: "#9ab !important",
                  color: "#9ab !important",
                },
              }}
            />

            <TextField
              label="Description"
              name="description"
              value={formNewList.description}
              onChange={handleDescriptionChange}
              InputLabelProps={{}}
              //   error={!!userInput.errors.bio}
              //   helperText={userInput.errors.bio}
              multiline
              rows={3}
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                height: "128px !Important",
                " textarea,label,fieldset": {
                  borderColor: "#9ab !important",
                  color: "#9ab !important",
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              size="medium"
              sx={{
                backgroundColor: "#2e7d32 !important",
                color: "#fff !important",
                ":hover": { backgroundColor: "#2e7d32 !important" },
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
