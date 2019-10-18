import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import PostList from './Components/PostList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Free Freaking Food
          </Typography>
        </Toolbar>
      </AppBar>
      <PostList />
      <SidebarLeft />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        <b>Vision:</b> <i>Connect students with possible free and
        discounted food in their area through map interfaces and
        peer to peer information feeds.</i>

        </Typography>
        <Typography paragraph>
        <b>Mission:</b> <i>Connect every student’s knowledge of profitable food
        acquirement through pooling of knowledge in a sophisticated
        and easy to use online application.</i>
        </Typography>
      </main>
      <SidebarRight />
      </div>
    );
  }
