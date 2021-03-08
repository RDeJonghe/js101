// PROBLEM
/* Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters. */

// EXAMPLES: given
// DATA STRUCTURES: strings, possibly arrays
// ALGORITHM:
  // split string into array
  // iterate over array
  // if i is 0 uppercase or if any whitespace chararacter i + 1 uppercase
  // join and return


// My first attempt. Works except when have to lower case Script
//   function wordCap(str) {
//   let arr = str.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//       arr[i] = arr[i].toUpperCase();
//     }
//     else if (arr[i] === ' ') {
//       arr[i + 1] = arr[i + 1].toUpperCase();;
//     }
//   }
//   return arr.join('');
// }

// User submitted: Can also do with slice... this will take care of capitalizing first letter. Can split at the word level, not the character level. This is a nice solution.

// function wordCap(str) {
//   words = str.split(' ');
//   return words.map(el => capitalize(el)).join(' ');
// }

// function capitalize(word) {
//   let capped = word[0].toUpperCase() + word.slice(1);
//   return capped;
// } 

// Can do the same thing above in one line like this:

// function wordCap(str) {
//   return str.split(' ').map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' ');
// }




console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'