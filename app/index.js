var React = require('react');
var ReactDOM = require('react-dom');

var Blog = React.createClass({
  render: function() {
    return (
      <div className="blog">
        Hello, I am the blog component!
      </div>
    );
  }
});
ReactDOM.render(
  <Blog />,
  document.getElementById('content')
);
