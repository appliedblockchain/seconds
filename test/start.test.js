// @flow

jest.setTimeout(10 * 1000)

const start = require('../start')

const sleep = (t /*: number */) => new Promise(resolve => setTimeout(resolve, t))

test('simple', async () => {

  let i = 0
  const stop = start(() => {
    if (++i === 3) {
      stop()
    }
  })

  await sleep(3.5 * 1000)
  expect(i).toBe(3)

  await sleep(2 * 1000)
  expect(i).toBe(3)

})
