//const arg1 = process.argv[2];
//const arg2 = process.argv[3];


//if (arg1 === undefined) {
 //   console.log("No argument");
//}else if (arg2 ===undefined) {
 //   console.log(`One argument: ${arg1}`);
//} else {
 //   console.log(`Two arguments:  ${arg1} ${arg2}`);

//}

// Get the first argument from the command line
const firstArg = process.argv[2];

// Check if an argument was given
if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}


