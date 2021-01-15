// MERGED while_testing BRANCH. Branch deleted.

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
const DISPLAY = require('./messages_displayed.json');

function userMessages(messageDisplayed) {
  console.log(`>>> ${messageDisplayed}`);
}

userMessages(DISPLAY['language']);
let language = readline.question().replace(/['"]+/g, '').trim().toLowerCase().replace('glish', '').replace('pañol', '');
// double check first replace for quotes.

while (language !== 'en' && language !== 'es') {
  userMessages(DISPLAY['language error']);
  userMessages(DISPLAY['language']);
  language = readline.question().trim().toLowerCase().replace('glish', '').replace('pañol', '');
}

userMessages(DISPLAY[language]['loan']);
let loanAmount = readline.question('$').replace('$', '').replace(',', '');
loanAmount = parseFloat(loanAmount);

while (Number.isNaN(loanAmount) || !Number.isInteger(loanAmount)) {
  if (Number.isNaN(loanAmount)) {
    userMessages(DISPLAY[language]['entered NaN']);
    userMessages(DISPLAY[language]['loan']);
    loanAmount = parseFloat(readline.question('$').replace('$', '').replace(',', '')); // added .replace looks to work.
  } else if (!Number.isInteger(loanAmount)) {
    userMessages(DISPLAY[language]['has decimal']);
    loanAmount = Math.round(loanAmount);
    userMessages(`${DISPLAY[language]['rounded']} $${loanAmount}`);
  }
}

userMessages(DISPLAY[language]['credit score']);
let creditScore = parseFloat(readline.question());

while (Number.isNaN(creditScore) || (creditScore < 300 || creditScore > 850) || !Number.isInteger(creditScore)) {
  if (Number.isNaN(creditScore)) {
    userMessages(DISPLAY[language]['entered NaN']);
    creditScore = parseFloat(readline.question());
  } else if (creditScore < 300 || creditScore > 850) {
    userMessages(DISPLAY[language]['out of range']);
    creditScore = parseFloat(readline.question());
  } else if (!Number.isInteger(creditScore)) {
    creditScore = Math.round(creditScore);
    userMessages(`${DISPLAY[language]['credit score is']} ${creditScore}`);
  }
}

let apr;
if (creditScore < 630) {
  apr = DISPLAY['credit']['bad'];
  userMessages(`${DISPLAY[language]['apr message']} ${apr}%`);
} else if (creditScore >= 630 && creditScore < 720) {
  apr = DISPLAY['credit']['average'];
  userMessages(`${DISPLAY[language]['apr message']} ${apr}%`);
} else if (creditScore >= 720) {
  apr = DISPLAY['credit']['good'];
  userMessages(`${DISPLAY[language]['apr message']} ${apr}%`);
}

userMessages(DISPLAY[language]['loan duration']);
let loanYears = parseFloat(readline.question(`${DISPLAY[language]['pm4']}`));
let loanMonths = parseFloat(readline.question(`${DISPLAY[language]['pm5']}`));

while (
  isNaN(loanYears) ||
  !Number.isInteger(loanYears) ||
  !Number.isInteger(loanMonths) ||
  (loanYears === 0 && loanMonths === 0)
) {
  if (isNaN(loanYears)) {
    userMessages(DISPLAY[language]['invalid year']);
    loanYears = parseFloat(readline.question('YEARS: '));
    loanMonths = parseFloat(readline.question('MONTHS: '));
  } else if (!Number.isInteger(loanYears)) {
    userMessages(DISPLAY[language]['decimal year']);
    loanYears = parseFloat(readline.question('YEARS: '));
    loanMonths = parseFloat(readline.question('MONTHS: '));
  } else if (!Number.isInteger(loanMonths)) {
    userMessages(DISPLAY[language]['invalid month']);
    loanYears = parseFloat(readline.question('YEARS: '));
    loanMonths = parseFloat(readline.question('MONTHS: ')); // don't need seperate decimal edge case for months, it just says invalid entry, no one is like 2.5 months the way you talk like 2.5 years.
  }
  if (loanYears === 0 && loanMonths === 0) {
    userMessages(DISPLAY[language]['zero year and month']);
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

let totalPaid = monthlyPayment * loanDuration;
let totalInterest = totalPaid - loanAmount;
// prettier-ignore
let percentInterest = (totalInterest / totalPaid) * 100;
let percentPrincipal = loanAmount / totalPaid * 100;

// prettier-ignore
// userMessages(`${DISPLAY[language]['pm']} $${monthlyPayment.toFixed(2)} ${DISPLAY[language]['pm2']} $${loanAmount} ${DISPLAY     [language]['pm3']} ${loanYears} ${DISPLAY[language]['pm4']} ${loanMonths} ${DISPLAY[language]['pm5']}`);

userMessages(`${DISPLAY[language]['pm']} $${monthlyPayment.toFixed(2)}.`);
userMessages(`${DISPLAY[language]['pm2']} $${loanAmount}.`);
userMessages(`${DISPLAY[language]['pm3']}`);
userMessages(`${DISPLAY[language]['pm4']} ${loanYears}`);
userMessages(`${DISPLAY[language]['pm5']} ${loanMonths}`);

// prettier-ignore
userMessages(`${DISPLAY[language]['total paid']} $${totalPaid.toFixed(2)}. ${DISPLAY[language]['total interest']} $${totalInterest.toFixed(2)}.`);

// prettier-ignore

userMessages(`${DISPLAY[language]['percent interest']} ${percentInterest.toFixed(0)}% ${DISPLAY[language]['percent principal']} ${percentPrincipal.toFixed(0)}%.`)
