/* Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array. */

// ALGORITHM:
  // set empty first half array,
  // set empty second half array
  // iterate over array stopping at half point, push to first half
  // do same over second half
  // return two halves as nested in an array

// function halvsies(arr) {
//   let first = [];
//   let second = [];
//   let middle = Math.ceil(arr.length / 2);

//   for (let i = 0; i < middle; i++) {
//     first.push(arr[i]);
//   }
//   for (let i = middle; i < arr.length; i++) {
//     second.push(arr[i]);
//   }
//   return [first, second];
// }

// can do with slice instead of push

function halvsies(arr) {
  let middle = Math.ceil(arr.length / 2);
  let first = arr.slice(0, middle);
  let second = arr.slice(middle);
  return [first, second];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]