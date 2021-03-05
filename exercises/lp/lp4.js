// PROBLEM
  // Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.
// EXAMPLES: given
// DATA STRUCTURES:
// ALGORITHM:
  // work backwards
  // set counter equal to length -1
  // set array = to split string
  // set results array
  // iterate with while loop while counter >= 0
  // take string Unshift, join,
  // pop
  // decrease counter
  // return results
  
// My orignal solution
// function leadingSubstrings(str) {
  
//   let counter = str.length - 1;
//   let strArr = str.split('');
//   let results = [];

//   while (counter >= 0) {
//     results.unshift(strArr.join(''));
//     strArr.pop();
//     counter --;
//   }
//   return results;
// }

// Solution using push and slice, with a length counter

// function leadingSubstrings(str) {
//   let results = [];
//   for (let length = 1; length <= str.length; length ++) {
//     results.push(str.slice(0, length));
//   }
//   return results;
// }

// Can do with map and slice that is really brief:

function leadingSubstrings(str) {
  return str.split('').map((el, indx) => str.slice(el, indx + 1)); // this works, index starts at 0 so first slice is at one (not included), last slice is at the last index plus one (which is length) and also not included.
}

// Try with reduce refactored with help from user submitted solution

// function leadingSubstrings(str) {
//   let strArr = str.split('');
//   let results = [];
//   strArr.reduce((accum, el) => {
//     results.push(accum + el);
//     return accum + el;
//   }, [])
//   return results;
// }


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(leadingSubstrings('Renegade'));