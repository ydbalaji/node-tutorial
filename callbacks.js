
var fs = require('fs');
fs.readFile('test.txt', function (err, data) {
  if(err){
    console.log(err);
  }
  console.log('Display the file system content after 3 Sec');
  setTimeout(()=>{
    console.log(data.toString());
  },3000);
});
console.log('It will excute first!...');

