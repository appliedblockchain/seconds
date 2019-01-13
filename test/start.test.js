// @flow

jest.setTimeout(10 * 1000)

const start = require('../start')

const sleep = (t /*: number */) => new Promise(resolve => setTimeout(resolve, t))

// TODO: Run this test in the middle of a second, otherwise there's ~1/1000 chance it can fail.
test('simple', async () => {

  let i = 0

  const at = t => sleep(t * 1000).then(() => i)

  const stop = start(() => {
    if (++i === 3) {
      stop()
    }
  })

  expect(await Promise.all([ 0, 1, 2, 3, 4, 5 ].map(at))).toEqual([
    0, 1, 2, 3, 3, 3
  ])

})
