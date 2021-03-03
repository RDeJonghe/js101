// PROBLEM:
  // Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.
// EXAMPLES: given
// DATA STRUCTURES: numbers, arrays
// ALGORITHM:
  // Send numbers to an array. May have to convert to string and split
  // Reverse array
  // Join and return reversed number

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1