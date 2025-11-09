// Step 1: Get the size of the square from the command line.
// Example: "node square.js 4" → process.argv[2] will be "4"
const userInput = process.argv[2];

// Step 2: Turn the input into a number.
const size = parseInt(userInput);

// Step 3: Check if the input is a valid number.
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Step 4: Use a loop to print the square.
  for (let i = 0; i < size; i++) {
    // Create a line made of 'X' repeated 'size' times
    let line = "";
    for (let j = 0; j < size; j++) {
      line += "X";
    }

    // Print one line of the square
    console.log(line);
  }
}
