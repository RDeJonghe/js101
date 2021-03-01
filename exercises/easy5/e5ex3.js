// easy 5 ex 3

// PROBLEM:
  // Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.
// EXAMPLES: given
// DATA STRUCTURES: Array, numbers
// ALGORITHM:
  // take array as argument
  // set new array (possibly 2) to send results to
  // find the middle point of the array
  // iterate over first half and send to one array
  // iterate over second half and send to second array
  // combine these as nested arrays within a bigger array


// Example answer:

// function halvsies(arr) {
//   let middle = Math.ceil(arr.length / 2);
//   let firstHalf = arr.slice(0, middle);
//   let secondHalf = arr.slice(middle);
//   return [firstHalf, secondHalf];
// }
//   console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
//   console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
//   console.log(halvsies([5]));                // [[5], []]
//   console.log(halvsies([]));                 // [[], []]

// similar syntax to example, submitted by user.

// function halvsies(arr) {
//   let results = [[], []];
//   results[0] = arr.slice(0, Math.ceil(arr.length / 2));
//   results[1] = arr.slice(Math.ceil(arr.length / 2));
//   return results;
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

// similar to my initial attempt, but more concise

// function halvsies(arr) {
//   let middle = Math.ceil(arr.length / 2);
//   let firstHalf = [];
//   let secondHalf = [];

//   for (let i = 0; i < middle; i++) {
//     firstHalf.push(arr[i]);
//   }
//   for (let i = middle; i < arr.length; i++) {
//     secondHalf.push(arr[i]);
//   }
//   return [firstHalf, secondHalf];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

// This is my original attempt which works but isn't very concise.
// function halvsies(arr) {
//   let half = Math.ceil((arr.length - 1) / 2);
//   let firstHalf = [];
//   let secondHalf = [];

//   if (arr.length % 2 === 0) {
//     for (let i = 0; i < half; i++) {
//       firstHalf.push(arr[i])
//     }
//     for (let i = half; i < arr.length; i++) {
//       secondHalf.push(arr[i])
//     }
//     return [firstHalf, secondHalf];
//   }

//   if (arr.length % 2 === 1) {
//     for (let i = 0; i <= half; i++) {
//       firstHalf.push(arr[i])
//     }
//     for (let i = half + 1; i < arr.length; i++) {
//       secondHalf.push(arr[i])
//     }
//     return [firstHalf, secondHalf];
//   }
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

