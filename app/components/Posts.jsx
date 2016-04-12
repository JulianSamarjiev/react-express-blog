import React from 'react';
import {render} from 'react-dom';
import Post from './Post.jsx';

export default class Posts extends React.Component {
  render() {
    let postNodes = this.props.data.map(function(post) {
      return (
        <Post title={post.title} text={post.text} key={post.id} author={post.author}>
        </Post>
      );
    });
    return (
      <div>
        {postNodes}
      </div>
    );
  }
};
