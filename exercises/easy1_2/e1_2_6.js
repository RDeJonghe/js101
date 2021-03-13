// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

const READLINE = require('readline-sync');

let num = parseInt(READLINE.question('Enter in an integer greater than 0: '));
let op = READLINE.question('Enter "s" for sum, "p" for product: ')

function calc(num, op) {
  let numArr = [];
  if (op === 's') {
    while (num > 0) {
      numArr.push(num);
      num --;
    }
    return numArr.reduce((accum, el) => accum += el);
  }
  if (op === 'p') {
    while (num > 0) {
      numArr.push(num);
      num --;
    }
    return numArr.reduce((accum, el) => accum * el);
  }
}

console.log(calc(num, op));



// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.