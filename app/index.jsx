import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header.jsx';

class BlogPost extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <p>React Express App</p>
      </div>
    );
  }
}

render(<BlogPost/>, document.getElementById('content'));
