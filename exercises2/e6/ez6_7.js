// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

// ALGORITHM
// take string and split into array at space
// reverse array
// return and join array with ', '

// function swapName(str) {
//   return str.split(' ').reverse().join(', ');
// }

// function swapName(str) {
//   let nameArr = str.split(' ');
//   return nameArr[2] + ', ' + nameArr[0] + ' ' + nameArr[1]
// }


console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Jan Michael Vincent'));