// Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

// ALGORITHM
  // create a function that takes an array of numbers
  // set a results variable to empty
  // create a copy of the array - so that the initial array isn't mutated
  // sort the numbers array, this will place the duplicate values next to each other
  // iterate over the ordered array
  // check the value on each iteration compared to the next value,
  // when the match return the variable - set it to results and return

// first solution
// function findDup(arr) {
//   let results;
//   let orderedArr = [...arr].slice().sort(function (a, b) {
//     if (a < b) {
//       return -1;
//     } else if (a > b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })
//   for (let i = 0; i < orderedArr.length; i ++) {
//     if (orderedArr[i] === orderedArr[i + 1]) {
//       results = orderedArr[i];
//       break;
//     }
//   }
//   return results;
// }



console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73