// ALL BONUS FEATURES HERE

// firstMove branch




const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_NEEDED_TO_WIN_MATCH = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
let userWins = 0;
let computerWins = 0;
let ties = 0;

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


// defensive opportunity
  // iterate over winning lines
  // use array destructuring assignment to create variables
  // check for human markers and initial markers
  // if a defensive opportunity return String(variable) to get a string number to use

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
  // if offensiveOpportunity
    // let offenseSquare = offensiveOpportunity
    // board[offensiveOpportunity] = computer marker
  // if defensive opportunity
    // let defenseSquare = defensiveOpportunity
    // board[defensiveOpporunity] = computer marker
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
    ties += 1;
  }
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  // let winningLines = [ // MOVED TO GLOBAL CONSTANT VARIABLE
  //   [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  //   [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  //   [1, 5, 9], [3, 5, 7]             // diagonals
  // ];

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      userWins += 1;
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      computerWins += 1;
      return 'Computer';
    }
  }

  return null;
}
 

// ALGORITHM
  // Need to ask who goes first, the user or the computer?
  // Based off of answer need to alternate between who picks
  // This can stay the same for the best of 5 - each new best of 5 can choose who picks first

  // prompt => who goes first 1 player, 2, computer?
  // set a firstMove variable to readline.question to get the answer
    // validate this input
  // create an alternate player function
  // this will take the initial answer for who goes first as an input



while (true) {
  // let userWins = 0;
  // let computerWins = 0;
  // let ties = 0;
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
        // userWins += 1;
        lastGameWinner = 'You' // added
        break;
      }
      if (boardFull(board)) {
        lastGameWinner = 'No one';
        // ties += 1;
        break;
      }
      computerChoosesSquare(board);
      if (someoneWon(board) /*|| boardFull(board)*/) {
        lastGameWinner = 'The computer'
        // computerWins += 1; // added
        break;
      }
      if (boardFull(board)) { // THIS ISN'T NEEDED, THE COMPUTER CAN NEVER CHOOSE AND TIE.
        // ties += 1;
        break
      }
      
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