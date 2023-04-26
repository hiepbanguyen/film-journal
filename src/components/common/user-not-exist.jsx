import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const UserNotExist = () => {
  return (
    <Container sx={{ display: "flex", gap: 2, flexDirection: "column", alignItems: "center" }}>
      <Typography variant={"h4"} color={"#9ab"}>
        User Doesn't Exist
      </Typography>
      <Link to={"/"}>
        <Button variant={"contained"} size={"large"}>
          Go Home
        </Button>
      </Link>
    </Container>
  );
};
