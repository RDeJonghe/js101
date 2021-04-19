// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

// ALGORITHM
// create a function that takes an array as an argument
// iterate over the elements - can try map
// for each element
  // try .replace with regex 

// THIS WORKED.
// function removeVowels(arr) {
//   return arr.map(el => el.replace(/[aeiouAEIOU]/g, ''));
// }

// CAN ALSO MANIPULATE THE STRING ON EACH ITERATION
// create a vowels constant
// create a function that takes an array of strings
// create a results empty array
// iterate over the array
  // for each element
  // split it and iterate over array of characters
  // if a character is included in vowels reassing it to empty string
  // push the join of this element to results
// return results

// const VOWELS = `aeiouAEIOU`;

// function removeVowels(arr) {
//   let results = [];

//   for (let i = 0; i < arr.length; i ++) {
//     let elementCharacters = arr[i].split('');

//     for (let j = 0; j < elementCharacters.length; j ++) {
//       if (VOWELS.includes(elementCharacters[j])) {
//         elementCharacters[j] = ''
//       }
//     }
//     results.push(elementCharacters.join(''));
//   }
//   return results;
// }

// CAN ALSO DO WITH A HELPER FUNCTION





console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]