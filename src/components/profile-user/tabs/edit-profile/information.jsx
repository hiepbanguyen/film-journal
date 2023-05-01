import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const Information = (props) => {
  let data = {
    userName: "cristiano07",
    fullName: "Cristiano Ronaldo",
    email: "cris07@gmail.com",
    dateOfBirth: "2001-10-27",
    bio: "I'm professional football player! GOAT - the Greatest Of All Times!",
  };
  // Khai bao params
  const [userInput, setUserInput] = useState({
    userName: data.userName || "",
    fullName: data.fullName || "",
    dateOfBirth: data.dateOfBirth || "",
    bio: data.bio || "",
    errors: {
      userName: "",
      fullName: "",
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

  // handle cancel
  const handleCancel = () => {
    setUserInput({
      userName: data.userName || "",
      fullName: data.fullName || "",
      dateOfBirth: data.dateOfBirth || "",
      bio: data.bio || "",
      errors: {
        userName: "",
        fullName: "",
        dateOfBirth: "",
        bio: "",
      },
    });
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
      <Box maxWidth={500}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            defaultValue={data.email}
            disabled
            size="small"
            sx={{
              width: "100%",
              fontSize: { xs: "14px", md: "16px" },
              " input,label,fieldset": {
                borderColor: "#9ab !important",
                color: "#9ab !important",
              },
              " fieldset": { bgcolor: "rgba(255,255,255,0.1)" },
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
          />
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
                borderColor: "#9ab !important",
                color: "#9ab !important",
              },
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
          />
          <TextField
            label="Fullname"
            name="fullName"
            value={userInput.fullName}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            error={!!userInput.errors.fullName}
            helperText={userInput.errors.fullName}
            size="small"
            sx={{
              width: "100%",
              fontSize: { xs: "14px", md: "16px" },
              " input,label,fieldset": {
                borderColor: "#9ab !important",
                color: "#9ab !important",
              },
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
          />
          <TextField
            name="dateOfBirth"
            label="Date of birth"
            type="date"
            value={userInput.dateOfBirth}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            size="small"
            sx={{
              width: "100%",
              fontSize: { xs: "14px", md: "16px" },
              " input,label,fieldset": {
                borderColor: "#9ab !important",
                color: "#9ab !important",
              },
              ".css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
          />
          <TextField
            label="Bio"
            name="bio"
            value={userInput.bio}
            onChange={handleInputChange}
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
              ".css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "#9ab",
              },
            }}
          />
          <Box>
            <Button
              onClick={handleCancel}
              size="medium"
              variant="contained"
              sx={{
                marginRight: "8px",
                backgroundColor: "#d32f2f !important",
                color: "#fff !important",
                ":hover": { backgroundColor: "#d32f2f !important" },
                "&.Mui-disabled": {
                  backgroundColor: "#b42626 !important",
                  color: "#d0d0d0 !important",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              size="medium"
              sx={{
                backgroundColor: "#2e7d32 !important",
                color: "#fff !important",
                ":hover": { backgroundColor: "#2e7d32 !important" },
                "&.Mui-disabled": {
                  backgroundColor: "#2a692d !important",
                  color: "#d0d0d0 !important",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
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
