var http = require('http');
var randomText = require('./text');

function onRequest(request, response) {
	response.writeHead(200, { 'Content-type': 'text/plain' });
	response.write(randomText.randomizeText());
	response.end();
}

http.createServer(onRequest).listen(8888);