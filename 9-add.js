//const firstInput = process.argv[2];
//const secondInput = process.argv[3];
//const a = parseInt(firstInput);
//const b = parseInt(secondInput);

//function add(a, b) {
//  return a + b;
//}

//if (isNaN(a) || isNaN(b)) {
//  console.log("Please provide two numbers");
//} else {
//  console.log(add(a, b));
//}

// Get the first and second arguments from the command line
const firstArg = process.argv[2];
const secondArg = process.argv[3];

// Convert them to integers
const a = parseInt(firstArg);
const b = parseInt(secondArg);

// Define the add function
function add(a, b) {
  return a + b;
}

// Print the result of the addition
console.log(add(a, b));


