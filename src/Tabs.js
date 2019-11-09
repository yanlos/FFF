import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';

// import SimpleDiscount from './SimpleDiscount';
import Discount from './Discount';

const discounts = []
axios.get(`http://127.0.0.1:8000/api/posts`).then(res => {
    console.log(res);
    console.log(res.data);
  })

for(let i = 0; i < 10; i++)  discounts.push(<Discount
    user = {res.content.auther} 
    title = {res.content.title}
    description = {res.content.description}
    start_date = {res.content.start_date}
    end_date = {res.content.end_date}
   />)

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Date Ends" {...a11yProps(0)} />
          <Tab label="Date Starts" {...a11yProps(1)} />
          <Tab label="Validity" {...a11yProps(2)} />
          <Tab label="Proximity" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <List className={classes.list}>
          {discounts}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List className={classes.list}>
          {discounts}
        </List>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <List className={classes.list}>
          {discounts}
        </List>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <List className={classes.list}>
          {discounts}
        </List>
      </TabPanel>
    </div>
  );
}
