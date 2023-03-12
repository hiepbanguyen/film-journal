import React from "react";
import { Tabs, Tab, Typography, Box, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Profile from "./profile-tab";
import AvatarTab from "./avatar-tab";

const useStyles = makeStyles(() => ({
  tab: {
    color: '#00e054',
    '&.Mui-selected': {
      color: '#fff',
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function MyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <Box sx={{ width: "100%" }}>
    <Tabs
      value={value}
      onChange={handleChange}
    >
      <Tab
        label={
          <Typography variant="body2" className={classes.tab}>
            Profile
          </Typography>
        } {...a11yProps(0)}
      />
      <Tab
        label={
          <Typography variant="body2" className={classes.tab}>
            Avatar
          </Typography>
        } {...a11yProps(1)}
      />
      {/* <Tab
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
    <TabPanel value={value} index={0}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <AvatarTab />
      </TabPanel>
    </Box>
  );
}

export default MyTabs;