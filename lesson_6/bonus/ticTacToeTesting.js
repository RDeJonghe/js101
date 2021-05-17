// TIC TAC TOE GAME

const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_NEEDED_TO_WIN_MATCH = 1;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const MIDDLE_SQUARE = '5';
const PLAY_AGAIN_RESPONSES = ['yes', 'y', 'no', 'n'];

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

  stringArr[stringArr.length - 1] = word + ' ' + stringArr[stringArr.length - 1];

  return stringArr.join(delim);
}

function playerChoosesSquare(board) {
  let square;
  let empty = emptySquares(board);
  let choices = joinOr(empty, ', ', 'or');

  while (true) {
    prompt(`Choose a square (${choices}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function defensiveOpportunity(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
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
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
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
    let offensiveSquare = offensiveOpportunity(board);
    board[offensiveSquare] = COMPUTER_MARKER;
  } else if (defensiveOpportunity(board)) {
    let defensiveSquare = defensiveOpportunity(board);
    board[defensiveSquare] = COMPUTER_MARKER;
  } else if (emptySquares(board).includes('5')) {
    board[MIDDLE_SQUARE] = COMPUTER_MARKER;
  } else {
    board[square] = COMPUTER_MARKER;
  }
}

function boardFull(board) {
  if (emptySquares(board).length === 0) {
    return emptySquares(board).length === 0;
  } else {
    return null;
  }
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    let row = [board[sq1], board[sq2], board[sq3]];

    if (row.every(marker => marker === HUMAN_MARKER)) {
      return 'Player';
    } else if (row.every(marker => marker === COMPUTER_MARKER)) {
      return 'Computer';
    }
  }
  return null;
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === '1') {
    return '2';
  } else {
    return '1';
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

function firstMove() {
  let goesFirst = readline.question("Who goes first? Turns will be alternated here on out. Press 'p' for player, 'c' for the computer: ").toLowerCase();
  while (goesFirst !== 'p' && goesFirst !== 'c') {
    goesFirst = readline.question("Invalid input. Please enter 'p' to go first, 'c' for the computer to go first: ").toLowerCase();
  }
  return goesFirst;
}

function continueToNextGameOrResults() {
  let nextRound = readline.question("Press 'c' to continue: ").toLowerCase();
  while (nextRound !== 'c') {
    nextRound = readline.question("Invalid input, press 'c' to continue: ");
  }
  return nextRound;
}

function askToPlayAgain() {
  prompt("Play again? Enter 'y' for yes or 'n' for no:");
  let answer = readline.question().toLowerCase().replace(/['"]/g, '');//[0];

  while (!PLAY_AGAIN_RESPONSES.includes(answer)) {
    prompt("Invalid response. Enter 'y' to play again, 'n' to exit");
    answer = readline.question().toLowerCase().replace(/['"]/g, '');
  }
  return answer;
}

// let scoreBoard = {
//   userWins : 0,
//   computerWins : 0,
//   ties : 0,
//   lastGameWinner : 0
// }

function displayTournamentWinner() {
  if (scoreBoard.userWins === GAMES_NEEDED_TO_WIN_MATCH) {
    prompt('You won the overall match!\n');
  }
  if (scoreBoard.computerWins === GAMES_NEEDED_TO_WIN_MATCH) {
    prompt('The computer won the overall match\n');
  }
}

prompt('Welcome to tic tac toe!')

while (true) {

  let scoreBoard = {
    userWins : 0,
    computerWins : 0,
    ties : 0,
    lastGameWinner : 0
  }
  
  let currentPlayer = firstMove();
  
  
  while (
    scoreBoard.computerWins < GAMES_NEEDED_TO_WIN_MATCH &&
    scoreBoard.userWins < GAMES_NEEDED_TO_WIN_MATCH
  ) {

    let board = initializeBoard();

    while (true) {
      displayBoard(board);

      if (
        scoreBoard.userWins >= 1 ||
        scoreBoard.computerWins >= 1 ||
        scoreBoard.ties >= 1) {
        prompt(`${scoreBoard.lastGameWinner} won the last individual game.\n`);
      }

      prompt(`First to ${GAMES_NEEDED_TO_WIN_MATCH}. Overall Score ==> Player wins: ${scoreBoard.userWins} <<>> Computer wins: ${scoreBoard.computerWins} <<>> Ties: ${scoreBoard.ties}\n`);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) {
        displayBoard(board);
        continueToNextGameOrResults();
        break;
      }
    }

    displayBoard(board);

    if (someoneWon(board)) {
      if (detectWinner(board) === 'Player') {
        scoreBoard.userWins += 1;
        scoreBoard.lastGameWinner = 'You';
      } else if (detectWinner(board) === 'Computer') {
        scoreBoard.computerWins += 1;
        scoreBoard.lastGameWinner = 'The computer';
      }
    }
    if (boardFull(board)) {
      scoreBoard.ties += 1;
      scoreBoard.lastGameWinner = 'No one';
    }
  }

  // if (scoreBoard.userWins === GAMES_NEEDED_TO_WIN_MATCH) {
  //   prompt('You won the overall match!\n');
  // }
  // if (scoreBoard.computerWins === GAMES_NEEDED_TO_WIN_MATCH) {
  //   prompt('The computer won the overall match\n');
  // }
  displayTournamentWinner();

  let answer = askToPlayAgain();

  if (answer === 'n' || answer === 'no') break;
}

prompt('Thanks for playing Tic Tac Toe!');