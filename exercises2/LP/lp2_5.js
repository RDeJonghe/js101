// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

// ALGORITHM
// create a function that takes a string as an argument
// HAVE TO START AT FIRST CHARACTER AND RETURN ALL THE COMBOS OF ADDING ON ADDITIONAL CHARCTERS - previous function does this
// THEN HAVE TO REMOVE FIRST CHARACTER
// THEN HAVE TO USE THE PREVIOUS FUNCTION AGAIN, NOW STARTING WITH SECOND CHARACTER

// create an allSubstrings empty array
// create a while loop, while str.length > 0
// push to the allSubstrings array the call previous function
// set str = str.slice(1) - this will remove 0 index character on each iteration, (can do this pass by value)
// return new array with substrings


function leadingSubstrings(str) { // from previous exercise
  let results = [];
  let counter = 1;

  while (counter <= str.length) {
    results.push(str.slice(0, counter));
    counter += 1;
  }
  return results;
}

function substrings(str) {
  allSubstrings = [];

  while (str.length > 0) {
    allSubstrings.push(leadingSubstrings(str));  // I could refactor the above to use .concat() like the example solution => allSubstrings = allSubstrings.concat(leadingSubstrings(str))
    str = str.slice(1); // I can reassign this, it's pass by value. A variable passed as an argument would not be modified.
  }
  return allSubstrings.flat(); // with the use of .concat() there would not be a need to flatten the array
}

let letters = 'abcde'
console.log(substrings(letters)); // This prints anticipated array of results
console.log(letters); // this is unchanged since the function is pass by value

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]