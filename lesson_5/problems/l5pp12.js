// Practice Problem 12

// Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

// Problem
  // input: old array
  // output: new array
  // rules: same array structure, only multiples of 3
// examples: given
// data structure: arrays
// algorithm
  // take array and make a copy
  // iterate over the array
  // filter based on %3 === 0
  // return new array
// code
  // make copy with JSON stringify
  // iterate over top level with forEach
  // iterate over inner level with filter
  // if statement to filter on % 3
  // return new array

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let arr2 = arr.map(innerArr => {
  return innerArr.filter(num => {
    return num % 3 === 0;
  })
})

console.log(arr2);




