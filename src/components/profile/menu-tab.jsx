import React from "react";
import { Tabs, Tab, Typography } from "@mui/material";

function MyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      TabIndicatorProps={{ style: { backgroundColor: "#00e054" } }}
    >
      <Tab
        label={
          <Typography variant="body2" sx={{ color: "#00e054", flexGrow: 1 }}>
            Profile
          </Typography>
        }
        sx={{
          color: value === 0 ? "white" : "#00e054",
        }}
      />
      {/* <Tab
        label={
          <Typography variant="body2" sx={{ color: "inherit", flexGrow: 1 }}>
            Profile
          </Typography>
        }
        sx={{
          color: value === 1 ? "white" : "#00e054",
        }}
      />
      <Tab
        label={
          <Typography variant="body2" sx={{ color: "inherit", flexGrow: 1 }}>
            Settings
          </Typography>
        }
        sx={{
          color: value === 2 ? "white" : "#00e054",
        }}
      /> */}
    </Tabs>
  );
}

export default MyTabs;