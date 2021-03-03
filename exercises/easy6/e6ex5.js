// PROBLEM: 
  // Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that 
  // number. If the argument is a negative number, return it as-is.  

// My first try - didn't really understand math.abs() so too complex
// function negative(num) {
//   if (Math.sign(num) === -1) {
//     return num;
//   } else {
//     return -Math.abs(num);
//   }
// }

// can be refactored
// function negative(num) {
//   return -Math.abs(num);
// }

//  or
// function negative(num) {
//   return Math.abs(num) * -1;
// }

// with ternary:

function negative(num) {
  return num >= 0 ? -num : num;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
console.log(negative(-0));     // -0
console.log(negative(10));     // -0
console.log(negative(-10));     // -0