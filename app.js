var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var pathname = url.parse(req.url, true).pathname;
  console.log("Request for " + pathname + " recevied ");
  fs.readFile(pathname.substr(1), function(err, data){
    if(err){
      console.log(err);
      res.writeHead(404, { 'Content-Type': 'text/html' });
    }else{
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data.toString());
    }
    res.end();
  });
}).listen(8080, '127.0.0.1');
console.log('Node server running on port http://127.0.0.1:8080');

