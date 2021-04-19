/* Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters. */

// ALGORITHM
// create a function that takes a string as an argument
// split the string at the space ' ' level
// iterate over this array
// on every iteration assign the variable to itself sliced as 0 to uppercase + the rest of word
// join and return

function wordCap(str) {
  return str.split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'