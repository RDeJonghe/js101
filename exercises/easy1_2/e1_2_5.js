// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

const READLINE = require('readline-sync');

let amount = parseFloat(READLINE.question('Bill amount: '));
let percentage = parseFloat(READLINE.question('Tip %: '));


function tip(bill, percent) {
  let tipTotal = bill * (percent / 100);
  let billTotal = bill + tipTotal;
  return `The tip is $${tipTotal.toFixed(2)} \nThe total is $${billTotal.toFixed(2)}`
}

// console.log(tip(amount, percentage));

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

