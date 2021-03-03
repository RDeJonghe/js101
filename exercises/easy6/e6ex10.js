// PROBLEM
  // Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.
// EXAMPLES: given
// DATA STRUCTURES: strings, arrays
// ALGORITHM:
  // split to array at spaces
  // iterate over array
  // if element length is 5 or more, reverse
  // otherwise leave be
  // join with space

function reverseWords(str) {
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      arr[i] = arr[i].split('').reverse().join('');
    }
  }
  return arr.join(' ');
}



console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"