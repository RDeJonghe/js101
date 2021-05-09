// ttt bonus - my solution attempt

 



  const READLINE = require('readline-sync');
const MESSAGES = require('./ttt.json');

function displayBoard(board) {
  

  console.log('');
  console.log('     |     |')
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |')
  console.log('-----+-----+-----');
  console.log('     |     |')
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |')
  console.log('-----+-----+-----');
  console.log('     |     |')
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`)
  console.log('     |     |')
  console.log('');
}
function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square ++) {
    board[String(square)] = ' ';
  }
 return board;
}
function displayMessages(messageName) {
  console.log(MESSAGES[messageName]);
}

let board = initializeBoard();
let playAgain = true;
let playAgainAnswer;
displayMessages('welcome');
displayBoard(board);

while (playAgain === true) {
  let isAWinner = false;
  let isATie = false;
  let boardOptions = {
    1 : '1: Top Left',
    2 : ' 2: Top Center',
    3 : ' 3: Top Right',
    4 : ' 4: Middle Left',
    5 : ' 5: Center',
    6 : ' 6: Middle Right',
    7 : ' 7: Bottom Left',
    8 : ' 8: Bottom Center',
    9 : ' 9: Bottom Right'
  }
  
  while (isAWinner === false && isATie === false) {
    displayMessages('xoMessage');
    
    function dispalyAvailableOptions() {
      console.log(`These are the available spaces. Type the number to make a selection. ${Object.values(boardOptions)}`);
    }
    function determineUserWinner() {
      if (board['1'] === 'X' && board['2'] === 'X' && board['3'] === 'X') {
        return isAWinner = true;
      } else if (board['4'] === 'X' && board['5'] === 'X' && board['6'] === 'X') {
        return isAWinner = true;
      } else if (board['7'] === 'X' && board['8'] === 'X' && board['9'] === 'X') {
        return isAWinner = true;
      } else if (board['1'] === 'X' && board['5'] === 'X' && board['9'] === 'X') {
        return isAWinner = true;
      } else if (board['3'] === 'X' && board['5'] === 'X' && board['7'] === 'X') {
        return isAWinner = true;
      } else if (board['1'] === 'X' && board['4'] === 'X' && board['7'] === 'X') {
        return isAWinner = true;
      } else if (board['2'] === 'X' && board['5'] === 'X' && board['8'] === 'X') {
        return isAWinner = true;
      } else if (board['3'] === 'X' && board['6'] === 'X' && board['9'] === 'X') {
        return isAWinner = true;
      }
    }
    function determineComputerWinner() {
      if (board['1'] === 'O' && board['2'] === 'O' && board['3'] === 'O') {
        return isAWinner = true;
      } else if (board['4'] === 'O' && board['5'] === 'O' && board['6'] === 'O') {
        return isAWinner = true;
      } else if (board['7'] === 'O' && board['8'] === 'O' && board['9'] === 'O') {
        return isAWinner = true;
      } else if (board['1'] === 'O' && board['5'] === 'O' && board['9'] === 'O') {
        return isAWinner = true;
      } else if (board['3'] === 'O' && board['5'] === 'O' && board['7'] === 'O') {
        return isAWinner = true;
      } else if (board['1'] === 'O' && board['4'] === 'O' && board['7'] === 'O') {
        return isAWinner = true;
      } else if (board['2'] === 'O' && board['5'] === 'O' && board['8'] === 'O') {
        return isAWinner = true;
      } else if (board['3'] === 'O' && board['6'] === 'O' && board['9'] === 'O') {
        return isAWinner = true;
      }
    }
    function determineTie() {
      if (Object.keys(boardOptions).length === 0) {
        return isATie = true;
      }
    }
    
    let userChoice = READLINE.question(dispalyAvailableOptions());

    while (!boardOptions[userChoice]) {
      displayMessages('choiceTaken');
      userChoice = READLINE.question(dispalyAvailableOptions());
    }

    board[userChoice] = 'X'
    delete boardOptions[userChoice];
    displayBoard(board);

    determineUserWinner();
    if (isAWinner === true) { // this breaks the game so it doesn't show a computer choice if the user won
      displayMessages('userWin');
      break;
    }

    determineTie();
    if (isATie === true) {
      displayMessages('tie')
      break;
    }

    let boardOptionsArray = Object.entries(boardOptions);
    let randomOption = boardOptionsArray[Math.floor(Math.random() * boardOptionsArray.length)];
    let computerChoice = randomOption[0]; // this will get the actual number we want, options already chosen have been deleted

    displayMessages('computerChoice');
    board[computerChoice] = 'O';
    delete boardOptions[computerChoice];
    displayBoard(board);

    determineComputerWinner();
    if (isAWinner === true) {
      displayMessages('computerWin');
      break;
    } 
  } 

  playAgainAnswer = READLINE.question(displayMessages('playAgain'))
    .toLowerCase()
    .slice(0, 1);

  while (playAgainAnswer !== 'y' && playAgainAnswer !== 'n') {
    displayMessages('invalidInput');
    playAgainAnswer = READLINE.question(displayMessages('playAgain'));
  }
  
  playAgainAnswer === 'y' ? playAgain = true : playAgain = false;
  if (playAgainAnswer === 'n') {
    displayMessages('goodbye');
  }

  board = initializeBoard();
  displayBoard(board);
}
