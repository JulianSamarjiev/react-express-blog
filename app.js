var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/static', express.static('public'));

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
