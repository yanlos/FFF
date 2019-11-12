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

  // .then(data => {
  //   for(let i = 0; i < 10; i++) {
  //   discounts.push({
  //       user : data[i].author,
  //       title : data[i].title,
  //       description : data[i].description,
  //       start_date : data[i].start_date,
  //       end_date : data[i].end_date,
  //     })
  //    }
  // })
// console.log(discounts)

// for(let i = 0; i < 10; i++) {
// discounts.push(<Discount
//     user = "Zander"
//     title = "FOOD"
//     description = "Cheap!!"
//     start_date = "NOW"
//     end_date = "NEVER"
//    />)
//  }
const discounts = []

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  // let stuff = {
  //   author : "Zander",
  //   title : "FOOD",
  //   description : "CHEAP!!",
  //   start_date : "NOW",
  //   end_date : "NEVER",
  // }
  // let things = [stuff,stuff];

  function makePosts(data) {
    for(let i = 0; i < data.length; i++) {
    discounts.push(<Discount
        user = {data[i].author}
        title = {data[i].title}
        description = {data[i].description}
        start_date = {data[i].start_date}
        end_date = {data[i].end_date}
       />)
     }
  }
  // makePosts(things);
  axios.get(`http://127.0.0.1:8000/api/posts`).then(res => {
      console.log(res.data);
      makePosts(res.data);
      // return res.data;
  })

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
