// hello.js
const addon = require('./build/Release/hi');

console.log(addon.hello());
// Prints: 'world'