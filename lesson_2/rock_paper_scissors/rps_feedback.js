// Feedback and changes

// Use this to edit and update with feedback

// Rock Paper Scissors Bonus Features

const READLINE = require('readline-sync');
const DISPLAY = require('./rps_messages.json');

let userEntry;
let userChoice;
let computerEntry;
let computerChoice;
let again;
let againAnswer;
let bestOfFive;
let userWinTally = 0;
let computerWinTally = 0;

const WINNING_COMBOS = {
  rock : ['scissors', 'lizard'],
  paper : ['rock', 'spock'],
  scissors : ['paper', 'lizard'],
  lizard : ['paper', 'spock'],
  spock : ['rock', 'scissors']
};

const VALID_CHOICES = [
  'rock',
  'paper',
  'scissors',
  'scissor',
  'lizard',
  'spock',
  'r',
  'p',
  'sc',
  'sp',
  'l'
];

function madeValidChoice(userChoice) {
  return VALID_CHOICES.includes(userChoice);
}

function userWins(userChoice, computerChoice) {
  if (WINNING_COMBOS[userChoice].includes(computerChoice)) {
    showUser('user wins message');
    userWinTally += 1;
  }
  return WINNING_COMBOS[userChoice].includes(computerChoice);
}

function computerWins(computerChoice, userChoice) {
  if (WINNING_COMBOS[computerChoice].includes(userChoice)) {
    showUser('computer wins message');
    computerWinTally += 1;
  }
  return WINNING_COMBOS[computerChoice].includes(userChoice);
}


function showUser(key, optional = '') {
  console.log(`${DISPLAY[key]}` + ' ' + optional);
}

function validateBestofFive(bestOfFiveVariable) {
  bestOfFive = bestOfFiveVariable.toLowerCase()
    .replace(/['"]+/g, '');
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

function firstLetterConversion() {
  if (userChoice === 'r') {
    userChoice = 'rock';
  } else if (
    userChoice === 'p'
  ) {
    userChoice = 'paper';
  } else if (
    userChoice === 'l'
  ) {
    userChoice = 'lizard';
  }
}

function firstTwoLettersConversion() {
  if (
    userChoice === 'sc'
  ) {
    userChoice = 'scissors';
  } else if (
    userChoice === 'sp'
  ) {
    userChoice = 'spock';
  }
}

function compareTie() {
  if (userChoice === computerChoice) {
    showUser('tie message');
  }
}

function showResult(key1, userMessage1, key2, userMessage2) {
  console.log(`${DISPLAY[key1]} ${userMessage1} and ${DISPLAY[key2]} ${userMessage2}.`);
}

function showScore(key1, userMessage1, key2, userMessage2) {
  console.log(`${DISPLAY[key1]} ${userMessage1}. ${DISPLAY[key2]} ${userMessage2}.`);
}

function validateAgain() {
  againAnswer = again.toLowerCase()
    .replace(/['"]+/g, '');
}

showUser('welcome');

showUser('best of five');
bestOfFive = READLINE.question();

validateBestofFive(bestOfFive);

while (bestOfFive !== 'yes' && bestOfFive !== 'no') {
  showUser('best of five');
  bestOfFive = READLINE.question();
  validateBestofFive(bestOfFive);
}

while (true) {

  if (bestOfFive === 'no') {

    showUser('newline');
    showUser('once message');
    showUser('choose');

    userEntry = READLINE.question();

    validateUserEntrySetUserChoice(userEntry);

    scissorChange(userChoice);

    while (!madeValidChoice(userChoice)) {
      showUser('error message');
      userEntry = READLINE.question();
      validateUserEntrySetUserChoice(userEntry);
    }

    firstLetterConversion();
    firstTwoLettersConversion();

    const COMPUTER_CHOICE_ARRAY = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    computerEntry = Math.floor(Math.random() * 5);

    computerChoice = COMPUTER_CHOICE_ARRAY[computerEntry];

    showResult('computer chooses message', computerChoice, 'user chooses message', userChoice);

    compareTie();

    userWins(userChoice, computerChoice);
    computerWins(computerChoice, userChoice);
  }

  if (bestOfFive === 'yes') {
    for (let counter = 1; counter < 6; counter++) {
      showUser('round message', counter);
      showUser('choose');
      userEntry = READLINE.question();

      validateUserEntrySetUserChoice(userEntry);
      scissorChange(userChoice);

      while (!madeValidChoice(userChoice)) {
        showUser('error message');
        userEntry = READLINE.question();
        validateUserEntrySetUserChoice(userEntry);
      }

      firstLetterConversion();
      firstTwoLettersConversion();

      const COMPUTER_CHOICE_ARRAY = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      computerEntry = Math.floor(Math.random() * 5);
      computerChoice = COMPUTER_CHOICE_ARRAY[computerEntry];
      showResult('computer chooses message', computerChoice, 'user chooses message', userChoice);

      compareTie();
      userWins(userChoice, computerChoice);
      computerWins(computerChoice, userChoice);

      showScore('user win tally message', userWinTally, 'computer win tally message', computerWinTally);
      showUser('newline');
    }
    if (userWinTally > computerWinTally) {
      showUser('total winner user');
    } else if (computerWinTally > userWinTally) {
      showUser('total winner computer');
    } else if (userWinTally === computerWinTally) {
      showUser('total winner tied');
    }

    showUser('newline');
  }

  showUser('play again message');
  again = READLINE.question();
  validateAgain();

  while (againAnswer !== 'yes' && againAnswer !== 'no') {
    showUser('again error message');
    again = READLINE.question();
    validateAgain();
  }

  if (againAnswer === 'no') break;

  computerWinTally = 0;
  userWinTally = 0;
  console.clear();

}
console.clear();
showUser('goodbye');
