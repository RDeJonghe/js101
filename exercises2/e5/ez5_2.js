// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

// ALGORITHM
// create a function that takes two arrays as arguments
// create a results array that has all values from the first array - can use spread syntax
// iterate over second array
  // if the value doesn't exist in first array push it to the array
// sort results array in ascending order
// return results

// function union(arr1, arr2) {
//   let results = [...arr1];

//   for (let el of arr2) {
//     if (!results.includes(el)) {
//       results.push(el);
//     }
//   }
//   results.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     } else if (a > b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })
//   return results;
// }



console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([29, 10, 8], [10, 8, 1]))