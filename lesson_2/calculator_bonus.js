// Bonus features exercise for calculator
// I figured a loop was needed... but didn't know to nest. Most of the program is nested in the while(true) loop.
// I think the while(true) loop is really meant to keep running until break

// Calculator exercise from JS101

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(numberEntered) {
  return numberEntered.trimStart() === '' || Number.isNaN(Number(numberEntered));
}

prompt(MESSAGES.language);

let language = readline.question();

prompt(MESSAGES[language].welcome);

while (true) {
  prompt(MESSAGES[language].num1);

  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[language].invalidNum);
    number1 = readline.question();
  }

  prompt(MESSAGES[language].num2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[language].invalidNum);
    number2 = readline.question();
  }

  prompt('Num 1 is ' + number1 + ' num 2 is ' + number2);

  prompt(MESSAGES[language].operation);
  let operation = readline.question();

  while (
    [ '1', '2', '3', '4' ].includes(operation) === false // can refactor like this, easier to understand for me instead of !bang operator
  ) {
    prompt(MESSAGES[language].invalidOperation);
    operation = readline.question();
  }

  let output;

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
  prompt(`${MESSAGES[language].result} ${output}.`);

  prompt(MESSAGES[language].again);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') {
    // I think the [0] is the first character in the string, so should work with yes.
    break;
  }
}
