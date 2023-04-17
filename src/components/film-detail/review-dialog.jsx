import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Checkbox, FormControlLabel, FormGroup, Rating, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateField } from "@mui/x-date-pickers/DateField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import FavoriteIcon from "@mui/icons-material/Favorite.js";

export default function ReviewDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ p: 0, width: "100%", height: "100%" }} onClick={handleClickOpen}>
        {props.children}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={(theme) => ({
          "& .MuiDialog-paper ": {
            m: 0,
            width: 600,
            maxHeight: "90vh",
            [theme.breakpoints.down("sm")]: {
              width: "100vw",
              minHeight: "100vh",
            },
          },
        })}
      >
        <DialogTitle sx={{ color: "#9ab", fontSize: 30 }}>
          <strong style={{ color: "#678" }}>{"Movie Title"}</strong> <span style={{ fontSize: 27 }}>{"2022"}</span>
        </DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateField variant={"standard"} label="Watched On" value={moment(new Date())} format={"YYYY/MM/DD"} />
          </LocalizationProvider>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            multiline
            rows={8}
            variant="outlined"
            placeholder={"Add a review..."}
          />
          <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={{ sm: 15 }} alignItems={"flex-start"}>
            {/*<Box display={"flex"} alignItems={"flex-end"} gap={2}>*/}
            {/*  <TextField label="Tags" variant={"standard"} />*/}
            {/*  <Button variant={"contained"}>Add</Button>*/}
            {/*</Box>*/}
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Contain spoilers" />
            </FormGroup>
            <Box display={"flex"} gap={5} alignItems={"flex-start"}>
              <Box>
                <Typography>Rating</Typography>
                <Rating size={"large"} />
              </Box>
              <Box>
                <Typography>Like</Typography>
                <FavoriteIcon
                  sx={{
                    fontSize: 30,
                    color: "#bcd",
                    "& :hover": {
                      cursor: "pointer",
                      color: "rgba(255, 89, 89, 1)",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "#000", "&:hover": { bgcolor: "rgba(0,0,0,0.1)" } }}>
            Cancel
          </Button>
          <Button onClick={handleClose} variant={"contained"}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
