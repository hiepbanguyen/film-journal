import { Box, Divider, Typography, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";

export const Information = (props) => {
  // Khai bao params
  const [userInput, setUserInput] = useState({
    userName: "cristiano07",
    fullName: "",
    email: "cris07@gmail.com",
    dateOfBirth: "",
    bio: "",
    errors: {
      userName: "",
      fullName: "",
      email: "",
      dateOfBirth: "",
      bio: "",
    },
  });

  const [edit, setEdit] = useState(false);

  //   handle Input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  //   handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);

    if (validateInput()) {
      console.log(userInput);
    }
  };

  //   Validate input
  const validateInput = () => {
    let errors = {};
    let isValid = true;

    if (userInput.userName.trim() === "") {
      errors.userName = "Username is required";
      isValid = false;
    }

    if (userInput.fullName.trim() === "") {
      errors.fullName = "Full name is required";
      isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(userInput.fullName)) {
      errors.fullName = "Full name should contain only alphabets and spaces";
      isValid = false;
    } else if (/\d/.test(userInput.fullName)) {
      errors.fullName = "Full name should not contain numbers";
      isValid = false;
    }

    if (userInput.email.trim() === "") {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userInput.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    // if (userInput.dateOfBirth.trim() === "") {
    //   errors.email = "Email is required";
    //   isValid = false;
    // } else if (!/\S+@\S+\.\S+/.test(userInput.email)) {
    //   errors.email = "Email is invalid";
    //   isValid = false;
    // }

    setUserInput((prevState) => ({
      ...prevState,
      errors: errors,
    }));

    return isValid;
  };

  return (
    <Box
      sx={{
        ".MuiFormControl-root": {
          height: "80px",
        },
      }}
    >
      <Grid container columns={12}>
        <Grid item xs={12} sm={5}>
          <Box sx={{marginBottom: '20px'}}>
            <Button
              variant="contained"
              size="medium"
              disabled={edit}
              sx={{
                backgroundColor: "#9ab !important",
                color: "#000",
                ":hover": { backgroundColor: "#9ab !important" },
              }}
              onClick={() => setEdit(true)}
            >
              Edit
            </Button>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="userName"
              disabled={!edit}
              value={userInput.userName}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true, required: true }}
              error={!!userInput.errors.userName}
              helperText={userInput.errors.userName}
              size="small"
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                " input,label,fieldset,.Mui-disabled": {
                  borderColor: "#9ab !important",
                  color: "#9ab !important",
                  "-webkit-text-fill-color": "#9ab",
                },
              }}
            />
            <TextField
              label="Fullname"
              name="fullName"
              disabled={!edit}
              value={userInput.fullName}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true, required: true }}
              error={!!userInput.errors.fullName}
              helperText={userInput.errors.fullName}
              size="small"
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                " input,label,fieldset,.Mui-disabled": {
                  borderColor: "#9ab !important",
                  color: "#9ab !important",
                  "-webkit-text-fill-color": "#9ab",
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              disabled={!edit}
              value={userInput.email}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true, required: true }}
              error={!!userInput.errors.email}
              helperText={userInput.errors.email}
              size="small"
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                " input,label,fieldset,.Mui-disabled": {
                  borderColor: "#9ab !important",
                  color: "#9ab !important",
                  "-webkit-text-fill-color": "#9ab",
                },
              }}
            />
            <TextField
              name="dateOfBirth"
              label="Date of birth"
              type="date"
              disabled={!edit}
              value={userInput.dateOfBirth}
              onChange={handleInputChange}
              //   error={!!userInput.errors.email}
              //   helperText={userInput.errors.email}
              InputLabelProps={{ shrink: true, required: true }}
              size="small"
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                " input,label,fieldset,.Mui-disabled": {
                  borderColor: "#9ab !important",
                  color: "#9ab !important",
                  "-webkit-text-fill-color": "#9ab",
                },
              }}
            />
            <TextField
              label="Bio"
              name="bio"
              disabled={!edit}
              value={userInput.bio}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true, required: true }}
              //   error={!!userInput.errors.bio}
              //   helperText={userInput.errors.bio}
              multiline
              rows={3}
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                height: "128px !Important",
                " textarea,label,fieldset,.Mui-disabled": {
                  borderColor: "#9ab !important",
                  color: "#9ab !important",
                  "-webkit-text-fill-color": "#9ab",
                },
              }}
            />
            <Box>
              <Button
                type="clear"
                size="medium"
                sx={{
                  border: "1px solid #9ab",
                  marginRight: "8px",
                  ":hover": { border: "1px solid #9ab" },
                }}
                onClick={handleCancel}
              >
                Cancel
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
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <style>
        {`
          input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(0.65);
          }
        `}
      </style>
    </Box>
  );
};
