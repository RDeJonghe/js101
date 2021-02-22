// Practice Problem 13
// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// Since 1 + 3 < 1 + 7 < 1 + 5+ 3, the sorted array should look like this:
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

// Problem:
  // Input: nested array,
  // Output: sorted nested array, same array
  // Rules: can only consider odd numbers, sort each inner array based off of sum of odd numbers, ascending

// Algorithm:
  // Have iterate over nested arrays
  // Sum only the odd numbers
  // Order inner arrays based on total of sum

// Code
  // can use reduce to perform sum?


let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1).reduce((accum, el) => accum + el);
  let oddSumB = b.filter(num => num % 2 === 1).reduce((accum, el) => accum + el);

  return oddSumA - oddSumB;
})

console.log(arr);

