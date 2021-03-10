/* Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.*/

function multiplyAllPairs(arr1, arr2) {
  let results = [];
  for (let i = 0; i < arr1.length; i ++) {
    for (let j = 0; j < arr2.length; j++) {
      results.push(arr1[i] * arr2[j]);
    }
  }
  return results.sort((a, b) => a - b);
}

// refactor can be done with forEach nested.

// function multiplyAllPairs(arr1, arr2) {
//   let results = [];
//   arr1.forEach(el1 => {
//     arr2.forEach(el2 => {
//       results.push(el1 * el2);
//     })
//   })
//   return results.sort((a, b) => a - b);
// }

// user submitted solution: can do with map, don't need to nest.

// function multiplyAllPairs(arr1, arr2) {
//   let results = [];
//   for (let i = 0; i < arr1.length; i++) {
//     results.push(arr2.map(el => el * arr1[i]));
//   }
//   return results.flat().sort((a, b) => a - b);
// }




console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]