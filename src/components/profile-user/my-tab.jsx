import React from "react";
import { Tabs, Tab, Typography, Box, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./profile.css";
import { TabProfile } from "./profile-tab-user";

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
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ProfileTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <Box sx={{ width: "100%" }} padding={0}>
      <nav className="profile-navigation">
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
                Activity
              </Typography>
            } {...a11yProps(1)}
          />
        </Tabs>
      </nav>

      <TabPanel value={value} index={0} >
        <TabProfile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        456
      </TabPanel>
    </Box>
  );
}

export default ProfileTab;