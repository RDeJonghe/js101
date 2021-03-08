
// PROBLEM:
  // Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.
  // You may assume that neither argument will be an empty array.
// EXAMPLES: given
// DATA STRUCTURES: array, numbers
// ALGORITHM:
  // set an empty result array
  // need to loop over both arrays and multiply numbers
  // nested loop may do this
  // push results to new array
  // return new array


function multiplyAllPairs(arr1, arr2) {
  let results = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      results.push(arr1[i] * arr2[j]);
    }
  }
  return results.sort((a, b) => a - b);
}





  console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
  console.log(multiplyAllPairs([2, 3, 4], [4, 5]));

  // My original solution works well.

// function multiplyAllPairs(arr1, arr2) {
//   let results = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       results.push(arr1[i] * arr2[j]);
//     }
//   }
//   return results.sort((a, b) => a - b);
// }

// Refactor with .forEach

// function multiplyAllPairs(arr1, arr2) {
//   let results = [];

//   arr1.forEach(numArr1 => {
//     arr2.forEach(numArr2 => {
//       results.push(numArr1 * numArr2);
//     })
//   })
//   return results.sort((a, b) => a - b);
// }


// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
// console.log(multiplyAllPairs([2, 3, 4], [4, 5]));