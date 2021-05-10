// ALL BONUS FEATURES HERE

const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_NEEDED_TO_WIN_MATCH = 1;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const PLAY_AGAIN_RESPONSES = ['yes', 'y', 'no', 'no'];

let userWins = 0;
let computerWins = 0;
let ties = 0;
let lastGameWinner = '';
let currentPlayer = '';

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

function defensiveOpportunity(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line]
      if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === INITIAL_MARKER
    ) {
      return String(sq3);
    } else if (
        board[sq1] === INITIAL_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return String(sq1);
    }
  }
  return null;
}

function offensiveOpportunity(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line]
      if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === INITIAL_MARKER
    ) {
      return String(sq3);
    } else if (
        board[sq1] === INITIAL_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return String(sq1);
    }
  }
  return null;
}


function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  if (offensiveOpportunity(board)) {
    let offensiveSquare = offensiveOpportunity(board)
    board[offensiveSquare] = COMPUTER_MARKER;
  } else if (defensiveOpportunity(board)) {
    let defensiveSquare = defensiveOpportunity(board);
    board[defensiveSquare] = COMPUTER_MARKER;
  } else if (emptySquares(board).includes('5')) {
    board['5'] = COMPUTER_MARKER;
  }
  else {
    board[square] = COMPUTER_MARKER;
  }
}

function boardFull(board) {
  if (emptySquares(board).length === 0) {
    lastGameWinner = 'No one';
    ties += 1;
  }
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      userWins += 1;
      lastGameWinner = 'You'
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      computerWins += 1;
      lastGameWinner = 'The computer'
      return 'Computer';
    }
  }
  return null;
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === '1') {
    return currentPlayer = '2';
  } 
  if (currentPlayer === '2') {
    return currentPlayer = '1';
  } 
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === '1') {
    playerChoosesSquare(board);
  }
  if (currentPlayer === '2') {
    computerChoosesSquare(board);
  }
}

while (true) {
  userWins = 0; // these have to be set at reset each time so they can reset for the loop.
  computerWins = 0;
  ties = 0;
  lastGameWinner = '';
  currentPlayer = '';

  prompt('Who goes first? Turns will be alternated here on out. Press 1 for yourself, 2 for the computer:')
  currentPlayer = readline.question();

  while (currentPlayer !== '1' && currentPlayer !== '2') { // this validates the input for who goes first
    prompt('Invalid input. Please enter 1 to go first, 2 for the computer to go first:');
    currentPlayer = readline.question();
  }
  
  while (computerWins < GAMES_NEEDED_TO_WIN_MATCH && userWins < GAMES_NEEDED_TO_WIN_MATCH) {
    let board = initializeBoard();
    
    while (true) {
      displayBoard(board);

      if (userWins >= 1 || computerWins >= 1 || ties >= 1) {
      prompt(`${lastGameWinner} won the last individual game.\n`)
      }
      
      prompt(`First to 5. Overall Score ==> Player wins: ${userWins} <<>> Computer wins: ${computerWins} <<>> Ties: ${ties}\n`);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
  }
    displayBoard(board);
  } 

  if (userWins === GAMES_NEEDED_TO_WIN_MATCH) {
    prompt('You won the overall match!\n');
  }
  if (computerWins === GAMES_NEEDED_TO_WIN_MATCH) {
    prompt('The computer won the overall match\n');
  }
  prompt("Play again? Enter 'y' for yes or 'n' for no:");
  let answer = readline.question().toLowerCase().replace(/['"]/g, '');//[0];

  while (!PLAY_AGAIN_RESPONSES.includes(answer)) {
    prompt("Invalid response. Enter 'y' to play again, 'n' to exit");
    answer = readline.question().toLowerCase().replace(/['"]/g, '');
  }
  break;
}

prompt('Thanks for playing Tic Tac Toe!');