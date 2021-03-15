// Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

// Algorithm:
  // set results array,
  // split string at spaces
  // iterate backwards over string
  // push each index to results
  // return results

// function reverseSentence(str) {
//   let results = [];
//   let strArr = str.split(' ');
//   for (let i = strArr.length - 1; i >= 0; i--) {
//     results.push(strArr[i]);
//   }
//   return results.join(' ');
// }

function reverseSentence(str) {
  let results = [];
  let strArr = str.split(' ');
  for (let el of strArr) {
    results.unshift(el);
  }
  return results.join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"