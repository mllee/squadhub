var express = require('express');
var app = express();
var fs = require('fs');
var _ = require("underscore");

var friends = {
    "matt":"free",
    "chris":"sorta",
    "erica":"free",
    "jason":"busy"
}

//fs.writeFile( "friends_list.json", JSON.stringify( friends ), "utf8"); //callback is optional 4th param

// And then, to read it...
//myJson = require("./filename.json");


app.get('/', function (req, res) {
  res.send('Hello Vandy!');
});

//Return JSON of all users
app.get('/allusers', function(req,res) {
    res.send(friends)
});

// Handle GET to fetch user information
app.get('/user/:username', function(req, res) {
    if (friends[req.params.username] != undefined){
        console.log("user found")
        res.send(friends[req.params.username])
    }
    else {
        console.log("not found")
        res.sendStatus(404)
    }
});

app.post('/user/:username/:status', function(req, res) {
    if (friends[req.params.username] != undefined){
        console.log("user found")
        friends[req.params.username] = req.params.status
        res.sendStatus(200)
    }
    else {
        console.log("not found, will create")
        friends[req.params.username] = req.params.status
        res.sendStatus(201)
    }
});

app.get('/user/:username/:status', function(req, res) {
    if (friends[req.params.username] != undefined){
        console.log("user found")
        friends[req.params.username] = req.params.status
        res.sendStatus(200)
    }
    else {
        console.log("not found, will create")
        friends[req.params.username] = req.params.status
        res.sendStatus(201)
    }
});

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
