// Step 1: Create an array (a list) of sentences.
const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Step 2: Create a variable to hold all sentences together.
// We'll start with an empty string.
let result = "";

// Step 3: Go through each sentence in the array using a for loop.
for (let i = 0; i < languages.length; i++) {
  // Add the current sentence to 'result'
  // and put a new line after it (\n).
  result += languages[i] + "\n";
}

// Step 4: Remove the last extra newline character using trim().
result = result.trim();

// Step 5: Print the final result to the console.
console.log(result);
