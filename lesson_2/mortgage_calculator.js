// Mortgage Calculator Assignment from JS101

/* PSEUDO CODE
- Ask for the loan amount
- Ask for credit score to determine the APR
- Determine and print the APR
- Ask for the loan duration
- with above info calculate monthly interest rate and loan duration
- using formula, calculate monthly payment
- ask if they would like to perform another calcuation
*/

/* FORMAL PSEUDO CODE
START
GET loan amount
GET credit score
SET APR
IF/ELSE determine APR based on credit
  - READ APR info from json file
  - DETERMINE APR
  - PRINT APR
GET loan duration
SET monthly interest rate
SET loan duration
FUNCTION monthly interest rate
FUNCTION load duration
FUNCTION montly payment - use formula
GET perform another calculation
*/

const readline = require('readline-sync'); // I think readline sync returns strings!!!
const MESSAGES_DISPLAYED = require('./messages_displayed.json');
// require json files here when it is made (messages file and rates file)

function userMessages(messageDisplayed) {
  console.log(`>>> ${messageDisplayed}`);
}

userMessages(MESSAGES_DISPLAYED['language']); // also have to take out ' and ' in 'en' in case they enter that
let language = readline.question().replace(/['"]+/g, '').trim().toLowerCase().replace('glish', '').replace('pañol', '');
console.log('this is the language' + ' ' + language);

while (language !== 'en' && language !== 'es') {
  userMessages(MESSAGES_DISPLAYED['language error']);
  userMessages(MESSAGES_DISPLAYED['language']);
  language = readline.question().trim().toLowerCase().replace('glish', '').replace('pañol', '');
}

userMessages(MESSAGES_DISPLAYED[language]['loan']);
//let loanAmount = parseFloat(readline.question());
let loanAmount = readline.question('$').replace('$', '').replace(',', '');
//loanAmount = loanAmount.replace('$', ''); Included above
//loanAmount = loanAmount.replace(',', ''); Included above
loanAmount = parseFloat(loanAmount);

while (Number.isNaN(loanAmount)) {
  userMessages(MESSAGES_DISPLAYED[language]['entered NaN']);
  userMessages(MESSAGES_DISPLAYED[language]['loan']);
  loanAmount = parseFloat(readline.question('$'));
}

if (!Number.isInteger(loanAmount)) {
  userMessages(MESSAGES_DISPLAYED[language]['has decimal']);
  loanAmount = Math.round(loanAmount);
  userMessages(`${MESSAGES_DISPLAYED[language]['rounded']} $${loanAmount}`);
}
console.log(loanAmount);

userMessages(MESSAGES_DISPLAYED[language]['credit score']);
let creditScore = parseFloat(readline.question());

// Have to make sure entry for credit score is a valid number here, just like above with loan amount
// Also make sure it is within range of credit score numbers between y and z.

let apr;
if (creditScore < 630) {
  apr = MESSAGES_DISPLAYED['credit']['bad'];
  userMessages(`${MESSAGES_DISPLAYED[language]['apr message']} ${apr}%`);
}

userMessages(MESSAGES_DISPLAYED[language]['loan duration']);
let loanYears = parseFloat(readline.question('YEARS: '));

/*
// prettier-ignore
while (!(loanYears.isInteger)) { // not working
  userMessages(MESSAGES_DISPLAYED[language]['invalid year']);
  loanYears = parseFloat(readline.question('YEARZ: ')); // not breaking out of the loop, check that number is set to integer
}
*/

let loanMonths = parseFloat(readline.question('MONTHS: '));

// Have to check for valid entries, no decimals in years, check that 0 gets set if they skip the question and only enter months

let yearsToMonths = loanYears * 12;
console.log(yearsToMonths);
let loanDuration = yearsToMonths + loanMonths;

console.log(loanDuration);

// prettier-ignore
let monthlyInterestRate = (apr / 12) / 100;

console.log(monthlyInterestRate);

// prettier-ignore
let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

// Also look for another way to round to practice, use some of the built in objects
function rounder(value, precision) {
  // This doesn't leave 0 on decimals 47.00
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

let roundedMonthlyPayment = rounder(monthlyPayment, 2);
console.log(`Your monthly payment is: ${monthlyPayment}`);
console.log(`Your rounded monthly payment is: ${roundedMonthlyPayment}`);
