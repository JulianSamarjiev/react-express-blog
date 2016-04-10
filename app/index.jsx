import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header.jsx';
import BlogPost from './components/BlogPost.jsx';
import NewBlogPost from './components/NewBlogPost.jsx';

var data = [
  {
    "id" : 1,
    "title" : "Batman",
    "text" : "More Batman"
  },
  {
    "id" : 2,
    "title" : "Superman",
    "text" : "More Superman"
  }
]

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <BlogPost data={this.props.data} />
        <NewBlogPost />
      </div>
    );
  }
}

render(<App data={data} />, document.getElementById('content'));
