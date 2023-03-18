import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    scrollButtons="auto"
    variant="scrollable"
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
  },
  "& .MuiTabs-indicatorSpan": {
    // maxWidth: 50,
    width: "100%",
    backgroundColor: "#fff",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 400,
  fontSize: 16,
  marginRight: theme.spacing(2),
  color: "#ccc",
  minWidth: 1,
  padding: 0,
  "&.Mui-selected": {
    color: "#fff",
  },
  // '&.Mui-focusVisible': {
  //   backgroundColor: 'rgba(100, 95, 228, 0.32)',
  // },
  "&:hover": {
    color: "#fff",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={2} px={0}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
/*
 * props: {
 *   children, // tabs's content
 *   labels, // tab's labels
 * }
 */
export default function CustomTabs(props) {
  const { children, labels } = props;
  // open tab
  const [openTab, setOpenTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setOpenTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} my={{ xs: 5 }}>
      <Box
        sx={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: 1, display: "flex", justifyContent: "center" }}
      >
        <StyledTabs value={openTab} onChange={handleChange} aria-label="styled tabs example">
          {labels.map((i, idx) => (
            <StyledTab key={idx} label={i} {...a11yProps(idx)} />
          ))}
        </StyledTabs>
      </Box>
      {React.Children.map(children, (child, index) => (
        <TabPanel key={index} index={index} value={openTab}>
          {child}
        </TabPanel>
      ))}
    </Box>
  );
}
