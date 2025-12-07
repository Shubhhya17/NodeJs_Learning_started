console.log("first");
process.nextTick(() => console.log("2 line nextTick"));

Promise.resolve().then(() => console.log("3 line promise"));
setTimeout(() => console.log("4 line setTimeout"), 0);
setImmediate(() => console.log("5 line setImmediate"));
console.log("last");
// Expected output order:
// first
// last
// 2 line nextTick
// 3 line promise
// 5 line setImmediate
// 4 line setTimeout
// Explanation:
// 1. "first" and "last" are logged immediately as they are synchronous.
// 2. process.nextTick() callbacks are executed after the current operation completes, before any other microtasks.
// 3. Promise callbacks are microtasks and are executed after nextTick callbacks.
// 4. setImmediate() callbacks are executed in the check phase of the event loop, after I/O events.
// 5. setTimeout() with a delay of 0 is executed in the timers phase, which comes after the check phase.
// Note: The exact order of setImmediate and setTimeout may vary based on the environment and timing.