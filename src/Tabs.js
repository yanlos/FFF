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
      let size = res.data.length - 1;
      for(let i = 0; i < res.data.length; i++) {
        //console.log(new Date(res.data[size - i].start_date).toDateString());
        //let endDateSplit = res.data[size - i].split('T');
        discounts.push(<Discount
        user = {res.data[size-i].author}
        title = {res.data[size - i].title}
        description = {res.data[size - i].description}
        start_date = {new Date(res.data[size - i].start_date).toDateString()}
        end_date = {new Date(res.data[size - i].end_date).toDateString()}
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

