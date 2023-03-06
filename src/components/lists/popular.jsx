import React from "react";
import { styled } from "@mui/material/styles";
import {
    Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { BorderTop } from "@mui/icons-material";

const Root = styled("div")({
  flexGrow: 1,
  padding: 2,
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "initial"
  },
  root: {
    position: 'relative',
    width: '200px',
    height: '300px',
    // overflow: 'hidden',
    borderRadius: '20px',
  },
  image: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  layer1: {
    zIndex: 4,
  },
  layer2: {
    zIndex: 3,
    marginLeft: '30px',
  },
  layer3: {
    zIndex: 2,
    marginLeft: '60px',
  },
  layer4: {
    zIndex: 1,
    marginLeft: '90px',
  },
  layer5: {
    zIndex: 0,
    marginLeft: '120px',
  },
}));

const Popular = () => {
  const [tab, setTab] = React.useState("Collect, curate, and share. Lists are the perfect way to group films.");
  const classes = useStyles();

  return (
    <Root>
      <Container maxWidth="lg">
      <Typography variant="h11" color="#abc">
      POPULAR THIS WEEK
        </Typography>
        <Divider variant="fullWidth" color={"#fff"} />
        <Grid container justifyContent="center" alignItems="center">
      <div className={classes.root}>
        <img src="https://picsum.photos/200" alt="image1" className={`${classes.image} ${classes.layer1}`} />
        <img src="https://picsum.photos/201" alt="image2" className={`${classes.image} ${classes.layer2}`} />
        <img src="https://picsum.photos/202" alt="image3" className={`${classes.image} ${classes.layer3}`} />
        <img src="https://picsum.photos/203" alt="image4" className={`${classes.image} ${classes.layer4}`} />
        <img src="https://picsum.photos/204" alt="image5" className={`${classes.image} ${classes.layer5}`} />
      </div>
    </Grid>
      </Container>
    </Root >
  );
};
export default Popular;