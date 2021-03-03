// PROBLEM:
  // Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.
  // You may assume that the argument will always be a positive integer.
// EXAMPLES: given
// DATA STRUCTURES: array, numbers
// ALGORITHM:
  // set empty array
  // while loop, number > 0
  // unshift number
  // decrement number
  // return array

function sequence(num) {
  let result = [];
  while (num > 0) {
    result.unshift(num);
    num --;
  }
  return result;
}


console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]