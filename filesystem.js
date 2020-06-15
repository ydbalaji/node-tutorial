
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  fs.readFile('test.txt', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});
server.listen(8080, '127.0.0.1', function () {
  console.log('Node server running on port http://127.0.0.1:8080');
});

