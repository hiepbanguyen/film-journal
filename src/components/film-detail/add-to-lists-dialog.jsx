import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Checkbox, FormControlLabel, FormGroup, List, ListItem, Typography } from "@mui/material";

const lists = [
  { title: "My cousin vinny", private: true, filmsCount: 20 },
  { title: "My fasfcsf vinny", private: false, filmsCount: 20 },
  { title: "My fasafsca vinnyMy fasafsca vinnyMy fasafsca vinnyMy fasafsca vinny", private: true, filmsCount: 20 },
  { title: "My fasfsdcas", private: false, filmsCount: 20 },
  { title: "fasfdcsadf vinny", private: false, filmsCount: 20 },
  { title: "rhyrrbgvr vinny", private: true, filmsCount: 20 },
  { title: "My fasafsca vinny", private: true, filmsCount: 20 },
  { title: "My fasfsdcas", private: false, filmsCount: 20 },
  { title: "fasfdcsadf vinny", private: false, filmsCount: 20 },
  { title: "rhyrrbgvr vinny", private: true, filmsCount: 20 },
];

export default function AddToListsDialog(props) {
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
        <DialogTitle sx={{ color: "#000", fontSize: 25 }}>
          {"Add "}
          <strong>{"Movie Title"}</strong>
          {" to lists"}
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <List sx={{ maxHeight: 400 }} dense>
            {lists.map((i, idx) => (
              <ListItem key={idx} sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box flex={1} display={"flex"} alignItems={"center"}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={i.title}
                      sx={{
                        mr: 1,
                        maxWidth: { xs: 270, sm: 470 },
                        "& .MuiFormControlLabel-label": {
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        },
                      }}
                    />
                  </FormGroup>
                  {/*{i.private ? (*/}
                  {/*  <Chip*/}
                  {/*    label={"Private"}*/}
                  {/*    sx={{ height: 25, fontSize: 12, bgcolor: "rgba(0,0,0,0.5)", color: "#fff" }}*/}
                  {/*  />*/}
                  {/*) : (*/}
                  {/*  <Chip label={"Public"} sx={{ height: 25, fontSize: 12, bgcolor: "#ffd8a8", color: "#000" }} />*/}
                  {/*)}*/}
                </Box>
                <Typography>
                  {i.filmsCount}
                  {" films"}
                </Typography>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "#000", "&:hover": { bgcolor: "rgba(0,0,0,0.1)" } }}>
            Cancel
          </Button>
          <Button onClick={handleClose} variant={"contained"} color={"success"}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
