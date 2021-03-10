// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

// ALGORITHM
  // set an empty results array
  // iterate over string
  // set i to one to slice, i <= length
  // push to results array slice of (0, i)
  // return results array

// function leadingSubstrings(str) {
//   let results = [];
//   for (let i = 1; i <= str.length; i++) {
//     results.push(str.slice(0, i));
//   }
//   return results;
// }


// function leadingSubstrings(str) {
//   let substr = '';
//   return str.split("").map(char => {
//       substr = substr + char;
//       return substr;
//   });
// }

// function leadingSubstrings(str) {
//   let substr = '';
//   return str.split('').map(char => {
//     substr = substr + char;
//     return substr;
//   })
// }

// with map and slice

// function leadingSubstrings(str) {
//   return str.split('').map((el, indx) => str.slice(0, indx + 1));
// }

// map with concatenating on empty string

function leadingSubstrings(str) {
  let substr = '';
  let combos = str
    .split('')
    .map(el => {
      substr = substr + el;
      return substr;
    })
    return combos;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]