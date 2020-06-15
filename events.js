var fs = require('fs');

var event =  require('events') // Import events module

const myEmitter = new event.EventEmitter(); // Creating object of EventEmitter

fs.readFile('test.txt', function (err, data) {
  if (!err){
    console.log(data.toString());
    myEmitter.emit('readfile'); // Emitting event
  }
});

myEmitter.on('readfile', () => {
  console.log('\nRead Event Occurred!..');
});
