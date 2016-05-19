var express = require('express');
var app = express();
var randomText = require('./text');

app.get('/random', function(req, res) {
	res.send(randomText.randomizeText());
});

app.use(express.static(__dirname + '/public'));

var server = app.listen(8000, function() {
	var host = server.address().address;
	var port = server.address().port;
});