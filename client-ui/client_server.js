var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var port = process.env.CLIENT_PORT || 5001;
app.use(express.static(__dirname + '/dist/client-ui'));
app.get('/*', function (Request, Response) { return Response.sendFile(path.join(__dirname)); });
var server = http.createServer(app);
server.listen(port, function () { return console.log('UI is running ...'); });
