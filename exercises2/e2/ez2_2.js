// easy 2 exercise 2

// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// ALGORITHM
// require readline-sync
// ask question for name - set this to a variable
// have a reply variable using template literal and name variable
// open a conditional
  // if name variable ends with ! then return reply to uppercase
  // else return reply


const READLINE = require('readline-sync');

let name = READLINE.question('What is your name? ');

let reply = `Hello ${name}`

if (name.endsWith('!')) {
  console.log(reply.toUpperCase() + ' WHY ARE WE SCREAMING?')
} else {
  console.log(reply + '.');
}