import React from 'react';
import {render} from 'react-dom';

export default class Post extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <span>By {this.props.author}</span>
        <p>{this.props.text}</p>
        <hr></hr>
      </div>
    );
  }
};
