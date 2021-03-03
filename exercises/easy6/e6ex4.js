
// PROBLEM:
  // Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.
// EXAMPLES: given
// DATA STRUCTURES: strings, arrays
// ALGORITHM:
  // set center variable
  // Use the string and [] notation to find the middle characters
  // based of off array length find middle characters
  // concat the even length two middle characters, use Math.floor to find the other one
  // return variable

function centerOf(str) {
  let center;
  if (str.length % 2 === 0) {
    center = str[(str.length / 2) - 1] + str[str.length / 2];
  }
  if (str.length % 2 === 1) {
    center = str[Math.floor(str.length / 2)];
  }
  return center;
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"