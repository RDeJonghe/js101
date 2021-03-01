// easy 3 ex 9

// PROBLEM
  /* Clean up the words
  Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces). */
  // Rules: return same string
  // can we assume all lowercase?
// EXAMPLES: given
// DATA STRUCTURES: Strings, possibly array
// ALGORITHM:
  // Take the string and iterate over the characters
  // if it's a letter leave it be
  // if it's not a letter, replace it with a space
  // remove extra spaces, only one space at a time
  // return same string
// CODE
  // can try to iterate over string itself
  // can use replace, or reassignment
  // have to do second iteration to clean up spaces



// let alpha = 'abcdefghijklmnopqrstuvwxyz';

// function cleanUp(str) {
//   let arr = str.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (!alpha.includes(arr[i])) {
//       arr[i] = ' ';
//       if (arr[i - 1] === ' ') {
//         arr[i - 1] = '';
//       }
//     }
//   }
//   return arr.join('');
// }

// let alpha = 'abcdefghijklmnopqrstuvwxyz';

// function cleanUp(str) {
//   let arr = str.split('');
//   for (let i = 0; i < str.length; i++) {
//     if (!alpha.includes(arr[i])) {
//       arr[i] = ' ';
//       if (arr[i - 1] === ' ') {
//         arr [i - 1] === '';
//       }
//     }
//   }
//   return arr.join('');
// }

// function cleanUp(text) {
//   return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
// }

function cleanUp(str) {
  return str.replace(/[^a-z]/gi, '$');
}


 console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

