// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.


// First try with reduce thanks to user submitted solution on previous exercise
// const CONSONANTS = 'abcdfghjklmnpqrstvwxyzABCDFGHJKLMNPQRSTVWXYZ';

// function doubleConsonants(str) {
//   return str.split('').reduce((accum, char) => {
//     if (CONSONANTS.includes(char)) {
//       return accum + char + char;
//     } else {
//       return accum + char;
//     }
//   },'')
// }

// Attempt as I normally would:
const CONSONANTS = 'abcdfghjklmnpqrstvwxyzABCDFGHJKLMNPQRSTVWXYZ';

function doubleConsonants(str) {
  let arr = str.split('');
  let doubleArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (CONSONANTS.includes(arr[i])) {
      doubleArr.push(arr[i], arr[i])
    } else {
      doubleArr.push(arr[i])
    }
  }
  return doubleArr.join('');
}



console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""