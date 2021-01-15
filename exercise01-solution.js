// solution by maxim.rameev
const EventEmitter = require('events')

class ColdEmitter extends EventEmitter {
    constructor() {
        super();
        this.events = [];
        this.existedListeners = {};
        this.trigger = this.trigger.bind(this);
        this.on('newListener', (eventName, listener) => {
            if (!this.existedListeners[eventName]) {
                this.existedListeners[eventName] = true;
                this.addListener(eventName, listener);
                this.events.forEach((event) => {
                    if (event === eventName) {
                        //listener();
                        this.emit(event);
                    }
                });
                this.events = [];
            }
        });
    }

    trigger(event) {
        this.events.push(event);
    }
}

const a = new ColdEmitter()

a.trigger('wait')
a.trigger('wait')
a.trigger('wait')

a.on('wait', () => {
    console.log('still executed')
})
