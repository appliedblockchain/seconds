// @flow

const internalStart = require('./internal-start')

function start(cb /*: (t: number, i: number) => any */) {
  const { now } = Date
  return internalStart({ now }, cb)
}

module.exports = start
