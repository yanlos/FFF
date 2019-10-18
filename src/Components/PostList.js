import React from 'react';
import axios from 'axios';

export default class PostList extends React.Component {
	state = {
		posts: []
	}

	componentDidMount() {
		
		axios.get("http://127.0.0.1.xip.io:8000/api/posts").then(res=> {
			console.log(res);
			this.setState({posts: res.data});
		});
		
	}

	render() {
		return (
      	<ul>
        	{ this.state.posts.map(post => <li>{post.title}</li>)}
      	</ul>
    	)
	}
}