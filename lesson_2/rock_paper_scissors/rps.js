// Rock Paper Scissors

const READLINE = require('readline-sync');
const DISPLAY = require('./rps_messages.json');

function showUser(key) {
  console.log(`${DISPLAY[key]}`);
}

function validateUserEntry(entryVariable) {
  userChoice = entryVariable.toLowerCase()
    .replace(/['"]+/g, '');
}

showUser('welcome');

while (true) {

  showUser('choose');

  let userEntry = READLINE.question();

  let userChoice;

  validateUserEntry(userEntry);

  function scissorChange() {
    if (userChoice === 'scissor') {
      userChoice = 'scissors';
    }
  }

  scissorChange(userChoice);

  while (userChoice !== 'rock' &&
    userChoice !== 'paper' &&
    userChoice !== 'scissors' &&
    userChoice !== 'scissor') {
    showUser('error message');
    userEntry = READLINE.question();
    validateUserEntry(userEntry);
  }

  const COMPUTER_CHOICE_ARRAY = ['rock', 'paper', 'scissors'];

  let computerEntry = Math.floor(Math.random() * 3);

  let computerChoice = COMPUTER_CHOICE_ARRAY[computerEntry];

  function showResult(key, variable) {
    console.log(`${DISPLAY[key]} ${variable}`);
  }

  showResult('computer chooses message', computerChoice);

  function compareChoices() {
    if (userChoice === computerChoice) {
      showUser('tie message');
    } else if (
      userChoice === 'rock' && computerChoice === 'scissors'
    ) {
      showUser('user wins message');
    } else if (
      userChoice === 'paper' && computerChoice === 'rock'
    ) {
      showUser('user wins message');
    } else if (
      userChoice === 'scissors' && computerChoice === 'paper'
    ) {
      showUser('user wins message');
    } else if (
      computerChoice === 'rock' && userChoice === 'scissors'
    ) {
      showUser('computer wins message');
    } else if (
      computerChoice === 'paper' && userChoice === 'rock'
    ) {
      showUser('computer wins message');
    } else if (
      computerChoice === 'scissors' && userChoice === 'paper'
    ) {
      showUser('computer wins message');
    }
  }
  compareChoices();

  showUser('play again message');

  let again = READLINE.question();

  let againAnswer;

  function validateAgain() {
    againAnswer = again.toLowerCase()
      .replace(/['"]+/g, '');
  }

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