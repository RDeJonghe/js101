// easy 1 exercise 10

/* Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1*/

// ALGORITHM
// create function with num parameter
// create a results array
// open a loop, the stopping condition being num >= 3
// open conditional, if num % 3 === 0 or num % 5 === 0 push to results array
// decrease num
// reduce results array, adding all to accumulator

const multisum = (num) => {
  let results = [];

  while (num >= 3) {
    if (num % 5 === 0 || num % 3 === 0) {
      results.push(num);
    }
    num -= 1;
  }
  return results.reduce((accum, num) => accum + num, 0);
}


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168