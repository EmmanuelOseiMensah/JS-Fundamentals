const firstInput = process.argv[2];
const secondInput = process.argv[3];
const a = parseInt(firstInput);
const b = parseInt(secondInput);

function add(a, b) {
  return a + b;
}

if (isNaN(a) || isNaN(b)) {
  console.log("Please provide two numbers");
} else {
  console.log(add(a, b));
}

