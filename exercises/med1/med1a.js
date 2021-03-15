//  PROBLEM:
  /* Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

  If the input is not an array, return undefined.
  If the input is an empty array, return an empty array.
  Review the test cases below, then implement the solution accordingly. */
/* Input
an array
Output
a new array, since we can't mutate the original array
Rules
if the input is not an array, return undefined
if the input is an empty array, return []
for a non-empty array, slice off the first element and append it to the end of the array */

// similiar to book solution. Note that the order of the two if statements is important! Error if they are reversed!.
function rotateArray(arr) {
  let results = [];
  if (!Array.isArray(arr)) {
    return undefined;
  }
  if (arr.length === 0) {
    return [];
  } 
 
  return results = arr.slice(1).concat(arr[0]);
}

















// EXAMPLES: given
// DATA STRUCTURES: arrays
// ALGORITHM:
  // Make copy of array with spread syntax
  // unshift the first el and save to a variable
  // push that on the end (can maybe try this in one step.)
  // return new array


// my original attempt: empty array actually has undefined
// function rotateArray(arr) {
//   if (arr === []) {
//     return [];
//   }
//   if (Array.isArray(arr) === false) {
//     return undefined;
//   }
//   let rotatedArr = [...arr];
//   let toRotate = rotatedArr.shift();
//   rotatedArr.push(toRotate);
//   return rotatedArr;
// }

// the book way with slice and concat. Order matters with if statements I think.

// function rotateArray(arr) {
//   if (Array.isArray(arr) === false) {
//     return undefined;
//   }
//   if (arr.length === 0) {
//     return [];
//   }
//   return arr.slice(1).concat(arr[0]);
// }




console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]