// Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

// ALGORITHM:
  // set results array as empty
  // set a total variable
  // iterate over given array
  // each iteration set the total as adding the current element
  // push the total to the results array
  // return results array

// function runningTotal(arr) {
//   let results = [];
//   let total = 0;
//   for (let el of arr) {
//     total += el;
//     results.push(total);
//   }
//   return results;
// }

// with map

function runningTotal(arr) {
  let total = 0;
  return arr.map(el => total += el);
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []