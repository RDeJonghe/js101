// PROBLEM
  // create a tic tac toe game
  // do we ask if the user wants to be x or o or just set this
// EXAMPLES
  // rules of the game - 3 consecutive squares wins
// DATA STURCTURES
  // objects to store information
  // string inputs
// ALGORITHM  


/* Display the initial empty 3x3 board.
Ask the user to mark a square.
Computer marks a square.
Display the updated board state.
If it's a winning board, display the winner.
If the board is full, display tie.
If neither player won and the board is not full, go to #2
Play again?
If yes, go to #1
Goodbye! */

// DISPLAY INITIAL BOARD
  // display board function that has string interpolation
  // an object that will store the choices, this is what displays
  // set the object values to empty strings to initalize the board
  // show the empty board

// set playAgain = true - this is first game, can be reset, this is for a loop
// set winner = false and isTie = false, this is used for loop

  // WHILE LOOP - WHILE DETERMINE WINNER IS FALSE and Is a tie is false

// ASK THE USER TO MARK A SQUARE -(save user choice to variable, set object to value of variable)
  // greeting message, let user know they are 'X' and computer is 'O' (or can build it to give choice)
  // show all of the options, top left, top center, top right, etc -
    // make this an object with key value pairs, 1 is top left, 2 is top center etc.
    // if the user chooses one - set that based off of the choice in display board
    // delete the key value that was just chosen.
    // can create a show options function
      // if the object = key value exists show that particular one, after it's chosen that option will disappear
  // require readline sync
    // ask the user to select the space
    // set the object to a value depending on what they select
    // have to validate input
  // display updated board
  // 

// COMPUTER MARKS A SQUARE
  // this needs to be done randomly based off of options already chosen
  // math.floor of math.random * the array of the key value of the choices .length
    // each time the length will change so the choice will be limited to those available
    // this will give us the corresponding key number to go ahead and update the display board object
    // after this is set delete the value in the spaces available object since it is no longer needed

// DISPLAY UPDATED BOARD STATE
  // Call the function to display the board

// DETERMINE IF IT'S A WINNER
  // conditional logic
    // have to run through all of the combos that allow for a winning scenario 16 total
    // display winner
  // check if board is full
    // if full display board
    // if full set is a tie to false
  // TEST if no winner then loop back through

// DETERMINE IF IT'S A TIE
  // can do this just by checking if the object is empty, has values length

// ASK TO PLAY AGAIN
  // y/n set the play again variable off of this
  // have to validate input

// DISPLAY GOODBYE MESSAGE





// display board
// let board = { // THIS JUST USED FOR PRACTICE TO SHOW
//   1 : 'X', // top left
//   2 : ' ', // top center
//   3 : ' ', // top right
//   4 : ' ', // middle left
//   5 : 'O', // center
//   6 : ' ', // middle right
//   7 : ' ', // bottom left
//   8 : ' ', // bottom center
//   9 : 'X' // bottom right
// };


// NOTES - tie function works, so does determine winner
// have to prohibit user from overwriting computer choice,
// also have to find a way to stop the game if there is a winner - it seems if I win the computer still makes a choice, yes have to stop this. (if computer wins it stops)



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

function x_o_message() {
  console.log("User choices will be displayed with an 'X', computer choices with an 'O'");
}

const READLINE = require('readline-sync');

let board = initializeBoard();
displayBoard(board);

let playAgain = true;

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
    x_o_message();
    
    function dispalyAvailableOptions() {
      console.log(`These are the available spaces. Type the number to make a selection. ${Object.values(boardOptions)}`);
    }
    function computerChoiceMessage() {
      console.log('The computer choice is displayed below');
    }
    function userWinsMessage() {
      console.log('You win!');
    }
    function computerWinsMessage() {
      console.log('Computer wins.');
    }
    function determineUserWinner() {
      if (board['1'] === 'X' && board['2'] === 'X' && board['3'] === 'X') {
        userWinsMessage();
        return isAWinner = true;
      } else if (board['4'] === 'X' && board['5'] === 'X' && board['6'] === 'X') {
        userWinsMessage();
        return isAWinner = true;
      } else if (board['7'] === 'X' && board['8'] === 'X' && board['9'] === 'X') {
        userWinsMessage();
        return isAWinner = true;
      } else if (board['1'] === 'X' && board['5'] === 'X' && board['9'] === 'X') {
        userWinsMessage();
        return isAWinner = true;
      } else if (board['3'] === 'X' && board['5'] === 'X' && board['7'] === 'X') {
        userWinsMessage();
        return isAWinner = true;
      } else if (board['1'] === 'X' && board['4'] === 'X' && board['7'] === 'X') {
        userWinsMessage();
        return isAWinner = true;
      } else if (board['2'] === 'X' && board['5'] === 'X' && board['8'] === 'X') {
        userWinsMessage();
        return isAWinner = true;
      } else if (board['3'] === 'X' && board['6'] === 'X' && board['9'] === 'X') {
        userWinsMessage
        return isAWinner = true;
      }
    }
    function determineComputerWinner() {
      if (board['1'] === 'O' && board['2'] === 'O' && board['3'] === 'O') {
        computerWinsMessage();
        return isAWinner = true;
      } else if (board['4'] === 'O' && board['5'] === 'O' && board['6'] === 'O') {
        computerWinsMessage();
        return isAWinner = true;
      } else if (board['7'] === 'O' && board['8'] === 'O' && board['9'] === 'O') {
        computerWinsMessage();
        return isAWinner = true;
      } else if (board['1'] === 'O' && board['5'] === 'O' && board['9'] === 'O') {
        computerWinsMessage();
        return isAWinner = true;
      } else if (board['3'] === 'O' && board['5'] === 'O' && board['7'] === 'O') {
        computerWinsMessage();
        return isAWinner = true;
      } else if (board['1'] === 'O' && board['4'] === 'O' && board['7'] === 'O') {
        computerWinsMessage();
        return isAWinner = true;
      } else if (board['2'] === 'O' && board['5'] === 'O' && board['8'] === 'O') {
        computerWinsMessage();
        return isAWinner = true;
      } else if (board['3'] === 'O' && board['6'] === 'O' && board['9'] === 'O') {
        computerWinsMessage
        return isAWinner = true;
      }
    }
    function determineTie() {
      if (Object.keys(boardOptions).length === 0) {
        console.log('It\'s a tie.');
        return isATie = true;
      }
    }
    

    let userChoice = READLINE.question(dispalyAvailableOptions());

    board[userChoice] = 'X'
    displayBoard(board);
    determineUserWinner();

    // STILL HAVE TO VALIDATE AND NOT LET USER OVERWRITE COMPUTER CHOICE

    delete boardOptions[userChoice];
    console.log(Object.entries(boardOptions));

    // let computerChoice = Math.floor(Math.random() * Object.values(boardOptions).length); // problem with this, it selects squares that have already been taken

    let boardOptionsArray = Object.entries(boardOptions);
    let randomOption = boardOptionsArray[Math.floor(Math.random() * boardOptionsArray.length)];
    let computerChoice = randomOption[0]; // this will get the actual number we want, options already chosen have been deleted
    console.log(randomOption);
    console.log(computerChoice);

    computerChoiceMessage();

    board[computerChoice] = 'O';
    displayBoard(board);

    delete boardOptions[computerChoice];
    console.log(Object.entries(boardOptions));

    // determineUserWinner(); // this was moved above
    determineComputerWinner();
    determineTie();
  } 
  playAgain = false;
}
