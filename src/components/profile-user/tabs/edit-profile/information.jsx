import { Box, Divider, Typography, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";

export const Information = (props) => {
  // Khai bao params
  const [userInput, setUserInput] = useState({
    userName: "",
    fullName: "",
    email: "",
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
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="userName"
              value={userInput.userName}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true, required: true }}
              error={!!userInput.errors.userName}
              helperText={userInput.errors.userName}
              size="small"
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                " input,label,fieldset": {
                  borderColor: "#9ab",
                  color: "#9ab",
                },
              }}
            />
            <TextField
              label="Fullname"
              name="fullName"
              value={userInput.fullName}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true, required: true }}
              error={!!userInput.errors.fullName}
              helperText={userInput.errors.fullName}
              size="small"
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                " input,label,fieldset": {
                  borderColor: "#9ab",
                  color: "#9ab",
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              value={userInput.email}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true, required: true }}
              error={!!userInput.errors.email}
              helperText={userInput.errors.email}
              size="small"
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                " input,label,fieldset": {
                  borderColor: "#9ab",
                  color: "#9ab",
                },
              }}
            />
            <TextField
              name="dateOfBirth"
              label="Date of birth"
              type="date"
              value={userInput.dateOfBirth}
              onChange={handleInputChange}
              //   error={!!userInput.errors.email}
              //   helperText={userInput.errors.email}
              InputLabelProps={{ shrink: true, required: true }}
              size="small"
              sx={{
                width: "100%",
                fontSize: { xs: "14px", md: "16px" },
                " input,label,fieldset": {
                  borderColor: "#9ab",
                  color: "#9ab",
                },
              }}
            />
            <TextField
              label="Bio"
              name="bio"
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
                " textarea,label,fieldset": {
                  borderColor: "#9ab",
                  color: "#9ab",
                },
              }}
            />
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
