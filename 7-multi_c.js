// Step 1: Get the number you typed after "node fileName.js" in the terminal.
// Example: if you type "node script.js 3", then process.argv[2] will be "3".
//const userInput = process.argv[2];

// Step 2: Turn that text into a number.
// parseInt changes "3" into 3.
//const repeatCount = parseInt(userInput);

// Step 3: Check if the user gave a real number.
//if (isNaN(repeatCount)) {
  // If it's not a number, show an error message.
 // console.log("Missing number of occurrences");
//} else {
  // Step 4: Create an empty string to hold the final message.
  //let message = "";

  // Step 5: Repeat "C is fun" as many times as the number given.
  //for (let i = 0; i < repeatCount; i++) {
  //  message += "C is fun\n"; // Add a new line after each one.
  //}

  // Step 6: Remove the last extra new line and print the result.
 // console.log(message.trim());
//}

// Get the first argument from the command line
const userInput = process.argv[2];

// Convert it to an integer
const x = parseInt(userInput);

// Check if the input is a valid number
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // Initialize an empty string to store all the lines
  let output = "";

  // Loop x times to add "C is fun" followed by a newline
  for (let i = 0; i < x; i++) {
    output += "C is fun\n";
  }

  // Print the final output (remove the last extra newline)
  console.log(output.trim());
}
