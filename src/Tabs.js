import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Discount from './Discount';


export default class PostList extends React.Component {
  state = {
    discounts: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/posts`).then(res => {
      let discounts = []
      for(let i = 0; i < res.data.length; i++) {
        discounts.push(<Discount
        user = {res.data[i].author}
        title = {res.data[i].title}
        description = {res.data[i].description}
        start_date = {res.data[i].start_date}
        end_date = {res.data[i].end_date}
       />)
     }
      this.setState({discounts});
    })
  }

  render() {
    return (
      <ul>
        {this.state.discounts}
      </ul>
    )
  }
}

