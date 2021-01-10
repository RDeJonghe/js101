// Calculator exercise from JS101

const readline = require('readline-sync');
console.log('Welcome to Calculator!');
console.log("What's the first number?");

let number1 = readline.question();
console.log("What's the second number?");
let number2 = readline.question();

console.log('Num 1 is ' + number1 + ' num 2 is ' + number2);

console.log('What operation would you like to perform?\n1) Add 2) Subract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') {
  // Remember readline.question returns a string so it is '1' not 1
  output = Number(number1) + Number(number2); // Since it returns strings this will concatenate if we don't do something about it. So we are using the Number function.
} else if (operation === '2') {
  output = number1 - number2;
} else if (operation === '3') {
  output = number1 * number2;
} else if (operation === '4') {
  output = number1 / number2;
}
console.log(`The result is: ${output}.`);
