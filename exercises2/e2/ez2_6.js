// easy 2 exercise 6

/* Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words. */

// ALGORITM
  // create function
  // use split at the word level (space) to get an array of words
  // return the word at the position of length - 2

// function penultimate(str) {
//   let arr = str.split(' ')
//   return arr[arr.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

/* Our solution ignored a couple of edge cases because we explicitly stated that you didn't have to handle them: strings that contain just one word, and strings that contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need to be considered? How would you handle those edge cases without ignoring them? Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of. */

// find middle word of a phrase sentence
// if length is odd return middle
// if lenght is even return middle two words

// algorithm
// create function
// set array to split at word level (space)
// open conditional - if even length, if odd length
// if odd - get the word at math.floor(length / 2)
// if even return two words length / 2 and (length / 2) -1

let str1 = 'back once again im the renegade master';
let str2 = 'd for damager power to the people back once again';

function middle(str) {
  let arr = str.split(' ');

  if (arr.length % 2 === 1) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    return arr[(arr.length / 2) - 1].concat(' ').concat(arr[(arr.length / 2)]);
  }
}

console.log(middle(str1));
console.log(middle(str2))