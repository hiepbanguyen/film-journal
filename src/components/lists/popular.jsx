import React from "react";
import { styled } from "@mui/material/styles";
import {
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import ListPreview from "../home/list-preview";

const Root = styled("div")({
  flexGrow: 1,
  padding: 2,
});

const useStyles = makeStyles((theme) => ({
  divider: {
    width: '96%',
  },
}));

const Popular = () => {
  const classes = useStyles();

  return (
    <Root>
      <Container maxWidth="lg">
        <Typography variant="h11" color="#abc">
          POPULAR THIS WEEK
        </Typography>
        <Divider className={classes.divider} color={"#fff"} />
        <Grid container spacing={2} color={"#fff"}>
          {Array.from({ length: 3 }).map((i, idx) => (
            <Grid key={idx} item xs={4}>
              <ListPreview
                title={"Lorem Ipsum is simply dummy text"}
                username={"Nguyễn Việt Hoàn"}
                favoriteCount={4}
                commentCount={50}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root >
  );
};
export default Popular;