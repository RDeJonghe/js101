// Mortgage Calculator Assignment from JS101
// Refactored based on feedback

const readline = require('readline-sync');
const DISPLAY = require('./messages_displayed.json');

let again;
let language = null;
let loanYears;
let loanMonths;
let yearsToMonths;
let loanDuration;
let loanAmount;

function userMessages(messageDisplayed) {
  console.log(`>>> ${messageDisplayed}`);
}

function languageCleanUp(languageVar) {
  language = languageVar.replace(/['"]+/g, '')
    .trim()
    .toLowerCase()
    .replace('glish', '')
    .replace('pañol', '')
    .replace('panol', '');
}

function showUser(key) {
  userMessages(DISPLAY[language][key]);
}

function languageMessage(key) {
  userMessages(DISPLAY[key]);
}

function loanDurationError(key) {
  userMessages(DISPLAY[language][key]);
  loanYears = parseFloat(readline.question(`${DISPLAY[language]['pm4']}`));
  loanMonths = parseFloat(readline.question(`${DISPLAY[language]['pm5']}`));
  yearsToMonths = loanYears * 12;
  loanDuration = yearsToMonths + loanMonths;
}

function againCleanUp () {
  again = again.replace(/['"]+/g, '')
    .trim()
    .toLowerCase();
}

while (again !== 'no') {

  while (language === null) {
    languageMessage('language');
    language = readline.question();
    languageCleanUp(language);
  }
  while (language !== 'en' && language !== 'es') {
    languageMessage('language error');
    languageMessage('language');
    language = readline.question();
    languageCleanUp(language);
  }

  showUser('loan');
  loanAmount = readline.question('$')
    .replace('$', '')
    .replace(/[,]+/g, '');
  loanAmount = parseFloat(loanAmount);

  while (Number.isNaN(loanAmount) ||
    !Number.isInteger(loanAmount) ||
    Math.sign(loanAmount) !== 1) {
    if (Number.isNaN(loanAmount)) {
      showUser('entered NaN');
      showUser('loan');
      loanAmount = parseFloat(readline.question('$')
        .replace('$', '')
        .replace(/[,]+/g, ''));
    } else if (!Number.isInteger(loanAmount)) {
      showUser('has decimal');
      loanAmount = Math.round(loanAmount);
      userMessages(
        `${DISPLAY[language]['rounded']} ${loanAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
      );
    } else if (Math.sign(loanAmount) !== 1) {
      showUser('invalid loan');
      loanAmount = parseFloat(readline.question('$')
        .replace('$', '')
        .replace(/[,]+/g, ''));
    }
  }

  userMessages(DISPLAY[language]['credit score']);
  let creditScore = parseFloat(readline.question());

  const MIN_CREDIT_SCORE = 300;
  const MAX_CREDIT_SCORE = 850;

  while (
    Number.isNaN(creditScore) ||
    (creditScore < MIN_CREDIT_SCORE || creditScore > MAX_CREDIT_SCORE) ||
    !Number.isInteger(creditScore)
  ) {
    if (Number.isNaN(creditScore)) {
      showUser('entered NaN');
      creditScore = parseFloat(readline.question());
    } else if (creditScore < 300 || creditScore > 850) {
      showUser('out of range');
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

  showUser('loan duration');
  loanYears = parseFloat(readline.question(`${DISPLAY[language]['pm4']}`));
  loanMonths = parseFloat(readline.question(`${DISPLAY[language]['pm5']}`));
  yearsToMonths = loanYears * 12;
  loanDuration = yearsToMonths + loanMonths;

  while (
    isNaN(loanYears) ||
    !Number.isInteger(loanYears) ||
    !Number.isInteger(loanMonths) ||
    (loanYears === 0 && loanMonths === 0) ||
    loanDuration > 360 ||
    (Math.sign(loanYears) !== 1 && Math.sign(loanYears) !== 0) ||
    (Math.sign(loanMonths) !== 1 && Math.sign(loanMonths) !== 0)
  ) {
    if (isNaN(loanYears)) {
      loanDurationError('invalid year');
    } else if (!Number.isInteger(loanYears)) {
      loanDurationError('decimal year');
    } else if (!Number.isInteger(loanMonths)) {
      loanDurationError('invalid month');
    } else if (loanYears === 0 && loanMonths === 0) {
      loanDurationError('zero year and month');
    } else if (loanDuration > 360) {
      loanDurationError('max duration');
    } else if ((Math.sign(loanYears) !== 1 && Math.sign(loanYears) !== 0) ||
      (Math.sign(loanMonths) !== 1 && Math.sign(loanMonths) !== 0)) {
      loanDurationError('negative duration');
    }
  }

  let monthlyInterestRate = (apr / 12) / 100;

  let monthlyPayment = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

  let totalPaid = monthlyPayment * loanDuration;

  let totalInterest = totalPaid - loanAmount;

  let percentInterest = (totalInterest / totalPaid) * 100;

  let percentPrincipal = loanAmount / totalPaid * 100;

  userMessages(`${DISPLAY[language]['pm']} ${monthlyPayment
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`);

  userMessages(`${DISPLAY[language]['pm2']} ${loanAmount
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`);

  userMessages(`${DISPLAY[language]['pm3']}`);

  userMessages(`${DISPLAY[language]['pm4']} ${loanYears}`);

  userMessages(`${DISPLAY[language]['pm5']} ${loanMonths}`);

  userMessages(`${DISPLAY[language]['total paid']} ${totalPaid.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}. ${DISPLAY[language]['total interest']} ${totalInterest.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`);

  userMessages(`${DISPLAY[language]['percent interest']} ${percentInterest.toFixed(0)}% ${DISPLAY[language]['percent principal']} ${percentPrincipal.toFixed(0)}%.`);

  showUser('again');

  again = readline.question();
  againCleanUp();

  while (again !== 'yes' && again !== 'si' && again !== 'sí' && again !== 'no') {
    showUser('again error');
    again = readline.question();
    againCleanUp();
  }

  if (again === 'no') {
    showUser('thank you');
  }
  if (again === 'yes' || again === 'sí' || again === 'si') {
    console.clear();
  }
}