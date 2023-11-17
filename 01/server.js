// Log the global object (the opposite of the frontend JS window object)
    // console.log(global); // prints a lot of info

// import commonJS modules
const os = require('os');
const path = require('path');

console.log(os.type()); // prints Linux
console.log(os.version()); // prints #1 SMP PREEMPT_DYNAMIC Thu Nov  2 19:59:55 UTC 2023
console.log(os.homedir()); // prints /home/amadeja

console.log(__dirname); // prints entire directory
console.log(__filename); // prints directory + file name

console.log(path.dirname(__filename)); // same as console logging __dirname
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.parse(__filename).name); // gets the value of the name property of the __filename object

// importing my own module
const math = require('./math');
// destructure (have to add all functions to use them all in this way)
const { add, subtract, multiply, divide } = require('./math');

console.log(math.divide(2, 3));
console.log(add(2, 3)); // with destructure
console.log(subtract(2, 3)); // with destructure