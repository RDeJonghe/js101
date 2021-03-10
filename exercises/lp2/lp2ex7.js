// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

// can create the sequence in an array and then just sum everything in that array
// think have to use concat (not push)
// can slice arrays! I forgot that.

// function sumOfSums(arr) {
//   let results = [];
//   for (let i = 1; i <= arr.length; i++) {
//     results = results.concat(arr.slice(0, i));
//   }
 
//   return results.reduce((accum, el) => accum + el);
// }


// can do within iteration and just total there with reduce.


// function sumOfSums(arr) {
//   let total = 0;
//   for (let i = 1; i <= arr.length; i++) {
//     total += arr.slice(0, i).reduce((accum, el) => accum + el);
//   }
//   return total;
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


