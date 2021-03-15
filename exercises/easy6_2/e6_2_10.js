/* Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space. */

// ALGORITHM:
  // split at space and make array
  // set results array
  // iterate over array
  // if word is less than 5 letters push
  // if word is 5 or more push the reverse of the element

function reverseWords(str) {
  let strArr = str.split(' ');
  let results = [];

  for (let i = 0; i < strArr.length; i ++) {
    if (strArr[i].length < 5) {
      results.push(strArr[i]);
    } else {
      results.push(strArr[i].split('').reverse().join(''));
    }
  }
  return results;
}



console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"