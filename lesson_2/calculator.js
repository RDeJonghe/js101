// Calculator exercise from JS101

const readline = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(numberEntered) {
  return numberEntered.trimStart() === '' || Number.isNaN(Number(numberEntered));
}

prompt('Welcome to Calculator!');
prompt("What's the first number?");

let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt('That is not a valid number, please enter a valid number');
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('That is not a valid number, please enter a valid number');
  number2 = readline.question();
}

prompt('Num 1 is ' + number1 + ' num 2 is ' + number2);

prompt('What operation would you like to perform? 1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (
  [ '1', '2', '3', '4' ].includes(operation) === false // can refactor like this, easier to understand for me instead of !bang operator
) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
/* REFACTORED TO USE A SWITCH STATEMENT BELOW:
if (operation === '1') {
  // Remember readline.question returns a string so it is '1' not 1
  output = Number(number1) + Number(number2); // Since it returns strings this will concatenate if we don't do something about it. So we are using the Number function.
} else if (operation === '2') {
  output = number1 - number2;
} else if (operation === '3') {
  output = number1 * number2;
} else if (operation === '4') {
  output = number1 / number2;
}
*/

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}
prompt(`The result is: ${output}.`);
