import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PageNotExist = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ display: "flex", gap: 2, flexDirection: "column", alignItems: "center" }}>
      <Typography variant={"h4"} color={"#9ab"}>
        This Page Doesn't Exist
      </Typography>
      <Button variant={"contained"} size={"large"} onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </Container>
  );
};
