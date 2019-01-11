// @flow

const { now } = Date
const { min, max, floor } = Math

function start(cb /*: (t: number, i: number) => any */) {

  let id

  const tick = (i /*: number */) => {
    const t = now()
    const f = floor(t / 1000) * 1000
    const d = max(0, min(1000, 1000 - (t - f)))
    id = setTimeout(() => tick(i + 1), d)
    cb(f, i)
  }

  tick(0)

  const stop = () => clearTimeout(id)

  return stop
}

module.exports = start
