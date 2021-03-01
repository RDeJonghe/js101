// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

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

const READLINE = require('readline-sync');

let num1 = READLINE.question('Enter the first number: ');
let num2 = READLINE.question('Enter the second number: ');
let num3 = READLINE.question('Enter the third number: ');
let num4 = READLINE.question('Enter the fourth number: ');
let num5 = READLINE.question('Enter the fifth number: ');
let num6 = READLINE.question('Enter the sixth number: ');

let numArr = [num1, num2, num3, num4, num5];
let nums = numArr.join(',');

if (numArr.includes(num6)) {
  console.log(`The number ${num6} appears in ${nums}.`)
}
if (!numArr.includes(num6)) {
  console.log(`The number ${num6} does not appear in ${nums}.`)
}

// const READLINE = require('readline-sync');

// let msgNums = ['1st', '2nd', '3rd'];
// let nums = [];

// for (let i = 0; i < msgNums.length; i++) {
//   nums.push(READLINE.question(`Enter the ${msgNums[i]} number: `));
// }
// console.log(nums);
