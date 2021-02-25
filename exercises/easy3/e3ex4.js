// easy 3 ex 4

// Fibonacci Number Location By Length

/* The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2. */

/* JavaScript's normal Number type can represent integers accurate up to the value of Number.MAX_SAFE_INTEGER, which is the 16-digit value 9007199254740991. Any integer larger than that value loses accuracy. For instance, the following code outputs 1, not 2 as you may expect:

Copy Code
console.log(Number.MAX_SAFE_INTEGER + 2 - Number.MAX_SAFE_INTEGER);
We'll be working with much larger numbers in this problem. Fortuanately, JavaScript now supports a BigInt type that lets you work with massive integers, limited only by the amount of memory available to your program, and the time you can devote to waiting for an answer.

To use BigInt integers in your solution, simply append the letter n to any numbers yoou use in your solution: 1n, 1234567890123456789012345678901234567890n, and so on. JavaScript will take care of the rest. */

// let arr = [1, 1];

// while (arr.length < 20) {
//   arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
// }


function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci; 
  } while (String(fibonacci).length < length);

  return count;
}

console.log(findFibonacciIndexByLength(100n));
