// PROBLEM:
  // Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.
// EXAMPLES: given
// DATA STRUCTURES: Arrays, numbers
// ALGORITHM:
  // Set a results array
  // Iterate over one of the arrays
  // Since they have the same length you can do a comparison/multiplaction between two arrays
  // Push the multiplication to the results array
  // return results array

// My solution, was able to solve this
// function multiplyList(arr1, arr2) {
//   let results = [];
//   arr1.forEach((el, indx) => {
//     return results.push(el * arr2[indx]);
//   })
//   return results;
// }

// Can also do this using map

const multiplyList = (arr1, arr2) => arr1.map((el, indx) => el * arr2[indx]);

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
