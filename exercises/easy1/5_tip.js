//Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

const READLINE = require('readline-sync');

console.log('Enter in the amount of the bill.');

let bill = parseFloat(READLINE.prompt());

console.log('What is the tip percentage?');

let tipPercent = parseFloat(READLINE.prompt());

let tipAmount = (tipPercent / 100) * bill;

let total = tipAmount + bill;

console.log(`The tip is $${tipAmount.toFixed(2)} and the total with tip is $${total.toFixed(2)}`);
