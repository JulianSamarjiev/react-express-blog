import React from 'react';
import {render} from 'react-dom';

export default class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {author: '', title: '', text: ''};
  }
  handleAuthorChange(e) {
    e.preventDefault();
    this.setState({author: e.target.value});
  }
  handleTitleChange(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }
  handleTextChange(e) {
    e.preventDefault();
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let title = this.state.title.trim();
    let text = this.state.text.trim();
    if (!text || !title || !author) {
      return;
    }
    this.props.onPostSubmit({author: author, title: title, text: text});
    this.setState({author: '', title: '', text: ''});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Your title"
          value={this.state.title}
          onChange={this.handleTitleChange.bind(this)}
        />
        <br></br>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange.bind(this)}
        />
        <br></br>
        <textarea
          placeholder="Blog post content"
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
        >
        </textarea>
        <br></br>
        <input type="submit" value="Post" />
      </form>
    )
  }
}
