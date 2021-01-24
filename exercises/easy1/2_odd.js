// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
/*
for (let counter = 1; counter < 100; counter +=2) {
  console.log(counter);
}
*/
// further exploration



const READLINE = require('readline-sync');

console.log('Enter in the starting number');
let start = parseInt(READLINE.question());

console.log('Enter in the stopping number');
let stop = parseInt(READLINE.question());

let counter = start;

for (counter; counter <= stop; counter += 2) {
  console.log(counter);
}


