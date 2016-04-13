import React from 'react';
import {render} from 'react-dom';

export default class Post extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <span><i>By {this.props.author}</i></span>
        <p>{this.props.text}</p>
        <hr></hr>
      </div>
    );
  }
};
