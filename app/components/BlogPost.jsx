import React from 'react';
import {render} from 'react-dom';

class BlogPost extends React.Component {
  render () {
    var postData = this.props.data.map(function(post) {
      return (
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      );
    });
    return (
      <div>
        {postData}
      </div>
    );
  }
}

export default BlogPost;
