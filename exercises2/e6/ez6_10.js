// Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

// ALGORITHM
// create a function that takes a string as an argument
// create an empty results variable
// have to analyze at word level - split the string into an array of words
// iterate over the array of words
// if str.length < 5, push to the results array
// else - push the split, reverse, join of the elment to the results array
// join the results array and return this string

// function reverseWords(str) {
//   let results = [];
//   let strArr = str.split(' ');

//   for (let i = 0; i < strArr.length; i ++) {
//     if (strArr[i].length < 5) {
//       results.push(strArr[i])
//     } else {
//       results.push(strArr[i].split('').reverse().join(''));
//     }
//   }
//   return results.join(' ');
// }

// WITH MAP

function reverseIt(str) {
  return str.split('').reverse().join('');
}

function reverseWords(str) {
  return str.split(' ').map(word => word.length < 5 ? word : reverseIt(word)).join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"