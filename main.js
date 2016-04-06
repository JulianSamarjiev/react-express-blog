var BlogPost = React.createClass({
  render: function() {
    return (
      <div className="blog-post">
        This is a single blog post
      </div>
    );
  }
});

ReactDOM.render(
  <BlogPost />,
  document.getElementById('content')
);
