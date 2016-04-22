const partial = (f, l) => (...a) => f.length > a.length
  ? partial(partial.len((...b) => f(...a, ...b), f.length - a.length))
  : f(...a)
partial.len = (f, n) => Object.defineProperty(f, "length", {
  value: n,
  configurable: true
})
