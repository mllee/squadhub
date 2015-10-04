var express = require('express');
var app = express();
var fs = require('fs');
var _ = require("underscore");

var friends = {
    "Jerry" : {
        "status":"free",
        "lat":36.14,
        "lon":-86.81
    },
    "Chris" : {
        "status":"free",
        "lat":36.14,
        "lon":-86.81
    },
    "Erica" : {
        "status":"sorta",
        "lat":36.14,
        "lon":-86.81

    },
    "Michael": {
        "status":"busy",
        "lat":36.14,
        "lon":-86.81
    },

    "Jason" : {
        "status":"free",
        "lat":36.14,
        "lon":86.81
    }
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

app.delete('/allusers', function(req, res) {
    friends =  {
        "Matt" : {
            "status":"free",
            "lat":36.15,
            "lon":-86.80
        },
        "Danny" : {
            "status":"free",
            "lat":36.15,
            "lon":-86.80
        },
        "Erica" : {
            "status":"sorta",
            "lat":36.15,
            "lon":-86.80

        },
        "Mitchell": {
            "status":"busy",
            "lat":36.15,
            "lon":-86.80
        },
        "Jason" : {
            "status":"free",
            "lat":1,
            "lon":1
        }
    }

    res.sendStatus(204);
})

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

//Makeshift Post
app.get('/user/:username/:status/', function(req, res) {
    if (friends[req.params.username] != undefined){
        console.log("user found")
        friends[req.params.username]["status"]= req.params.status
        res.sendStatus(200)
    }
    else {
        console.log("not found, will create")
        friends[req.params.username] = {
            "status" : "free", //defaults
            "lat":0,
            "lon":0
        }
        friends[req.params.username]["status"] = req.params.status
        res.sendStatus(201)
    }
});

app.get('/user/:username/:status/:lat/:lon', function(req, res) {

    if (friends[req.params.username] != undefined){
        console.log("user found")
        friends[req.params.username]["status"]= req.params.status
        friends[req.params.username]["lat"]= req.params.lat
        friends[req.params.username]["lon"]= req.params.lon
        res.sendStatus(200)
    }
    else {
        console.log("not found, will create")
        friends[req.params.username] = {
            "status" : "free", //defaults
            "lat":0,
            "lon":0
        }
        friends[req.params.username]["status"] = req.params.status
        friends[req.params.username]["lat"]= req.params.lat
        friends[req.params.username]["lon"]= req.params.lon
        res.sendStatus(201)
    }
});

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
