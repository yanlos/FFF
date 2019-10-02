import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { sizing } from '@material-ui/system';

import SimpleDiscount from './SimpleDiscount';

// <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>

const drawerWidth = 360;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  list: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  button: {
    margin: theme.spacing(10),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function SidebarLeft() {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
      <div className={classes.toolbar} />
      <PopupState variant="popover" popupId="post-popover">
       {popupState => (
         <div>
           <Button variant="contained"
              color="primary" className={classes.button}
              {...bindTrigger(popupState)}
           >
             Make a Post?
           </Button>
           <Popover
             {...bindPopover(popupState)}
             anchorReference="anchorPosition"
             anchorPosition={{ top: window.innerHeight/2, left: window.innerWidth/2 }}
             anchorOrigin={{
               vertical: 'center',
               horizontal: 'center',
             }}
             transformOrigin={{
               vertical: 'center',
               horizontal: 'center',
             }}
           >
              <SimpleDiscount />
           </Popover>
         </div>
        )}
       </PopupState>
        <Divider />
        <List className={classes.list}>
          {['About Us', 'GitHub', 'Resumes'].map((text, index) => (
            <ListItem button key={text}>

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
