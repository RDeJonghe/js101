// Rock Paper Scissors

const READLINE = require('readline-sync');
const DISPLAY = require('./rps_messages.json');

let userEntry;
let userChoice;
let computerEntry;
let computerChoice;
let again;
let againAnswer;

function showUser(key) {
  console.log(`${DISPLAY[key]}`);
}

function validateUserEntrySetUserChoice(entryVariable) {
  userChoice = entryVariable.toLowerCase()
    .replace(/['"]+/g, '');
}

function scissorChange() {
  if (userChoice === 'scissor') {
    userChoice = 'scissors';
  }
}

function compareChoices() {
  if (userChoice === computerChoice) {
    showUser('tie message');
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    showUser('user wins message');
  } else if ((computerChoice === 'rock' && userChoice === 'scissors') ||
    (computerChoice === 'paper' && userChoice === 'rock') ||
    (computerChoice === 'scissors' && userChoice === 'paper')
  ) {
    showUser('computer wins message');
  }
}

function showResult(key, variable1, key2, variable2) {
  console.log(`${DISPLAY[key]} ${variable1} and ${DISPLAY[key2]} ${variable2}.`);
}

function validateAgain() {
  againAnswer = again.toLowerCase()
    .replace(/['"]+/g, '');
}

showUser('welcome');

while (true) {

  showUser('choose');

  userEntry = READLINE.question();

  validateUserEntrySetUserChoice(userEntry);

  scissorChange(userChoice);

  while (userChoice !== 'rock' &&
    userChoice !== 'paper' &&
    userChoice !== 'scissors' &&
    userChoice !== 'scissor') {
    showUser('error message');
    userEntry = READLINE.question();
    validateUserEntrySetUserChoice(userEntry);
  }

  const COMPUTER_CHOICE_ARRAY = ['rock', 'paper', 'scissors'];

  computerEntry = Math.floor(Math.random() * 3);

  computerChoice = COMPUTER_CHOICE_ARRAY[computerEntry];

  showResult('computer chooses message', computerChoice, 'user chooses message', userChoice);

  compareChoices();

  showUser('play again message');

  again = READLINE.question();

  validateAgain();

  while (againAnswer !== 'yes' && againAnswer !== 'no') {
    showUser('again error message');
    again = READLINE.question();
    validateAgain();
  }

  if (againAnswer === 'no') break;

  console.clear();

}

showUser('goodbye');