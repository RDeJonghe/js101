// PROBLEM:
  // Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.
// EXAMPLES: given
// DATA STRUCTURES: strings, arrays
// ALGORITHM:
  // Take string and split at the space
  // Reverse array
  // add in a comma


// two last names
// function swapName(name) {
//   let nameArr = name.split((' '));
//   if (nameArr.length === 2) {
//     return `${nameArr[1]}, ${nameArr[0]}`;
//   }
//   if (nameArr.length === 3) {
//     return `${nameArr[1]} ${nameArr[2]}, ${nameArr[0]}`;
//   }
// }

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
// console.log(swapName('Guillermo Mendoza Bernal'));

// just first, last

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"