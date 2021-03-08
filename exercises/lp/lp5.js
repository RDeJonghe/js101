// PROBLEM:
  // Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

  // You may (and should) use the leadingSubstrings function you wrote in the previous exercise:
// EXAMPLES: given
// DATA STRUCTURES: array, string
// ALGORITHM:
  // set an array to hold all the results
  // for loop to loop over the string - the index will be used as a counter in substring
  // set a variable to hold the substring, this will get shorter each time through. Use substring with the index #
  // set the array equal to itself plus concat the helper function called with the new variable
  // return the array


  function leadingSubstrings(str) {
    let results = [];
    let counter = 1;
    for (let i = 0; i < str.length; i++) {
      results.push(str.slice(0, counter));
      counter += 1;
    }
    return results;
  }

function substrings(stringLetters) {
  let combos = [];
  for (let i = 0; i < stringLetters.length; i++) {
    let shortString = stringLetters.substring(i);
    combos = combos.concat(leadingSubstrings(shortString));
  }
  return combos;
}






// function substrings(str) {
//   let substrings = [];
//   for (let indx = 0; indx < str.length; indx++) { // not while loop, not taking off the first character, instead using substring
//     let substring = str.substring(indx); // can pass this into function call, it will be shorter each time
//     substrings = substrings.concat(leadingSubstrings(substring)) // concat here is concatenating the array returned from leading substrings function. I had thought about shift to remove outer array, use concat when putting them together.
//   }
//   return substrings;
// }





console.log(substrings('abcde'));
console.log(substrings('Renegade'));
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]