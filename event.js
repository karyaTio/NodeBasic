// Import Event Module
var events = require("events");

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
  console.log("Connection successfull.");

  // Fire the data_recieved event;
  eventEmitter.emit('data_recieved');
}

// Bind event and even handler as follows
eventEmitter.on('connection', connectHandler);

// Bind the data_recieved event with the anonymouse function
eventEmitter.on('data_recieved', function(){
  console.log('data recieved successfully.');
});

// Fire the connection events
eventEmitter.emit('connection');

console.log("Program ended.");
