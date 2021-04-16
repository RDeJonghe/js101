// Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

// You may assume that the argument will always be a positive integer.

// algorithm
// create a function that takes a number
// set an empty array
// while loop num > 0
// unshift num
// num -= 1
// return array
let number = 5;

function sequence(num) {
  let results = [];

  while (num > 0) {
    results.unshift(num);
    num -= 1;
    number -= 1; // this is explicitly reassigning the variable, different than pass by value - my point of confusion
  }
  return results;
}

console.log(number);              // 5
console.log(sequence(number));    // [1, 2, 3, 4, 5]
console.log(number);             // 0
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]
