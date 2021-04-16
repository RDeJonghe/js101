// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// ALGORITHM
// create a function that takes a string
// set a results variable equal to an empty array
// set a consonants constant variable with all consonants 
// split the string into an array
// iterate over the array
// if element is included in cononants, push the double
// else push the single el
// join and return

// function doubleConsonants(str) {
//   let results = [];
//   const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
//   let charactersArr = str.split('');

//   charactersArr.forEach(char => {
//     if (consonants.includes(char)) {
//       results.push(char, char);
//     } else {
//       results.push(char);
//     }
//   });
//   return results.join('');
// }

// with map

// function doubleConsonants(str) {
//   const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
//   let charArr = str.split('');

//   return charArr.map(el => {
//     if (consonants.includes(el)) {
//       return el + el;
//     } else {
//       return el;
//     }
//   }).join('')

// }

// with reduce and ternary statement
const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
const doubleConsonants = (str) => str.split('').reduce((accum, el) => (consonants.includes(el) ? accum + el + el : accum + el), '');

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""