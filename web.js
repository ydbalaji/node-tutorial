var http = require('http');

var port = 8080;

var text = 'Hello World!...';

var server = http.createServer(function (req, res) {
  console.log(text);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(text);
});

server.listen(port, '127.0.0.1', function(){
  console.log('Node server running on port http://127.0.0.1:8080');
});

