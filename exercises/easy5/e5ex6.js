// easy 5 exercise 6

// PROBLEM:
  // Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.
// EXAMPLES: given
// DATA STRUCTURES: array, numbers
// ALGORITHM:
  // set a result variable to one
  // loop over the array
  // set result to multiply element by the result
  // divide this end result by number of entries
  // convert result to string and round to 3 decimals (toFixed can do both at once, it converts to String and rounds)
  // return result


// My solution that works
// function multiplicativeAverage(arr) {
//   let multTotal = 1;
//   arr.forEach(el => {
//     return multTotal = multTotal * el;
//   })
//   return (multTotal / arr.length).toFixed(3);
// }

// Can also use reduce and make this very concise. Accumulator if it's not set deliberatly is the first value in the array
// User submitted solution
function multiplicativeAverage(arr) {
  return ((arr.reduce((acc, sum) => acc * sum)) / arr.length).toFixed(3);
};



console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"