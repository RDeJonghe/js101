// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

// ALGORITHM
  // create function that takes an array as an argument
  // create multiplied variable equal to reducing the numbers based on multiplication
  // create a results variable equal to multiplied variable divided by arr.length
  // return that with toFixed(3)

const multiplicativeAverage = (arr) => ((arr.reduce((accum, el) => accum *= el, 1)) / arr.length).toFixed(3);

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"