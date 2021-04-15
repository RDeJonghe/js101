/* Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.
 */

// ALGORITHM
// create a function that takes a string as an argument
// HAVE TO HAVE INDIVIDUAL WORDS TO MODIFY
  // create an array variable by .split(' ')
  // iterate over this array
// HAVE TO ANALYZE EACH WORD AND REARRANGE THE CHARACTERS
  // on each iteration use slice to and concat different parts of word
  // need beginning + middle + end
  // make sure to reassign
// HAVE TO TURN ARRAY BACK INTO A STRING
  // join and return it

function swap(str) {
  return str.split(' ')
    .map(word => {
      if (word.length === 1) {
        return word;
      } else {
        return word.slice(word.length - 1) + word.slice(1, word.length - 1) + word.slice(0, 1)
      }  
    })
    .join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"