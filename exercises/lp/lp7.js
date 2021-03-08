// PROBLEM
// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

// EXAMPLES: given
// DATA STRUCTURES: array, numbers
// ALGORITHM:
  // set a results array to push the numbers
  // iterate over the array, set index to 1 this will be used to slice extra parts
  // set the results array equal to the results array with concat and slice
    // The second part of slice (where it ends) will be the index and will increase each time.
    // so it starts of as the first number and pushes that, then it goes to the first and second number and pushes them both.
    // This will fill the results array with the combinations needed
  // Then it's just summing the numbers in the results array.
    // This can be done with reduce
    // could also be done with regular iteration and a total variable



// function sumOfSums(arr) {
//   let results = [];
//   let total = 0;
//   for (let i = 1; i <= arr.length; i++) {
//     results = results.concat(arr.slice(0, i));
//   }
//   for (let el of results) {
//     total += el;
//   }
//   return total;
  
// }

function sumOfSums(arr) {
  total = 0;
  for (let i = 1; i <= arr.length; i++) {
    total += arr.slice(0, i).reduce((accum, el) => accum + el);
  }
  return total;
}


    console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
    console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
    console.log(sumOfSums([4]));              // 4
    console.log(sumOfSums([1, 2, 3, 4, 5]));  

// Can also do it without concatenating everything to a results array and then adding that. Can do with a combination of slice and reduce to do it within the iteration.
  // Within the iteration it adds all of the slice together and then adds it to the total.

// function sumOfSums(arr) {
//   let total = 0;
//   for (let i = 1; i <= arr.length; i++) {
//     total += arr.slice(0, i).reduce((accum, el) => accum + el);
//   }
//   return total;
// }

// function sumOfSums(arr) {
//   let results = [];
//   for (let i = 1; i <= arr.length; i++) {
//     results = results.concat(arr.slice(0, i));
//   }
//   return results.reduce((accum, el) => accum + el);
// }

  // console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
  // console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
  // console.log(sumOfSums([4]));              // 4
  // console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// user submitted solution:
// function sumOfSums(arr) {
//   let sum = 0;
//   return arr.reduce((accum, el) => {
//     sum = sum + el;
//     return accum + sum
//   }, 0)
// }

// user submitted solution: I like this one it is straightforward.
// function sumOfSums(arr) {
//   let sums = [];
//   for (let idx = 1; idx <= arr.length; idx++) {
//     sums = sums.concat(arr.slice(0, idx));
//   }
//   return sums.reduce((acc, curr) => acc + curr, 0);
// }




// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


// function sumOfSums(arr) {
  //   let results = [];
  //   let total = 0;
  
  //   for (let i = 1; i <= arr.length; i++) {
  //     results = results.concat(arr.slice(0, i));
  //   }
  
  //   for (let el of results) {
  //     total += el;
  //   }
  //   return total;
  // }


// function sumOfSums(arr) {
//   let results = [];

//   for (let i = 1; i <= arr.length; i++) {
//     results = results.concat(arr.slice(0, i));
//   }
//   return results.reduce((accum, el) => {
//     return accum + el;
//   }, 0);
// }

// function sumOfSums(arr) {
  //   let results = [];
  //   for (let i = 1; i <= arr.length; i++) {
  //     results = results.concat(arr.slice(0, i));
  //   }
  //   return results.reduce((accum, el) => {
  //     return accum + el;
  //   })
  // }

  // function sumOfSums(arr) {
  //   let total = 0;
    
  //   for (let i = 1; i <= arr.length; i++) {
  //     total += arr.slice(0, i).reduce((accum, el) => accum + el);
  //   }
  //   return total;
  // }

  // function sumOfSums(arr) {
//   let total = 0;

//   for (let i = 1; i <= arr.length; i ++) {
//     total += arr.slice(0, i).reduce((accum, el) => {
//       return accum + el;
//     }, 0)
//   }
//   return total;
// }




// function sumOfSums(numbers) {
//   return numbers
//     .map((_, idx) =>
//       numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
//     )
//     .reduce((sum, value) => sum + value);
// }



// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35