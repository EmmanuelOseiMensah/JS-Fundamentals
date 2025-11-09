// Get the first user-supplied argument (process.argv[2]).
const argumentValue = process.argv[2];

// Use parseInt to attempt to convert the argument to an integer.
// If argumentValue is undefined (no arguments passed), parseInt returns NaN.
// If argumentValue is a non-numeric string (e.g., "hello"), parseInt returns NaN.
const convertedNumber = parseInt(argumentValue);

// Use isNaN() to check if the conversion failed.
if (isNaN(convertedNumber)) {
    // If isNaN is true, the argument could not be converted to a valid number.
    console.log("Not a number");
} else {
    // If isNaN is false, the argument was successfully converted.
    // We print the exact required format using the converted integer value.
    console.log(`My number: ${convertedNumber}`);
}