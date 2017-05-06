var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var firebase = require("firebase");

app.use(bodyParser.json()); // allows req.body to be parsed in application/json
app.use(bodyParser.urlencoded({'extended':false})); // allows req.body to be parsed in application/x-www-form-urlencoded
app.use(express.static('./src'));

firebase.initializeApp({
  serviceAccount: "src/leccro-b8ffd7e888ac.json",
  databaseURL: "https://project-6304279177436233439.firebaseio.com"
});



app.get('*', function (request, response){
  response.sendFile(path.resolve('./src/index.html'))
})

app.post('/auth/signup', function (req, res){
	var token = firebase.auth().createCustomToken(req.body.uid);
	res.json({token: token});
});

var server = app.listen(8080, function() {
      var port = server.address().port;
      console.log("Started server at port", port);
      console.log("Started at ", new Date().toUTCString());
 });