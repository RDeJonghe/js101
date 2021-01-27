/* Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

Examples */
/*
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/

// Note: can also use endsWith();
// Note: can alsu use regex





const READLINE = require('readline-sync');

let name = READLINE.question('What is your name? ');


function hasExclamation(nameValue) {
  if (nameValue[nameValue.length - 1] === '!') {
    console.log(`HELLO ${nameValue.toUpperCase()} WHY ARE WE SCREAMING!`);
  } else {
    console.log(`Hello ${nameValue}.`)
  }
}

hasExclamation(name);




// Another way with .includes

/*
function hasExclamation(nameValue) {
  if (name.includes('!')) {
    console.log(`HELLO ${nameValue.toUpperCase()} WHY ARE WE SCREAMING!`)
  }
  else {
    console.log(`Hello ${nameValue}.`)
  }
}
*/




