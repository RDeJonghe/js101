// PROBLEM
// Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.
// EXAMPLES: given
// DATA STRUCTURES: array, strings,
// ALGORITHM:
  // iterate over array
  // on each element replace vowels with .replace & regex with '' empty character

// My original solution that worked.
// function removeVowels(str) {
//   return str.map(el => el.replace(/[a, e, i, o, u, A, E, I, O, U]/g, ''))
// }



console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]