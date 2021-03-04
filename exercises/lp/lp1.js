// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.


// Reduce is a good choice here because the result can be set to a number zero and then just added on.
// Have to split to get to each digit, then have to make each digit a number

function sum(num) {
  return num.toString().split('').reduce((accum, el) => {
    return accum + Number(el);
  }, 0)
}


// function sum(num) {
//   return num.toString().split('').reduce((accum, el) => {
//     return accum + Number(el);
//   }, 0)
// }

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45