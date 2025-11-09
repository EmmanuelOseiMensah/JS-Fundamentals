// Define the array of required phrases using 'const'.
const languages = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
];

// Initialize an empty string to hold the final output.
const output = "";

// Use the reduce() method to loop through the array and build the single output string.
// reduce() is a type of loop that processes an array and returns a single value.
// It avoids using traditional for or while loops and allows for the single console.log.
const finalOutput = languages.reduce((accumulator, currentValue) => {
    // For every item, join the accumulator (the string built so far)
    // with the current item, followed by a newline character (\n).
    return accumulator + currentValue + '\n';
}, output); // Start the accumulator with the empty 'output' string

// Use the slice(0, -1) method to remove the trailing newline character (\n)
// which was added after the last element.
console.log(finalOutput.slice(0, -1));