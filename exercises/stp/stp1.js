// PROBLEM
// Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.
// EXAMPLES: given
// DATA STRUCTURES: strings
// ALGORITHM
  // can do index of a regex for lower case?
    // can do this with .match


// book solution
// function isUppercase(str) {
//   return str === str.toUpperCase();
   
// }

function isUppercase(str) {
  return str.match(/[a-z]/g) === null;
}




console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true