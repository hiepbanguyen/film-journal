import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";
import UserStore from "../../store/user.store.js";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

export const EditButton = observer(({ username }) => {
  return (
    <>
      {UserStore.isLoggedIn && UserStore.user?.UserName === username && (
        <Link to={"edit"}>
          <Button variant={"contained"} sx={{ py: 0.5, px: 1 }}>
            <EditIcon sx={{ fontSize: 18, mr: 0.5 }} />
            Edit
          </Button>
        </Link>
      )}
    </>
  );
});
