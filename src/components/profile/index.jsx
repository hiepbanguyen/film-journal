import React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
} from "@mui/material";
import MyTabs from "./menu-tab";
import Container from "@mui/material/Container";

const Root = styled("div")({
  flexGrow: 1,
  padding: 2,
});

const Settings = () => {
  const [tab, setTab] = React.useState("Account Settings");

  return (
    <Root>
      <Container>
        <Typography variant="h5" color="#AABBCC" marginTop="20px" marginBottom="20px" marginLeft="0.9rem">
          {tab}
        </Typography>
        <MyTabs />
      </Container>
    </Root>
  );
};
export default Settings;