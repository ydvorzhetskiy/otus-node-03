const EventEmitter = require('events')

class ColdEmitter extends EventEmitter {
    constructor() {
        super();
        this.oldEvents = [];
        this.emit('creating')
    }

    emit(event, ...args) {
        if (this.listeners(event).length === 0) {
            this.oldEvents.push({event, args});
        } else {
            super.emit(event, ...args);
        }
    }

    on(event, listener) {
        super.on(event, listener);
        const oldEvents = this.oldEvents;
        this.oldEvents = [];
        oldEvents.forEach(({event, args}) => this.emit(event, ...args))
    }
}

const a = new ColdEmitter()
a.emit('wait')
a.on('wait', () => console.log('still executed'))
a.on('creating', () => console.log('Creating an instance'))
a.on('other', () => console.log('Other'))
a.emit('other')

