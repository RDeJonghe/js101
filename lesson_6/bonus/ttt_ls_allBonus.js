// ALL BONUS FEATURES HERE



const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_NEEDED_TO_WIN_MATCH = 5;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function joinOr(arr, delim = ', ', word = 'or') {
  if (arr.length === 0 || arr.length === 1) {
    return String(arr);
  }

  let stringArr = arr.map(num => String(num));

  if (stringArr.length === 2) {
    return stringArr[0] + ' ' + word + ' ' + stringArr[1];
  }
  
  stringArr[stringArr.length - 1] = word + ' ' + stringArr[stringArr.length - 1]

  return stringArr.join(delim);
} 

function playerChoosesSquare(board) {
  let square;
  let empty = emptySquares(board); // added for joinOr
  let choices = joinOr(empty, ', ', 'or'); // added for joinOr

  while (true) {
    prompt(`Choose a square (${choices}):`); // added for joinOr
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}
 

// ALGORITHM
  // set a global constant for overall win at 5 for 5 games
  // welcome user with best of 5 message
  // need a match loop
    // will stay in this loop until user or computer wins 5 games
    // need a win counter for the computer
    // need a win counter for the user
    // need to display the score
    // need to break the loop when someone has 5 wins



while (true) {
  let userWins = 0;
  let computerWins = 0;
  let ties = 0;
  let lastGameWinner = '';
  
  while (computerWins < GAMES_NEEDED_TO_WIN_MATCH && userWins < GAMES_NEEDED_TO_WIN_MATCH) {
    let board = initializeBoard();
    
    while (true) {
    displayBoard(board);

      if (userWins >= 1 || computerWins >= 1 || ties >= 1) {
      prompt(`${lastGameWinner} won the last individual game.\n`)
      }
      
      prompt(`First to 5. Overall Score ==> Player wins: ${userWins} <<>> Computer wins: ${computerWins} <<>> Ties: ${ties}\n`);

      playerChoosesSquare(board);
      if (someoneWon(board) /*|| boardFull(board)*/) {
        userWins += 1;
        lastGameWinner = 'You' // added
        break;
      }
      if (boardFull(board)) {
        lastGameWinner = 'No one';
        ties += 1;
        break;
      }
      computerChoosesSquare(board);
      if (someoneWon(board) /*|| boardFull(board)*/) {
        lastGameWinner = 'The computer'
        computerWins += 1; // added
        break;
      }
      // if (boardFull(board)) { // THIS ISN'T NEEDED, THE COMPUTER CAN NEVER CHOOSE AND TIE.
      //   ties += 1;
      //   break
      // }
      
  }
  displayBoard(board);

  // if (someoneWon(board)) {  // REFACTORED USING THE LAST GAME WINNER FLAG
  //   prompt(`${detectWinner(board)} won!`);
  // } else {
  //   prompt("It's a tie!");
  // }
  } 
    if (userWins === GAMES_NEEDED_TO_WIN_MATCH) {
      prompt('You won the overall match!\n');
    }
    if (computerWins === GAMES_NEEDED_TO_WIN_MATCH) {
      prompt('The computer won the overall match\n');
    }


    prompt('Play again?');
    let answer = readline.question().toLowerCase()[0];
    if (answer !== 'y') break;


}

prompt('Thanks for playing Tic Tac Toe!');