var fs = require('fs');
fs.readFile('test.txt', function(err, data){
  if(!err)
  console.log(data.toString());
});
console.log('HI');
// More method will excuted asyn
