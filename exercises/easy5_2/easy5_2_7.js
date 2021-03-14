/* Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements. */

// ALGORITHM
  // set empty results array
  // iterate over first array
  // push to results the number by multiplying at the index of each array

// function multiplyList(arr1, arr2) {
//   let results = [];
//   for (let i = 0; i < arr1.length; i++) {
//     results.push(arr1[i] * arr2[i]);
//   }
//   return results;
// }

// with Map 

function multiplyList(arr1, arr2) {
  return arr1.map((_, indx) => arr1[indx] * arr2[indx]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]