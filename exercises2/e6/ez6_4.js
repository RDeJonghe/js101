// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// ALGORITHM
  // create a function that takes a string
  // create a middle variable that is str.length / 2
  // if length of string is even
    // return slice of string with middle - 1, middle + 1
    // if odd return slice of string with math.floor(middle), math.ceil(middle)



const centerOf = function(str) {
  let middle = str.length / 2;

  if (str.length % 2 === 0) {
    return str.slice((middle - 1), (middle + 1));
  } else {
    return str.slice(Math.floor(middle), Math.ceil(middle));
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"


