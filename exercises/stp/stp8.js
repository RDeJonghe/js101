// PROBLEM:
/* Write a function that takes a string as an argument, and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space. */

// EXAMPLES: given
// DATA STRUCTURES: string, array
// ALGORITHM
  // set a variable that will capture the word length, this will be concatenated on to the word
  // set a results array
  // split the string at the space ' '
  // iterate over word array
  // push word concatenated with length
  // handle empty string or no argument passed
  // return results array

// my original solution
//   function wordLengths(str) {
//   if (!str) {
//     return [];
//   }
//   let wordArr = str.split(' ');
//   let results = [];

//   for (let i = 0; i < wordArr.length; i++) {
//     results.push(wordArr[i] + ' ' + wordArr[i].length);
//   }
//   return results;

// }


// function wordLengths(...str) {
//   if (str.length === 0 || str[0].length === 0) {
//     return [];
//   }
//   return str[0].split(' ').map(el => {
//     return `${el} ${el.length}`;
//   })

// }

// straight forward way to do it with map. Map kind works like push a bit I'd say, just don't have to set an empty array and push. Map kind of does this for you.
function wordLengths(str) {
  if (/*str === undefined*/ !str || /*str.length === 0*/ !str.length) {
    return [];
  }
  return str.split(' ').map(el => `${el} ${el.length}`);
}





console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []