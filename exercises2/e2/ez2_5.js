// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

// algorithm
// require readline-sync
// set a variable equal to question of first num
// do same for second num
// set variables equal to numbers
// create template literals to print the results

const  READLINE = require('readline-sync');

let num1 = READLINE.question('Enter in first number: ');
let num2 = READLINE.question('Enter in second number: ');

num1 = Number(num1);
num2 = Number(num2);

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);

/* ==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23 */