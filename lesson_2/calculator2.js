// Calculator Exercise from Lesson 2 of JS101

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// First, trying it with the browser and prompt. Good effort for first time. Couldn't get an error message to show properly so more practice.

let input1;
let input2;
let operation;
let result;

function getNumber1(numEntered1) {
  input1 = prompt(numEntered1);
  return input1;
}

function getNumber2(numEntered2) {
  input2 = prompt(numEntered2);
  return input2;
}

function getOperation(operationEntered) {
  operation = prompt(operationEntered);
  return operation;
}

getNumber1('Please enter a number.');

if (Number.isNaN(Number(input1)) === true) {
  console.log('Please enter a number');
}

getNumber2('Please enter a second number.');
getOperation('Please type in the operation you would like: add, subtract, multiply, divide');

if (operation.toLowerCase() === 'add') {
  result = +input1 + +input2; // the unary + operator converts to number so you can add. If not 5 + 6 shows 56 and concatenates. The prompt() must return a string since the + operator will concatenate strings. I tried Number function but maybe try again.
} else if (operation.toLowerCase() === 'subtract') {
  result = input1 - input2;
} else if (operation.toLowerCase() === 'multiply') {
  result = input1 * input2;
} else if (operation.toLowerCase() === 'divide') {
  result = input1 / input2;
} else if (operation === '+') {
  result = +input1 + +input2;
} else if (operation === '-') {
  result = input1 - input2;
} else if (operation === '*') {
  result = input1 * input2;
} else if (operation === '/') {
  result = input1 / input2;
} else {
  console.log('The operation you entered is not valid. Please refresh and submit a correct entry.');
}

if (result) {
  // This is going to check if result is truthy, that way it won't print the result is undefined / incorrect entry
  console.log(`The result is ${result}.`);
}

// this typeof here works, but I can't get it to work in the code with the inputs
/* let testInput = 'string';

if (typeof testInput !== 'number') {
  console.log('not a number');
} */

// These I couldn't get to work:
/*if (typeof input2 !== 'number') {
    console.log('The second number you entered is not valid. Please refresh the browser and enter in a valid number');
  }*/
/*if (typeof input1 !== 'number') {
    console.log('The first number you entered is not valid. Please refresh the browser and enter in a valid number.');
  }*/
