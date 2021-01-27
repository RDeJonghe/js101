/* Give us your feedback
Arithmetic Integer
Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input. */

/* ==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103 */

const READLINE = require('readline-sync');

let addTotal = 0;
let subTotal = 0;
let mulTotal = 0;
let divTotal = 0;
let remTotal = 0;
let powTotal = 0;

function showUser(num1, num2) {
  console.log(`${num1} + ${num2} = ${addTotal}`);
  console.log(`${num1} - ${num2} = ${subTotal}`);
  console.log(`${num1} * ${num2} = ${mulTotal}`);
  console.log(`${num1} / ${num2} = ${divTotal}`);
  console.log(`${num1} % ${num2} = ${remTotal}`);
  console.log(`${num1} ** ${num2} = ${powTotal}`);
}

function allOperations(num1, num2) {
  addTotal = num1 + num2;
  subTotal = num1 - num2;
  mulTotal = num1 * num2;
  divTotal = num1 / num2;
  remTotal = num1 % num2;
  powTotal = Math.pow(num1, num2);
  showUser(num1, num2);
}

let number1 = parseInt(READLINE.question('Please enter in a positive integer: '));
let number2 = parseInt(READLINE.question('Please enter in a second positive integer: '));

allOperations(number1, number2);