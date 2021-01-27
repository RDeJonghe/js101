// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Get number from user with readline-sync
// Get product or sum question
// Take whatever number and determine all the numbers between 1 and the entered number (including entered number)
// With that result either sum all of those number, or multiply them all together

const READLINE = require('readline-sync');
let num = parseInt(READLINE.question('Please enter in an integer greater than 0: '));
let operation = READLINE.question('Enter "s" to compute the sum, or "p" to compute the product: ');
let sumNum = 0;
let prodNum = 1;
let originalNum = num;

if (operation === 's') {
  for (num; num > 0; num -= 1) {
    sumNum += num;
  }
  console.log(`The sum of all integers between 1 and ${originalNum} is ${sumNum}.`);
}

if (operation === 'p') {
  for (num; num > 0; num -= 1) {
    prodNum *= num;
  }
  console.log(`The product of all integers between 1 and ${originalNum} is ${prodNum}.`);
}


