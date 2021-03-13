/* Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.) */

// works
// function asciiValue(str) {
//   let strArr = Array.from(str);
//   let total = 0;
//   for (let el of strArr) {
//     total += el.charCodeAt();
//   }
//   return total;
// }

// with reduce
// function asciiValue(str) {
//   let strArr = Array.from(str);
//   return strArr.reduce((accum, el) => {
//     return accum += el.charCodeAt()
//   }, 0);
// }

// function asciiValue(str) {
//   return Array.from(str).reduce((accum, el) => {
//     return accum += el.charCodeAt();
//   }, 0)
// }

// function asciiValue(str) {
//   return str.split('').reduce((accum, el) => accum += el.charCodeAt(), 0);
// }

function asciiValue(str) {
  return Array.from(str).reduce((accum, el) => accum += el.charCodeAt(), 0);
}




console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0