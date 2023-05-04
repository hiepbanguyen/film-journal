import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useAxios from "axios-hooks";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export default function ConfirmDeleteDialog({ type, url }) {
  const [open, setOpen] = React.useState(false);
  const [{}, deleteContent] = useAxios({ url: url, method: "DELETE" }, { manual: true });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteContent()
      .then((res) => {
        enqueueSnackbar(`Delete ${type} successfully`, { variant: "success" });
        setOpen(false);
        navigate("/lists");
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.userMsg, { variant: "error" });
      });
  };

  return (
    <>
      <Button variant={"contained"} color={"error"} onClick={() => setOpen(true)}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color={"#456"}>
            Are you sure you want to delete this {type}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant={"outlined"}
            onClick={() => {
              setOpen(false);
            }}
            sx={{ color: "#1976d2" }}
          >
            No, cancel
          </Button>
          <Button variant={"contained"} onClick={handleDelete} autoFocus>
            Yes, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
