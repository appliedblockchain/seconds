## Summary

Works similar to `setInterval(cb, 1000)`, but doesn't diverge. `setInterval` diverges quite quickly loosing seconds.

Snaps to beginning of a second on system's clock.

Calls are protected against clock changes, ie. callback is guaranteed to be called between 0 - 1000 ms on
every tick.

Errors thrown in callback are not handled and don't affect interval - it'll continue to tick.

Async callbacks don't affect ticking, ie. if previous tick hasn't finished, new one will be scheduled as normal.

Async errors are not handled as well and won't affect the ticker.

## Usage

```js
const start = require('@appliedblockchain/seconds')
const stop = start((t, i) => {
  console.log(t, Date.now(), i)
  if (i === 10) {
    stop()
  }
})

// 1547223508000 1547223508558 0
// 1547223509000 1547223509004 1
// 1547223510000 1547223510004 2
// 1547223511000 1547223511004 3
// 1547223512000 1547223512004 4
// 1547223513000 1547223513002 5
// 1547223514000 1547223514004 6
// 1547223515000 1547223515003 7
// 1547223516000 1547223516004 8
// 1547223517000 1547223517001 9
// 1547223518000 1547223518004 10
```
