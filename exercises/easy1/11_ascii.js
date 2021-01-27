/* Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.) */


// have to loop over each character

function asciiValue(exampleString) {
  let total = 0;
  for (let i = 0; i < exampleString.length; i++) {
    total += exampleString[i].charCodeAt();
  }
  return total;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0

