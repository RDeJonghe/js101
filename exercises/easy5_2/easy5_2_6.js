/* Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places. */

// ALGORITHM: 
  // set a result = 1
  // iterate over array
  // result = result * current element


// function multiplicativeAverage(arr) {
//   let result = 1;
//   for (let i = 0; i < arr.length; i++) {
//     result *= arr[i];
//   }
//   return (result / arr.length).toFixed(3);
// }

// with reduce

function multiplicativeAverage(arr) {
  let divisor = arr.length;
  let product = arr.reduce((accum, el) => accum * el, 1);
  return (product / divisor).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

