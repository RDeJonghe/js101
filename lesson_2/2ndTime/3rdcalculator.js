// write a calculator function that asks the user for operations, validates input, asks if they want to perform another calculation. Bilingual calculator with messages in a JSON file. Use a switch statement to perform the calculation.

let again = true;
const READLINE = require('readline-sync');
const MESSAGES = require('./3rdcalc.json');

while (again) {
  let result;

  function introPrompt(key) {
    console.log(`=> ${MESSAGES[key]}`);
  }
  function languagePrompt(language, key, variable = '') {
    console.log(`${MESSAGES[language][key]}${variable}`);
  }
  function invalidNumber(num) {
    return Number.isNaN(Number(num)) || num.trimStart() === '';
  }

  introPrompt('welcome');
  
  let language = READLINE.question(introPrompt('language'));
  language = language.toLowerCase().replace(/['"]+/g, '');
  
  while (language !== 'en' && language !== 'es') {
    language = READLINE.question(introPrompt('language'));
    language = language.toLowerCase().replace(/['"]+/g, '');

  }
  

  let num1 = READLINE.question(languagePrompt(language, 'number'));
  while (invalidNumber(num1)) {
    num1 = READLINE.question(languagePrompt(language, 'number'));
  }

  let num2 = READLINE.question(languagePrompt(language, 'number2'));
  while (invalidNumber(num2)) {
    num2 = READLINE.question(languagePrompt(language, 'number2'));
  }

  let operation = READLINE.question(languagePrompt(language, 'operation'));
  operation = operation.replace(/['"]+/g, '');
  
  while(!['+', '-', '*', '/'].includes(operation)) {
    operation = READLINE.question(languagePrompt(language, 'operation'));
    operation = operation.replace(/['"]+/g, '');
  }

  switch (operation) {
    case '+' :
      result = Number(num1) + Number(num2);
      break;
    case '-' :
      result = Number(num1) - Number(num2);
      break;
    case '*' :
      result = Number(num1) * Number(num2);
      break;
    case '/' :
      result = Number(num1) / Number(num2);
      break;
    
  }
  
  languagePrompt(language, 'result', result);

  again = READLINE.question(languagePrompt(language, 'again'));
  again = again.toLowerCase().replace(/['"]+/g, '').slice(0, 1);

  while (again !== 'y' && again !== 's' && again !== 'n') {
    again = READLINE.question(languagePrompt(language, 'again'));
    again = again.toLowerCase().replace(/['"]+/g, '').slice(0, 1);
  }

  console.log(again);

  // (again === 'y' || again === 's') ? again = true : again = false;

  if (again === 'y' || again === 's') {
    again = true;
  } else {
    again = false;
  }

}