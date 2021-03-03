// PROBLEM:
  // Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.
// EXAMPLES: given
// DATA STRUCTURES: strings, arrays
// ALGORITHM:
  // Split string at the spaces and put in array
  // Reverse array
  // put spaces back in - join will do this
  // join to string REMEMBER join will put in between elements what you want. No need to manually put spaces back in

// function reverseSentence(str) {
//   let arr = str.split(' ');
//   arr.reverse();
//   return arr.join(' ');
// }

// This can be refactored to be brief

const reverseSentence = (str) => str.split(' ').reverse().join(' ');


console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"