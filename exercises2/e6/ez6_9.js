// Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

// ALGORITHM
// create a function that takes a string as an argument
// split the string at the space level
// reverse the array
// join and return

// function reverseSentence(str) {
//   return str.split(' ').reverse().join(' ');
// }

// ALGORITHM
// create a function that takes a string as an argument
// create a results array
// split the string into an array of words
// iterate over the array of words
// for each word unshift it to the results
// return results

function reverseSentence(str) {
  let strArr = str.split(' ');
  let results = [];

  for (let i = 0; i < strArr.length; i ++) {
    results.unshift(strArr[i]);
  }
  return results.join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"