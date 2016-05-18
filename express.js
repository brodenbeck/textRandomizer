var express = require('express');
var app = express();
var randomText = require('./text');

app.get('/api/random', function(req, res) {
	res.send(randomText.randomizeText());
});

app.get('/api/allText', function(req, res) {
	res.send(randomText.text);
});

var server = app.listen(8888, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("it works");
});