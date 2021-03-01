// Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

// Use a sum function and push.




function runningTotal(arr) {
  let totalArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalArr.push(arr[i] + sum)
    sum += arr[i];
  }
  return totalArr;
}

// Can also do with Map

// function runningTotal(arr) {
//   let sum = 0;
//   let newArr = arr.map(num => {
//     return sum += num;
//   })
//   return newArr;
// }

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

