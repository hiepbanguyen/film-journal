import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDropzone } from "react-dropzone";
import { Grid, Typography } from "@mui/material";

const AvatarTab = () => {
    const [avatar, setAvatar] = useState(null);

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
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", border: 1,
  borderColor: "#99AABB", paddingTop: "10px", paddingBottom: "15px", borderRadius: "5px", marginTop: "10px" }}>
                <div {...getRootProps()}>
                    <Avatar
                        src={avatar}
                        sx={{ width: 250, height: 250, cursor: "pointer" }}
                    />
                    <input {...getInputProps()} />
                </div>
                <Grid container justifyContent="space-between" width='50%' marginTop='50px'>
                    <Button variant="contained" color="success">Save change</Button>
                    <Button variant="contained" onClick={removeAvatar} color="error">Remove avatar</Button>
                </Grid>
            </Box>
        </Box>
    );
};

export default AvatarTab;