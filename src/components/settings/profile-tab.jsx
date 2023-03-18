import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  TextField,
  Grid,
  Typography,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  Autocomplete,
} from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const Root = styled("div")({
  flexGrow: 1,
  padding: 0,
  margin: 0,
});

const useStyles = makeStyles({
  root: {
    "& .MuiTextField-root input": {
      color: "#89a",
      backgroundColor: "#15272e",
    },
    "& label": {
      color: "#889799",
    },
    "&.Mui-focused": {
      backgroundColor: "white",
      // '& input': {
      //   color: theme.palette.common.white,
      // },
    },
  },
  media: {
    height: 140, // chiều cao cố định của ảnh
    width: "100%", // chiều rộng tối đa của ảnh
    backgroundSize: "cover", // phủ đầy khu vực của component CardMedia
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    minHeight: "300px",
  },
});

const userImages = [
  "https://picsum.photos/200",
  "https://picsum.photos/201",
  "https://picsum.photos/202",
  "https://picsum.photos/203",
];

const top100Films = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const Profile = () => {
  const classes = useStyles();
  const [showPopup, setShowPopup] = useState(false);
  const handleCardClick = () => {
    setShowPopup(true);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <Root>
      <Container maxWidth="lg">
        <Typography variant="h11" color="#AABBCC">
          Profile
        </Typography>
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12} md={6} marginTop="25px">
            <TextField label="Username" variant="outlined" fullWidth />
            <Grid container spacing={2} marginTop="15px">
              <Grid item xs={6}>
                <TextField label="Full Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Email" variant="outlined" fullWidth />
              </Grid>
            </Grid>
            <Grid item xs={12} marginTop="15px">
              <TextField label="Location" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} marginTop="15px">
              <TextField label="Bio" variant="outlined" fullWidth />
            </Grid>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h10" color="#fff">
              Favorite Films
            </Typography>
            <Grid container spacing={2}>
              {userImages.map((image, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={image}
                      className={classes.media}
                      sx={{ cursor: "pointer" }}
                      onClick={handleCardClick}
                    />
                  </Card>
                  <Dialog
                    open={showPopup}
                    onClose={handlePopupClose}
                    PaperProps={{ style: { backgroundColor: "#445566", width: 600, maxWidth: "none" } }}
                  >
                    <DialogTitle color="white">PICK A FAVORITE FILM</DialogTitle>
                    <DialogContent>
                      <Autocomplete
                        className={classes.content}
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                      />
                    </DialogContent>
                  </Dialog>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} marginTop="20px" textAlign="center">
            <Button variant="contained" color="success">
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};
export default Profile;