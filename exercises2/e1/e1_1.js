// EASY 1 EXERCISE 1

// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

// ALGORITHM
  // Take number
  // Make it be a positive number - this is what will be checked
    // can use built in method math.abs()
  // Check to see if it is odd or even - return true for odd

// my solution
// function isOdd(num) {
//   return Math.abs(num) % 2 === 1;
// }

// alternative without math.abs
// function isOdd(num) {
//   return num % 2 === 1 || num % 2 === -1;
// }

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true