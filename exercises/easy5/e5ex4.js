// easy 5 exercise 4

// PROBLEM:
  // Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.
// EXAMPLES: Given
// DATA STRUCTURES: Array, numbers
// ALGORITHM:
  // set empty array
  // iterate over existing array and push numbers into new array
  // for each element, check to see if it already exists in the new array
  // if it already exists, stop and return that number. There is only one duplicate, that is the one.

//  My solution that was able to work.
// function findDup(arr) {
//   let newArr = [];
//   let dupNum;
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     } else {
//       dupNum = arr[i];
//     }
//   }
//   return dupNum;
// }

// Can also do with sort and compare current index to index + 1, if they're the same then that's it.

// function findDup(arr) {
//   let dupNum;
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       dupNum = arr[i];
//       break;
//     }
//   }
//   return dupNum;
// }





console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup(([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58])));    // 73