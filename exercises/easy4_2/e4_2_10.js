/* Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces. */

// ALGORITHM:
  // Split string into array at spaces
  // set empty results array
  // iterate over array
  // reassign the index to a concatenation of 2 slices, switching first and last
  // push these to results
  // return and join

function swap(str) {
  if (str.length === 1) {
    return str;
  }
  let arr = str.split(' ');
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i].slice(arr[i].length - 1) + arr[i].slice(1, arr[i].length - 1) + arr[i].slice(0, 1));
  }
  return results.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"