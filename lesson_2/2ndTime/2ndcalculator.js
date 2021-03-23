// make a calculator getting user input, use switch statement and validate user input (trimStart() for whitespace & Number.isNaN)



// validating user input with .trimStart() and Number.isNaN()

const READLINE = require('readline-sync');
// const MESSAGES = require('./2ndcalc.json');
// const MESSAGES = require('./2ndcalc.json');
// const MESSAGES = require('./2ndcalc.json');
// const MESSAGES = require('./2ndcalc.json');
const MESSAGES = require('./2ndcalc.json');

let result;
let runCalculator = 'y';

function isInvalid(strNum) {
  return strNum.trimStart() === '' || Number.isNaN(Number(strNum));
}

function prompt(key, info) {
  console.log(`=> ${MESSAGES[key]} ${info}`);
}

prompt('welcome');

  while (runCalculator === 'y') {
  let num1 = READLINE.question('Enter in a number: '); // Don't want to just do Number(Readline.quesiton...) becasue Number('') = 0 so if they don't enter anything it will record as 0

  while (isInvalid(num1)) {
    num1 = READLINE.question('That is not a number, please enter a number: ');
  }

  let num2 = READLINE.question('Enter in a second number: ');

  while (Number.isNaN(Number(num2)) || num2.trimStart() === '') {
    num2 = READLINE.question('That is not a number, please enter a number: ');
  }

  let operation = READLINE.question('Enter a number for operation: 1 for add; 2 for subtract; 3 for multiply; 4 for divide: ');

  while (!['1', '2', '3', '4'].includes(operation)) {
    operation = READLINE.question('That is not a valid entry, enter a valid entry: ');
  }


  switch (operation) {
    case '1' :
      result = Number(num1) + Number(num2);
      break;
    case '2' :
      result = Number(num1) - Number(num2);
      break;
    case '3' :
      result = Number(num1) * Number(num2);
      break;
    case '4' :
      result = Number(num1) / Number(num2);
  }


 

  prompt("result", result);
  
  runCalculator = READLINE.question('Would you like to perform another calculation? Enter "y" for yes or "n" for no: ');

}
