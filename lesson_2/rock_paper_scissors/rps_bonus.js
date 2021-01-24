// Rock Paper Scissors Bonus Features

// Rock crushes lizard,
// Lizard poisons Spock,
// Spock Smashes scissors,
// Scissors decapitates lizard,
// Lizard eats paper
// paper disproves spock
// Spock vaporizes rock

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

function showUser(key, optional = '') {
  console.log(`${DISPLAY[key]}` + ' ' + optional);
  "\n";
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

function firstLetterChangeS() {
  if (userChoice === '1') {
    userChoice = 'scissors';
  }
  else if (userChoice === '2') {
    userChoice = 'spock';
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

function compareTie() {
  if (userChoice === computerChoice) {
    showUser('tie message');
  }
}

function compareUserWins() {
  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
  (userChoice === 'paper' && computerChoice === 'rock') ||
  (userChoice === 'scissors' && computerChoice === 'paper') ||
  (userChoice === 'rock' && computerChoice === 'lizard') ||
  (userChoice === 'lizard' && computerChoice === 'spock') ||
  (userChoice === 'spock' && computerChoice === 'scissors') ||
  (userChoice === 'scissors' && computerChoice === 'lizard') ||
  (userChoice === 'lizard' && computerChoice === 'paper') ||
  (userChoice === 'paper' && computerChoice === 'spock') ||
  (userChoice === 'spock' && computerChoice === 'rock')
  ) {
    showUser('user wins message');
    userWinTally += 1;
  }
}

function compareComputerWins() {
  if ((computerChoice === 'rock' && userChoice === 'scissors') ||
  (computerChoice === 'paper' && userChoice === 'rock') ||
  (computerChoice === 'scissors' && userChoice === 'paper') ||
  (computerChoice === 'rock' && userChoice === 'lizard') ||
  (computerChoice === 'lizard' && userChoice === 'spock') ||
  (computerChoice === 'spock' && userChoice === 'scissors') ||
  (computerChoice === 'scissors' && userChoice === 'lizard') ||
  (computerChoice === 'lizard' && userChoice === 'paper') ||
  (computerChoice === 'paper' && userChoice === 'spock') ||
  (computerChoice === 'spock' && userChoice === 'rock')
  ) {
    showUser('computer wins message');
    computerWinTally += 1;
  }
}

function showResult(key1, variable1, key2, variable2) {
  console.log(`${DISPLAY[key1]} ${variable1} and ${DISPLAY[key2]} ${variable2}.`);
}

function showScore(key1, variable1, key2, variable2) {
  console.log(`${DISPLAY[key1]} ${variable1}. ${DISPLAY[key2]} ${variable2}.`)
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

    showUser('once message');
    
    showUser('choose');

    userEntry = READLINE.question();

    validateUserEntrySetUserChoice(userEntry);

    scissorChange(userChoice);

    while (userChoice !== 'rock' &&
      userChoice !== 'paper' &&
      userChoice !== 'scissors' &&
      userChoice !== 'scissor' &&
      userChoice !== 'lizard' &&
      userChoice !== 'spock' &&
      userChoice !== 'r' &&
      userChoice !== 'p' &&
      userChoice !== 's' &&
      userChoice !== 'l') {
      showUser('error message');
      userEntry = READLINE.question();
      validateUserEntrySetUserChoice(userEntry);
    }

    firstLetterConversion();

    if (userChoice === 's') {
      showUser('first letter s message');
      userChoice = READLINE.question();

      while (userChoice !== '1' && userChoice !== '2') {
        showUser('first letter s message');
        userChoice = READLINE.question();
      }
    }

    firstLetterChangeS();

    const COMPUTER_CHOICE_ARRAY = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    computerEntry = Math.floor(Math.random() * 5);

    computerChoice = COMPUTER_CHOICE_ARRAY[computerEntry];

    showResult('computer chooses message', computerChoice, 'user chooses message', userChoice);

    compareTie();
    compareUserWins();
    compareComputerWins();
  }

  if (bestOfFive === 'yes') {
    for (let counter = 1; counter < 6; counter++) {
      showUser('round message', counter);
      showUser('choose');
      userEntry = READLINE.question();
    
      validateUserEntrySetUserChoice(userEntry);
      scissorChange(userChoice);
    
      while (userChoice !== 'rock' &&
        userChoice !== 'paper' &&
        userChoice !== 'scissors' &&
        userChoice !== 'scissor' &&
        userChoice !== 'lizard' &&
        userChoice !== 'spock' &&
        userChoice !== 'r' &&
        userChoice !== 'p' &&
        userChoice !== 's' &&
        userChoice !== 'l') {
        showUser('error message');
        userEntry = READLINE.question();
        validateUserEntrySetUserChoice(userEntry);
      }
    
      firstLetterConversion();
    
      if (userChoice === 's') {
        showUser('first letter s message');
        userChoice = READLINE.question();
    
        while (userChoice !== '1' && userChoice !== '2') {
          showUser('first letter s message');
          userChoice = READLINE.question();
        }
      }
    
    firstLetterChangeS();
    
      const COMPUTER_CHOICE_ARRAY = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      computerEntry = Math.floor(Math.random() * 5);
      computerChoice = COMPUTER_CHOICE_ARRAY[computerEntry];
      showResult('computer chooses message', computerChoice, 'user chooses message', userChoice);
    
      compareTie();
      compareUserWins();
      compareComputerWins();

      showScore('user win tally message', userWinTally, 'computer win tally message', computerWinTally);
    }
    if (userWinTally > computerWinTally) {
      showUser('total winner user');
    } else if (computerWinTally > userWinTally) {
      showUser('total winner computer');
    } else if (userWinTally === computerWinTally) {
      showUser('total winner tied');
    }
  }

  showUser('play again message');
  again = READLINE.question();
  validateAgain();

  while (againAnswer !== 'yes' && againAnswer !== 'no') {
    showUser('again error message');
    again = READLINE.question();
    validateAgain();
  }

  if (againAnswer === 'yes') {
    computerWinTally = 0;
    userWinTally = 0;
  }

  if (againAnswer === 'no') break;
  console.clear();

}
console.clear();
showUser('goodbye');
