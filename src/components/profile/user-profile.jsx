import React from "react";
import { styled, makeStyles } from "@mui/material/styles";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Edit, Save } from "@mui/icons-material";

const Root = styled("div")({
  flexGrow: 1,
  padding: 2,
});

const CardContainer = styled(Card)({
  maxWidth: 600,
  margin: "auto",
});

const AvatarImage = styled(Avatar)({
  width: 100,
  height: 100,
  margin: "auto",
});

const BioText = styled(Typography)({
  textAlign: "justify",
});

const EditableBioText = styled("textarea")({
  width: "100%",
  height: 100,
  resize: "none",
});

const Profile = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState("viethoan2k1");
  const [bio, setBio] = React.useState("I am a web developer.");

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <Root>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AvatarImage
                alt="Profile picture"
                src="https://s.ltrbxd.com/static/img/avatar220.1dea069d.png"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <BioText variant="body1">
                {isEditing ? (
                  <EditableBioText
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={5}
                  />
                ) : (
                  bio
                )}
              </BioText>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          {isEditing ? (
            <Button
              variant="contained"
              color="primary"
              startIcon={<Save />}
              onClick={handleSave}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              startIcon={<Edit />}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          )}
        </CardActions>
    </Root>
  );
};
export default Profile;