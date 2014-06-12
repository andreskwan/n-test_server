//ch5 - event emitter
var EventEmitter = require('events').EventEmitter;
var a			 = new EventEmitter;

a.on('event', function (){
	console.log('event called');
});

//calls the event in the same file
a.emit('event');