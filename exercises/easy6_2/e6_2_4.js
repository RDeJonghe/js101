// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.




function centerOf(str) {
  let oddMiddle1 = Math.floor(str.length / 2);
  let oddMiddle2 = Math.ceil(str.length / 2);
  let evenMiddle1 = (str.length / 2) - 1;
  let evenMiddle2 = (str.length / 2) + 1;

  if (str.length % 2 === 1) {
    return str.slice(oddMiddle1, oddMiddle2);
  } else {
    return str.slice(evenMiddle1, evenMiddle2);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"