/* Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise: */


// My solution with a negative slice.
// ALGORITHM:
  // Function from last exercise already returns the first line, so a question of taking off a character and iterating again
  // Set a new results array in new function
  // iterate over the string - need to set i and length to be able to negative slice
  // call the original function on the string, push that to the new array
  // reassign str = str.slice with negative number to take off first character
  // return new array

// what this function does is take the string and then return each slice in increasing length
function leadingSubstrings(str) {
  let results = [];
  for (let i = 1; i <= str.length; i++) {
    results.push(str.slice(0, i));  
  }
  return results;
}

function substrings(str) {
  let allSubstrings = [];
  for (let i = str.length - 1; i >= 0; i --) {
    allSubstrings.push(leadingSubstrings(str));
    str = str.slice(-i);
  }
  return allSubstrings.flat();
}

// for this to happen after the original function is run a letter needs to be taken off and then it can iterate again
console.log(substrings('abcde'));
// console.log(substrings('renegade'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]





// Can also do using concat with substring() This is the book solution.
// ALGORITHM:
  // create an empty array in the new function
  // iterate over the string. set i and length so that substring() can be used, substring will start at i
  // new array .concat() the results of calling old function on the string. The old function will return an entire series of substrings, each time it will concat the new series after the old ones
  // set the string = to a substring with index
  // return new array

  // NEED practice with concat. have to set the array equal to the array.concat.

// function leadingSubstrings(str) {
//   let results = [];
//   for (let i = 1; i <= str.length; i++) {
//     results.push(str.slice(0, i));  
//   }
//   return results;
// }

// function substrings(str) {
//   let allSubstrings = [];
//   for (let i = 0; i < str.length; i++) {
//     let substr = str.substring(i);
//     allSubstrings = allSubstrings.concat(leadingSubstrings(substr));
    
//   }
//   return allSubstrings;
// }




// console.log(substrings('abcde'));
// console.log(substrings('renegade'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]