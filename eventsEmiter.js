var events = require('events');
var eventEmitter = new events.EventEmitter();

// Listener #1
var listener1 = function listener1(){
  console.log('listener1 executed');
}

var listener2 = function listener2(){
  console.log('listener2 executed');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listener1);
// Bind the connection event with the listner2 function
eventEmitter.on('connection', listener2);

var eventListener = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListener + "Listener(s) listening to the connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now");

// Fire the connection events=
eventEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
