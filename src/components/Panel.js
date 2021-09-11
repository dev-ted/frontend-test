import React, { useState } from "react";

import PropTypes from "prop-types";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../sass/global.scss";
import CardLarge from "../utils/CardLarge";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
   
    
  },
 
}));

function Panel({dashboardData}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${classes.root} tabpanel`}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="tabs"
          centered
        >
          <Tab label="Balances" {...a11yProps(0)} />
          <Tab label="Transactions" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <div className="panel">
            <CardLarge balance
            title = "Balances"
            heading1 = "Points Balance"
            points = {dashboardData.balances.points_balance}
            heading2 = "Points Currency"
            currency = {dashboardData.balances.points_currency}/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="panel">
        <CardLarge transactions
            title = "Transactions"
            heading1 = "Earn"
            points = {dashboardData.transactions.earn.points}
            earn = {dashboardData.transactions.earn.earn.currency}
            heading2 = "Redeem"
            redeem = {dashboardData.transactions.redeem.points}
            currency = {dashboardData.transactions.redeem.currency}/>
        </div>
      </TabPanel>
     
    </div>
  );
}

export default Panel;
