// keep score
// Keep track of how many times the player and computer each win, and report the scores after each game. The first player to win 5 games wins the overall match (a series of 2 or more games). The score should reset to 0 for each player when beginning a new match. Don't use any global variables. However, you may want to use a global constant to represent the number of games needed to win the match.

// ALGORITHM
  // set a global constant for overall win at 5 for 5 games
  // welcome user with best of 5 message
  // need a match loop
    // will stay in this loop until user or computer wins 5 games
    // need a win counter for the computer
    // need a win counter for the user
    // need to display the score
    // need to break the loop when someone has 5 wins


const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
// const GAMES_NEEDED_TO_WIN_MATCH = 5; not used here this refactor was done somewhere else

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

  // code for 1st bonus feature
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
      userWins += 1;// add win total here for player
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      computerWins += 1; // add win total here for computer
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
  let board = initializeBoard();
  // variables here for computer and user wins
  let computerWins = 0;
  let userWins = 0;



  while (userWins < 5 && computerWins < 5/*true*/) {
     displayBoard(board);

    // need code here to display overall score
    prompt(`Best of 5\nComputer wins: ${computerWins}\nUser wins:${userWins}`);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) //break; 

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) //break;

  
  
  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
// put a match prompt here - still going, or a message for who won overall match when that happens
 

  // only show when 5 wins
  prompt('Play again?');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
  }



prompt('Thanks for playing Tic Tac Toe!');
