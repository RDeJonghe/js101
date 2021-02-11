// Double exercise from selection and transformation


// How I did what they showed for example
// let nums = [2, 4, 6, 8, 10];

// function doubleNums(numArr) {
//   let doubled = [];
//   let counter = 0;
  
//   while (true) {
//     doubled.push(nums[counter] * 2);
//     counter += 1;
  
//     if (counter >= nums.length) break;
//   }
//   return doubled;
// }

// console.log(doubleNums(nums));

// NOW HAVE TO DO THAT BUT MUTATE ORIGINAL ARRAY

// Problem:
//  - Input: Array
//  - Output: Same array mutated
//  - Rules: Take every element in the array and double the number
//  - Rules: Array has to be numbers (can assume this)
//  - Questions: Ask about scope

// Examples:
//  - Pass in [2, 4, 6] return same array with values of [4, 8, 12]

// Data Structures:
//  - Arrays

// Algorithm:
//  - Array is passed in to a function
//  - Function takes array and doubles the numbers
//  - This is done to original array mutating it
//  - Return original array with mutated values

// Code with Intent:

// let nums = [1, 4, 3, 7, 2, 6];

// function double(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i] * 2;
//   }
//   return arr;
// }

// console.log(double(nums));

// NOW HAVE TO DO THAT BUT ONLY DOUBLE ODD NUMBERS, BUT MAKE NEW ARRAY, DON'T MUTATE ORIGINAL 

// Problem:
//  - input: array
//  - output: new array
//  - rules: array contains numbers
//  - rules: only the odd numbers should be doubled and included in the new array

// Examples:
//  - [1, 2, 3, 4] when passed in to function will return [2, 6]

// Data Structures:
//  - Arrays

// Algorithm:
//  - Loop over numbers in array
//  - If number is odd
//    - double it
//    - send it to new array
//  - return new array

//  code with intent

// let nums = [1, 4, 3, 7, 2, 6];

// function doubleOdd(arr) {
//   let doubled = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 1) {
//       doubled.push(arr[i] * 2);
//     }
//   }
//   return doubled;
// }

// console.log(doubleOdd(nums));

// NOW DOUBLE ODD INDICES:

// Here's an exercise for you: suppose we wanted to transform the numbers based on their position in the array rather than their value? Try coding a solution that doubles the numbers that have odd indices:

// Problem:
//  - input: array
//  - output: new array
//  - rules: only double the numbers that have an odd index
//  - rules: all the numbers go to the new array, just the odd indexed ones are doubled

// Examples: [21, 45, 2, 43, 89, 7, 56]; will return [21, 90, 2, 86, 89, 14, 56]

// Data structures:
//  - arrays with numbers

// Algorithm
//  - take an array
//  - go over array and double all the odd numbered indexes in array
//  - pass those over to new array
//  - also pass over the unchanged numbers
//  - array has original order
//  - return new array

// Code with intent

// let nums = [21, 45, 2, 43, 89, 7, 56];

// function doubleOddIndx(arr) {
//   let doubled = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (i % 2 === 0) {
//       doubled.push(arr[i]);
//     } else {
//       if (i % 2 === 1) {
//         doubled.push(arr[i] * 2);
//       }
//     }
//   }
//   return doubled;
// }

// console.log(doubleOddIndx(nums));

// NOW DO THAT BUT HAVE A SECOND ARGUMENT THAT WILL MULTIPLY BY THE NUMBER THAT IS PASSED IN, DEFAULT IS DOUBLE (2

// Continuing with the idea of building generic functions, let's update our doubleNumbers function so that it not only can double the numbers in an array but can also multiply them by any other number. For instance, let's create a function called multiply that can take an additional argument to determine the transformation criterion.)

let nums = [1, 2, 3, 4, 5, 6, 7];

function multiply(arr, num = 2) {
  let multiplied = [];
  for (let i = 0; i < arr.length; i += 1) {
    multiplied.push(arr[i] * num);
  }
  return multiplied;
}

console.log(multiply(nums, 1));
console.log(multiply(nums));
console.log(multiply(nums, 5));