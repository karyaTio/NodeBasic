var http = require('http');

http.createServer(function(req, res) {

  // Send the Http Header
  // HTTP Status 200 : OK
  // Content-Type : text/plain
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body hello world
  res.end("Hello World");
}).listen(8080);

console.log("Listengin to port 8080");
