const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize object
const myEmitter = new MyEmitter();

// add a listener for the log event
// first arg is what we are listening for, second is a function
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);