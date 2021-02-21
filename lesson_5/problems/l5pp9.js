// Practice problem 9

// Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.

// Problem
  // input: array
  // output: new array,
  // rules: a) same array structure (nested) b) ascending order
  // questions: old array unchanged - I think yes

// Examples: given
// Data structure: Array

// Algorithm
  // Take the array and get to nested arrays
  // order the nested arrays individually in ascending order
  // return an new array

// Code
  // use spread syntax to create a shallow copy for new array CANT DO THIS, WERE WORKING WITH INNER ARRAY
  // use forEach to get to each nested array (or possibly map) or could use regular loop
  // use sort to sort each individual array
  // ascending order so syntax with sort is simple, have actual numbers already also
  // return sorted array

let arr = [['b', 'c', 'a'], [2, 1, 3, 14], ['blue', 'black', 'green']];

let strfiedArr = JSON.stringify(arr);
let deepCopyArr = JSON.parse(strfiedArr);

deepCopyArr.map(nestArr => {
  if (typeof nestArr[0] === 'string') {
    return nestArr.sort();
  }
  if (typeof nestArr[0] === 'number') {
    return nestArr.sort((a, b) => a - b)
  }
})

console.log(arr);
console.log(deepCopyArr);

// book solution:

// arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     // we have an array of strings
//     return subArr.slice().sort();
//   } else {
//     // we have an array of numbers
//     return subArr.slice().sort((a, b) => a - b);
//   }
// });


