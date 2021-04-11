// EASY 1 EXERCISE 6

// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.


/* Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15. */

/* Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720. */

// algorithm
// require readline-sync
// ask user for a number set to variable -REMEMBER READLINE SYNC GETS STRINGS SO THIS WILL HAVE TO BE CONVERTED TO A NUMBER
// set a second variable equal to the number of input - don't want to do Number(readline sync) because '' is 0 - so when validating input this is important
// ask user if they want sum or product - set to variable
// open a conditional
  // if sum
    // open a loop
    // set a total variable equal to zero
    // total = total plus num
    // decrease num by one
  // if product
    // open a loop
    // set total variable = 1 (multiplying)
    // total = total * num
    // decrease num by one
// print results

// OR
  // can do above but push all nums to an array in loop and reduce

// const READLINE = require('readline-sync');

// let strNum = READLINE.question('Enter in a number greater than 0: ');
// let num = Number(strNum);

// let operation = READLINE.question('Enter in "s" for sum, "p" for product: ');

// if (operation === 's') {
//   let sumTotal = 0;
//   while (num > 0) {
//     sumTotal += num;
//     num -= 1;
//   }
//   console.log('The sum is ' + sumTotal);
// }
// if (operation === 'p') {
//   let prodTotal = 1;
//   while (num > 0) {
//     prodTotal *= num;
//     num -= 1;
//   }
//   console.log('The product is ' + prodTotal);
// }


// with reduce

// const READLINE = require('readline-sync');

// let strNum = READLINE.question('Enter in an integer greater than 0: ');
// let num = Number(strNum);

// let operation = READLINE.question('Enter in "s" to compute sum, "p" to compute product: ');

// let numArr = [];

// while (num > 0) {
//   numArr.push(num);
//   num -= 1;
// }

// if (operation === 's') {
//   console.log(`the sum of all numbers between 1 and ${strNum} is ${numArr.reduce((accum, el) => accum + el, 0)}`);
// }
// if (operation === 'p') {
//   console.log(`The product of all numbers between 1 and ${strNum} is ${numArr.reduce((accum, el) => accum * el, 1)}`);
// }



