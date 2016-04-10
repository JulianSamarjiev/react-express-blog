var express = require('express');
var bodyParser = require('body-parser');
var posts = require('./blog-data.json');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./app'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/post/:id', function(req, res) {
  if (posts.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No post found');
  }

  var p = posts.blogPosts[req.params.id];
    res.json(p);
});

app.post('/posts', function(req,res) {
  if (!req.body.hasOwnProperty('title') || !req.body.hasOwnProperty('text')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect');
  }

  var newPost = {
    title : req.body.title,
    text : req.body.text
  };

  blog.push(newPost);
    res.json(true);
});

app.delete('/blog/:id', function(req,res) {
  if (posts.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: No post found.');
  }

  posts.splice(req.params.id, 1);
    res.json(true);
})

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
