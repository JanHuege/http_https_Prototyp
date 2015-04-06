// curl -k https://localhost:443/
var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('mykey.pem'),
  cert: fs.readFileSync('mykey-cert.pem')
};

// Create a service (the app object is just a callback).
var app = express();

// Create an HTTP service.
http.createServer(function(req, res){
	res.writeHead(200)
	res.end("Hello world\n Http")
}).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n Https");
}).listen(443);