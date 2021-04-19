// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

// ALGORITHM
// have to split the number to look at all digits
  // convert to string, then split into array
// iterate over array with reduce
  // on each iteration take the number(element) and add it to accumulator
// return this

function sum(num) {
  return String(num).split('').reduce((accum, el) => accum += Number(el), 0)
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45