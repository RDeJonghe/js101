// The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

/*
function isColorValid(color) {
  return (color === 'blue' || color === 'green') ? 'yes' : 'no';
}

console.log(isColorValid('blue'));
console.log(isColorValid('red'));
console.log(isColorValid('green'));
*/

// function isColorValid(color) {
//   return color === 'blue' || color === 'green'
// }
// console.log(isColorValid('blue'));
// console.log(isColorValid('red'));
// console.log(isColorValid('green'));


// const isColorValid = color => color === "blue" || color === "green";


// console.log(isColorValid('blue'));
// console.log(isColorValid('red'));
// console.log(isColorValid('green'));

const isColorValid = color => ["blue", "green"].includes(color);

console.log(isColorValid('blue'));
console.log(isColorValid('red'));
console.log(isColorValid('green'));

