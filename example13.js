const fs = require('fs')

setTimeout(() => console.log('timeout'))
setImmediate(() => console.log('immediate'))

fs.readFile('./events.js', () => console.log('fs'))