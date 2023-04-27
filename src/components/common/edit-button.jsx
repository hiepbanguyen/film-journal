import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";
import UserStore from "../../store/user.store.js";
import { Link, useParams } from "react-router-dom";

export const EditButton = observer(({ link }) => {
  const { username } = useParams();

  return (
    <>
      {UserStore.isLoggedIn && UserStore.user?.UserName === username && (
        <Link to={link ?? ""}>
          <Button variant={"contained"} sx={{ py: 0.5 }}>
            Edit
          </Button>
        </Link>
      )}
    </>
  );
});
