// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

let READLINE = require('readline-sync');
let name = READLINE.question('What is your name?\n');


// function greet(name) {
//   if (name.includes('!')) {
//     console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING!`);
//   } else {
//     console.log(`Hello ${name}`);
//   }
// }

// with indexOf

// function greet(name) {
//   if (name.indexOf('!') >= 0) {
//     console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING!`);
//   } else {
//     console.log(`Hello ${name}`);
//   }
// }

// with endsWith

function greet(name) {
  if (name.endsWith('!')) {
    console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING!`);
  } else {
    console.log(`Hello ${name}`);
  }
}

greet(name);


// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?