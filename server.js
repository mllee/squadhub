var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hey VandyHacks!');
});

app.get('/user', function (req, res) {
  res.send('You got a user');
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
