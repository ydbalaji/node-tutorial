var express = require('express');
var app = express();
var port = 8080;
var host = '127.0.0.1';

app.get('/', function(err, res){
  res.sendFile(__dirname + "/" + 'index.html');
});

var server = app.listen(port, host, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
