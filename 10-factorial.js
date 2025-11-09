// Step 1: Get the first command-line argument
const userInput = process.argv[2];

// Step 2: Convert the input to an integer
const number = parseInt(userInput);

// Step 3: Define the recursive factorial function
function factorial(n) {
  // Base case: if n is 0 or 1, the factorial is 1
  if (n <= 1) {
    return 1;
  }

  // Recursive case: n! = n * (n - 1)!
  return n * factorial(n - 1);
}

// Step 4: If the input is not a number, return 1
if (isNaN(number)) {
  console.log(1);
} else {
  // Step 5: Call the function and print the result
  console.log(factorial(number));
}
