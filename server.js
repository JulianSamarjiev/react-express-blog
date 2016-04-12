var express = require('express');
var bodyParser = require('body-parser');
// Remove if not needed
var posts = require('./blog-data.json');
var fs = require('fs');
var path = require('path');
var app = express();

var POSTS_FILE = path.join(__dirname, './blog-data.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./app'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/posts', function (req,res) {
  res.send(posts);
})

app.get('/post/:id', function(req, res) {
  if (posts.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No post found');
  }

  var p = posts[req.params.id];
    res.json(p);
});

app.post('/posts', function(req, res) {
  fs.readFile(POSTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var posts = JSON.parse(data);

    var newPost = {
      id: Date.now(),
      title: req.body.title,
      author: req.body.author,
      text: req.body.text,
    };
    posts.push(newPost);
    fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(posts);
    });
  });
});

app.delete('/post/:id', function(req,res) {
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
