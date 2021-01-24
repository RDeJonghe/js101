// JS101 Exercises Easy1: 1 Isn't it odd

// Put a number in the function, test the number. If the number is odd the output is true. If not, false.
// Argument passed in is a valid integer value, can assume this. Don't have to test for this.
// Use % remainder operator to test if it is odd or even
// Examples, has to work with negative numbers and zero

// Need Math.abs() to convert to a positive number.
/*
function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
*/

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true