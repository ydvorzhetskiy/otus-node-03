const timeoutObj = setTimeout(() => {
  console.log('timeout')
}, 1500)

const immediateObj = setImmediate(() => {
  console.log('immediate')
})

const intervalObj = setInterval(() => {
  console.log('interval')
}, 500)

clearImmediate(immediateObj)