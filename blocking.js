var fs = require('fs');
var data = fs.readFileSync('test.txt');
console.log(data.toString());
console.log('HI');
// Method will be blocked till the read method is not excuted
