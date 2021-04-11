// easy 1 exercise 11

// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

// algorithm
// create function that takes a string as an argument
// take the string and split at the character level
// iterate over the array of each character using reduce
// on each iteration check the value of each character using charCodeAt
// add this value to the accumulator
// return accumulator


// function utf16Value(str) {
//   let charArr = str.split('');

//   return charArr.reduce((accum, el) => accum + el.charCodeAt(), 0);
// }

// refactor

function utf16Value(str) {
  return str.split('').reduce((accum, el) => accum + el.charCodeAt(), 0);
}


console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811