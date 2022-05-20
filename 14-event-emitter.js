// Event Emitter
const EventEmitter = require('events')

const customEmitter = new EventEmitter() // creating new instance of EventEmitter

// on - listen for an event
// emit - emit an event
// emit must occur after on due to linear processing

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here `)
})

customEmitter.emit('response', 'john', 34)