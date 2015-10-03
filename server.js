var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Vandy!');
});

app.get('/user', function (req, res) {
  res.send('You got a user');
});

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
