import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDropzone } from "react-dropzone";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: "center",
    },
    button: {
        marginTop: "20px",
    },
}));

const AvatarTab = () => {
    const [avatar, setAvatar] = useState(null);
    const classes = useStyles();

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => {
            setAvatar(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const removeAvatar = () => {
        setAvatar(null);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <Box>
            <Typography variant="h11" color="#AABBCC">
                Avatar
            </Typography>
            <Box sx={{
                display: "flex", flexDirection: "column", alignItems: "center", border: 1,
                borderColor: "#99AABB", paddingTop: "10px", paddingBottom: "15px", borderRadius: "5px", marginTop: "10px"
            }} className={classes.root}>
                <div {...getRootProps()} style={{ marginBottom: "15px" }}>
                    <Avatar
                        src={avatar}
                        sx={{ width: 250, height: 250, cursor: "pointer" }}
                    />
                    <input {...getInputProps()} />
                </div>
                <div className={classes.root}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="success" className={classes.button}>
                                Save change
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={removeAvatar} color="error" className={classes.button}>
                                Remove avatar
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </Box>
    );
};

export default AvatarTab;