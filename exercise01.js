// ?

const a = new ColdEmitter()

a.trigger('wait')

a.on('wait', () => {
  console.log('still executed')
})