const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('event', (a, b) => { 
  console.log(a, b, this) 
  // prints a b {}
})

myEmitter.emit('event', 'a', 'b')