// exercise 5 from easy 1

// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

/* What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00 */

// ALGORITHM
  // ask for bill amount - set this equal to a variable
  // ask for a tip percentage - set this equal to a variable - they are entering an integer - not decimal
  // function for tip
  // create a tip variable, set this equal to the bill amount multiplied by (tip percent / 100)
    // need /100 so it is a decimal
  // function for total
  // create a total variable set to bill plus tip variables
  // print results


// complex way with function calls
// const READLINE = require('readline-sync');

// let billAmount = Number(READLINE.question('What is the bill? '));
// let tipPercentage = Number(READLINE.question('What is the tip percentage? '));

// function tipAmount(bill, tipPercent) {
//   let tipTotal = bill * (tipPercent / 100);
//   return tipTotal;
// }

// function totalWithTip(billTotal, tipTotalAmount) {
//   let totalBill = billTotal + tipTotalAmount;
//   return totalBill;
// }

// function printBillInfo() {
//   console.log(`The tip is $${tipAmount(billAmount, tipPercentage)}`);
//   console.log(`The total is $${totalWithTip(billAmount, tipAmount(billAmount, tipPercentage) )}`);
// }

// printBillInfo();

// simple way

// const READLINE = require('readline-sync');

// let billAmount = READLINE.question('Enter in bill amount: ');
// let tipPercent = READLINE.question('Enter in tip amount: ');

// let tipTotal = Number(billAmount) * (Number(tipPercent) / 100);
// let totalBill = Number(billAmount) + tipTotal;

// console.log(`The tip is $${tipTotal.toFixed(2)}`);
// console.log(`The total bill is $${totalBill.toFixed(2)}`);
