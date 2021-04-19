// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

// algorithm
// create a function that takes a tring as an argument
// create an empty results array
// create a counter variable = 1, this will be used for the slice and be incremented
// create a while loop, loop while <= str.length we need equal because the last slice goes beyond last character
// results.push() the slice of (0, counter) - always starts with first letter
// increment the counter within the iteration so next time it will include the next value
// return results array

function leadingSubstrings(str) {
  let results = [];
  let counter = 1;

  while (counter <= str.length) {
    results.push(str.slice(0, counter));
    counter += 1;
  }
  return results;
}


// with reduce

// function leadingSubstrings(str) {
//   let results = [];

//   str.split('').reduce((accum, char) => {
//     results.push(accum + char);
//     return accum + char;
//   }, [])
//   return results;
// }

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]