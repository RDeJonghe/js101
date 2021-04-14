// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

// ALGORITHM
// create a function that takes an array of numbers as an argument
// create an empty results array
// create a runningTotal variable = 0
// ITERATE OVER THE ARRAY, SETTING THE NEW TOTAL AND PUSHING THE RESULTS
  // create a for loop
  // for each element the total += the new element
  // push this total to the results array
// return results array

// function runningTotal(arr) {
//   let results = [];
//   let runningTotal = 0;

//   for (let i = 0; i < arr.length; i ++) {
//     runningTotal += arr[i];
//     results.push(runningTotal);
//   }
//   return console.log(results);
// }

// trying with reduce

function runningTotal(arr) {
  let addedTotal = 0;
  return arr.reduce((accum, el) => {
    return accum.concat(addedTotal += el);
  }, [])
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []