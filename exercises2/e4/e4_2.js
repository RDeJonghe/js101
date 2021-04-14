// Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

/* Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23. */

// ALGORITHM
// require 'readline-sync'
// set variables to readline.question asking for a number
// set an array equal to the first five numbers
// check to see if the first number appears, log output and answer

const READLINE = require('readline-sync');

let num1 = READLINE.question('Enter the 1st number: ');
let num2 = READLINE.question('Enter the 2nd number: ');
let num3 = READLINE.question('Enter the 3rd number: ');
let num4 = READLINE.question('Enter the 4th number: ');
let num5 = READLINE.question('Enter the 5th number: ');
let num6 = READLINE.question('Enter the 6th number: ');

let firstFiveNumsArr = [num1, num2, num3, num4, num5];
let firstFiveNumsStr = firstFiveNumsArr.join();

// if (firstFiveNumsArr.includes(num6)) {
//   console.log(`The number ${num6} appears in ${firstFiveNumsStr}.`)
// } else {
//   console.log(`The number ${num6} does not appear in ${firstFiveNumsStr}.`)
// }

// refactored with .some

if (firstFiveNumsArr.some(el => el === num6)) {
  console.log(`The number ${num6} appears in ${firstFiveNumsStr}.`)
} else {
  console.log(`The number ${num6} does not appear in ${firstFiveNumsStr}.`)
}