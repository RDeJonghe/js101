// PROBLEM:
  /* Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

  You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.
  */

// EXAMPLES: Given
// DATA STRUCTURES: strings, arrays
// ALGORITHM:
  // Take a string and split it into an array of words
  // iterate over the array
  // for each element take the first and last character and switch
    // Use a helper function for this
    // Can use slice to do the rearrangement
    // the index of the iteration is reassigned to this new value
    // if the length is just one letter... set it to stay the same
    // join array and return

function swap(str) {
  let strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = rearrange(strArr[i]);
  }
  return strArr.join(' ');
}

function rearrange(word) {
  let rearranged;
  if (word.length === 1) {
    rearranged = word;
  }
  if (word.length > 1) {
    rearranged = word[word.length - 1] + word.slice(1, -1) + word.slice(0, 1);
  }
  return rearranged;
}



console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"


//  function swap(words) {
//   let wordsArray = words.split(' ');

//   for (let idx = 0; idx < wordsArray.length; idx += 1) {
//     wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
//   }

//   return wordsArray.join(' ');
// }

// function swapFirstLastCharacters(word) {
//   if (word.length === 1) {
//     return word;
//   }

//   return word[word.length - 1] + word.slice(1, -1) + word[0];
// }

// function swap(str) {
//   let strArr = str.split(' ');

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] = rearrange(strArr[i]);
//   }
//   return strArr.join(' ');
// }

// function rearrange(word) {
//   let rearranged;
//   if (word.length === 1) {
//     rearranged = word;
//   }
//   else {
//     rearranged = word.slice(word.length - 1) + word.slice(1, -1) + word.slice(0, 1);
//     }
//     return rearranged;
// }


// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

