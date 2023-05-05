import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Checkbox, FormControlLabel, FormGroup, List, ListItem, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import UserStore from "../../store/user.store.js";
import { Loading } from "../common/loading";
import { Link } from "react-router-dom";

export default function AddToListsDialog({ filmTitle, releasedYear, children }) {
  const [open, setOpen] = React.useState(false);
  const [{ data, loading }] = useAxios(`Lists/Users?pageSize=9999&pageIndex=1&userName=${UserStore.user.UserName}`);
  const [checkedLists, setCheckLists] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListChecked = (e, listId) => {
    if (e.target.checked) {
      setCheckLists([...checkedLists, listId]);
    } else {
      setCheckLists(checkedLists.filter((i) => i !== listId));
    }
  };

  // console.log(checkedLists);

  const handleAddToLists = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ p: 0, width: "100%", height: "100%" }} onClick={handleClickOpen}>
        {children}
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
        {loading ? (
          <Loading paddingY={10} />
        ) : (
          <>
            <DialogTitle sx={{ color: "#000", fontSize: 25 }}>
              {"Add "}
              <strong>{`${filmTitle} (${releasedYear})`}</strong>
              {" to lists"}
            </DialogTitle>
            <DialogContent sx={{ p: 0 }}>
              {data?.Data?.length > 0 ? (
                <List sx={{ maxHeight: 400 }} dense>
                  {data?.Data?.map((i, idx) => (
                    <ListItem key={idx} sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Box flex={1} display={"flex"} alignItems={"center"}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox onChange={(e) => handleListChecked(e, i?.ListID)} />}
                            label={i?.ListName ?? ""}
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
                      </Box>
                      <Typography>
                        {i?.FilmsCount ?? 0}
                        {" films"}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Box display={"flex"} gap={1} flexDirection={"column"} alignItems={"center"}>
                  <Typography> You don't have any lists</Typography>
                  <Link to={"/lists/new"}>
                    <Button variant={"contained"}>Create a list</Button>
                  </Link>
                </Box>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} sx={{ color: "#000", "&:hover": { bgcolor: "rgba(0,0,0,0.1)" } }}>
                Cancel
              </Button>
              <Button onClick={handleAddToLists} variant={"contained"} color={"success"}>
                Add
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
