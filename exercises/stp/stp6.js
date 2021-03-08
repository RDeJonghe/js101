// PROBLEM
// Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

// EXAMPLES: given
// DATA STRUCTURES: strings, arrays
// ALGORITHM:
  // split string
  // iterate over array
  // if i is even capitalize, if i is odd lowercase
  // join and return


// My solution that worked
// function staggeredCase(str) {
//   let arr = str.split('');
//   let switched = arr.map((el, i) => {
//     if (i % 2 === 0) {
//       return el.toUpperCase();
//     } else {
//       return el.toLowerCase();
//     }
//   })
//   return switched.join('');
// }

// Refactor to do it without setting variables. This is a cleaner way to do it

// function staggeredCase(str) {
//   return str
//     .split('')
//     .map((el, i) => {
//       if (i % 2 === 0) {
//         return el.toUpperCase();
//       } else {
//         return el.toLowerCase();
//       }
//     })
//     .join('');
// }

// user submitted solution: can also do it by setting everything to lower, still split and iterate and doing every other to upper

// function staggeredCase(str) {
//   str = str.toLowerCase().split('');
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       str[i] = str[i].toUpperCase();
//     }
//   }
//   return str.join('');
// }

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

// I LoVe lAuNcH ScHoOl!
// AlL_CaPs
// IgNoRe 77 ThE 4444 nUmBeRs