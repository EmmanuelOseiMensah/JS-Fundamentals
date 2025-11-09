// Get the first two potential user arguments.
// arg1 will be the first argument, or undefined if missing.
const arg1 = process.argv[2];

// arg2 will be the second argument, or undefined if missing.
const arg2 = process.argv[3];

// Use string concatenation (+) to join arg1, " is ", and arg2.
// When arg1 or arg2 is 'undefined', JavaScript converts it to the string "undefined"
// which matches the required output behavior.
console.log(arg1 + " is " + arg2);
    
