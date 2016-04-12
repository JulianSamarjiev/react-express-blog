import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header.jsx';
import Post from './components/Post.jsx';
import Posts from './components/Posts.jsx';
import SubmitPost from './components/SubmitPost.jsx';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  loadPostsFromServer() {
    $.ajax({
      url: '/posts',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  }
  handlePostSubmit(post) {
    $.ajax({
      url: '/posts',
      dataType: 'json',
      contentType: "application/json",
      type: 'POST',
      data: JSON.stringify(post),
      success: function(data) {
        // TODO: Investigate a possible clash between
        // ES6 and jQuery syntax
        // this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/posts', status, err.toString());
      }.bind(this)
    });
  }
  componentDidMount() {
    this.loadPostsFromServer();
  }
  render() {
    return (
      <div>
        <Header />
        <Posts data={this.state.data} />
        <SubmitPost onPostSubmit={this.handlePostSubmit} />
      </div>
    )
  }
};

render(
  <Blog />,
  document.getElementById('root')
);
