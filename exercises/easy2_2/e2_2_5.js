// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

const READLINE = require('readline-sync');

let num1 = parseInt(READLINE.question('Enter the first number: '));
let num2 = parseInt(READLINE.question('Enter the second number: '));

let add = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let rem = num1 % num2;
let pow = num1 ** num2;

function print() {
  console.log(num1 + ' + ' + num2 + ' = ' + add);
  console.log(num1 + ' - ' + num2 + ' = ' + sub);
  console.log(num1 + ' * ' + num2 + ' = ' + mult);
  console.log(num1 + ' / ' + num2 + ' = ' + div);
  console.log(num1 + ' % ' + num2 + ' = ' + rem);
  console.log(num1 + ' ** ' + num2 + ' = ' + pow);
}

print();

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23
