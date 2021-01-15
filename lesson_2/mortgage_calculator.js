// BRANCH: while_testing

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

function userMessages(messageDisplayed) {
  console.log(`>>> ${messageDisplayed}`);
}

userMessages(MESSAGES_DISPLAYED['language']);
let language = readline.question().replace(/['"]+/g, '').trim().toLowerCase().replace('glish', '').replace('pañol', '');
// double check first replace for quotes.

while (language !== 'en' && language !== 'es') {
  userMessages(MESSAGES_DISPLAYED['language error']);
  userMessages(MESSAGES_DISPLAYED['language']);
  language = readline.question().trim().toLowerCase().replace('glish', '').replace('pañol', '');
}

userMessages(MESSAGES_DISPLAYED[language]['loan']);
let loanAmount = readline.question('$').replace('$', '').replace(',', '');
loanAmount = parseFloat(loanAmount);

while (Number.isNaN(loanAmount) || !Number.isInteger(loanAmount)) {
  if (Number.isNaN(loanAmount)) {
    userMessages(MESSAGES_DISPLAYED[language]['entered NaN']);
    userMessages(MESSAGES_DISPLAYED[language]['loan']);
    loanAmount = parseFloat(readline.question('$').replace('$', '').replace(',', '')); // added .replace looks to work.
  } else if (!Number.isInteger(loanAmount)) {
    userMessages(MESSAGES_DISPLAYED[language]['has decimal']);
    loanAmount = Math.round(loanAmount);
    userMessages(`${MESSAGES_DISPLAYED[language]['rounded']} $${loanAmount}`);
  }
}

userMessages(MESSAGES_DISPLAYED[language]['credit score']);
let creditScore = parseFloat(readline.question());

while (Number.isNaN(creditScore) || (creditScore < 300 || creditScore > 850) || !Number.isInteger(creditScore)) {
  if (Number.isNaN(creditScore)) {
    userMessages(MESSAGES_DISPLAYED[language]['entered NaN']);
    creditScore = parseFloat(readline.question());
  } else if (creditScore < 300 || creditScore > 850) {
    userMessages(MESSAGES_DISPLAYED[language]['out of range']);
    creditScore = parseFloat(readline.question());
  } else if (!Number.isInteger(creditScore)) {
    creditScore = Math.round(creditScore);
    userMessages(`${MESSAGES_DISPLAYED[language]['credit score is']} ${creditScore}`);
  }
}

let apr;
if (creditScore < 630) {
  apr = MESSAGES_DISPLAYED['credit']['bad'];
  userMessages(`${MESSAGES_DISPLAYED[language]['apr message']} ${apr}%`);
} else if (creditScore >= 630 && creditScore < 720) {
  apr = MESSAGES_DISPLAYED['credit']['average'];
  userMessages(`${MESSAGES_DISPLAYED[language]['apr message']} ${apr}%`);
} else if (creditScore >= 720) {
  apr = MESSAGES_DISPLAYED['credit']['good'];
  userMessages(`${MESSAGES_DISPLAYED[language]['apr message']} ${apr}%`);
}

userMessages(MESSAGES_DISPLAYED[language]['loan duration']);
let loanYears = parseFloat(readline.question('YEARS: '));
let loanMonths = parseFloat(readline.question('MONTHS: '));

while (
  isNaN(loanYears) ||
  !Number.isInteger(loanYears) ||
  !Number.isInteger(loanMonths) ||
  (loanYears === 0 && loanMonths === 0)
) {
  if (isNaN(loanYears)) {
    userMessages(MESSAGES_DISPLAYED[language]['invalid year']);
    loanYears = parseFloat(readline.question('YEARS: '));
    loanMonths = parseFloat(readline.question('MONTHS: '));
  } else if (!Number.isInteger(loanYears)) {
    userMessages(MESSAGES_DISPLAYED[language]['decimal year']);
    loanYears = parseFloat(readline.question('YEARS: '));
    loanMonths = parseFloat(readline.question('MONTHS: '));
  } else if (!Number.isInteger(loanMonths)) {
    userMessages(MESSAGES_DISPLAYED[language]['invalid month']);
    loanYears = parseFloat(readline.question('YEARS: '));
    loanMonths = parseFloat(readline.question('MONTHS: ')); // don't need seperate decimal edge case for months, it just says invalid entry, no one is like 2.5 months the way you talk like 2.5 years.
  }
  if (loanYears === 0 && loanMonths === 0) {
    userMessages(MESSAGES_DISPLAYED[language]['zero year and month']);
    loanYears = parseFloat(readline.question('YEARS: '));
    loanMonths = parseFloat(readline.question('MONTHS: '));
  }
}

let yearsToMonths = loanYears * 12;

let loanDuration = yearsToMonths + loanMonths;

// prettier-ignore
let monthlyInterestRate = (apr / 12) / 100;

// prettier-ignore
let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

userMessages(`${MESSAGES_DISPLAYED[language]['payment message']} $${monthlyPayment.toFixed(2)}`);
