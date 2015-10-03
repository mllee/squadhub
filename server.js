var express = require('express');
var app = express();
var http = require('http')

app.get('/', function (req, res) {
  res.send('Hey VandyHacks!');
});

app.get('/user', function (req, res) {
  res.send('You got a user');
});

var port = process.env.PORT || 8080;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);
