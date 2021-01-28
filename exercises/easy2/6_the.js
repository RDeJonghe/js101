/* Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
*/

// Function takes string as an argument
// Iterate over the string, probably backwards
// Somehow look for the spaces
// find the first word after the first space (from the back), take that word and stop at the space before it.


// Use .split()!!!!

function penultimate(str) {
  let arr = str.split(' ');
  return (arr[arr.length - 2]); // minus 2 because lenght is one longer than the array index, -1 gets you last word.
}

console.log(penultimate('back once again'));

function penultimate2(str) {
  return str.split(' ').reverse()[1];
}

console.log(penultimate2('Im the renegade master'));

