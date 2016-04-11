import React from 'react';
import {render} from 'react-dom';

class Post extends React.Component {
  render () {
    var postNodes = this.props.data.map(function(post) {
      return (
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
      );
    });
    return (
      <div>
        {postNodes}
      </div>
    );
  }
}

class App extends React.Component {
  loadPostsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success(data) {
        this.setState({data: data});
      }.bind(this),
      error(xhr, status, err) {
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  state =  {
    return {data []};
  },
  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval);
  },
  render () {
    return (
      <div>
        <Post data={this.state.data} />
      </div>
    );
  }
}

render(
  <App url="/posts" pollInterval={2000} />,
  document.getElementById('root')
);
