// Mortgage Calculator Assignment from JS101

let again;

while (again !== 'n') {
  const readline = require('readline-sync');
  const DISPLAY = require('./messages_displayed.json');

  function userMessages(messageDisplayed) {
    console.log(`>>> ${messageDisplayed}`);
  }

  userMessages(DISPLAY['language']);
  // prettier-ignore
  let language = readline.question()
    .replace(/['"]+/g, '')
    .trim()
    .toLowerCase()
    .replace('glish', '')
    .replace('pañol', '');

  // prettier-ignore
  while (language !== 'en' && language !== 'es') {
    userMessages(DISPLAY['language error']);
    userMessages(DISPLAY['language']);
    language = readline.question()
      .replace(/['"]+/g, '')
      .trim()
      .toLowerCase()
      .replace('glish', '')
      .replace('pañol', '');
  }

  userMessages(DISPLAY[language]['loan']);
  // prettier-ignore
  let loanAmount = readline.question('$')
    .replace('$', '')
    .replace(/[,]+/g, '');
  loanAmount = parseFloat(loanAmount);

  while (Number.isNaN(loanAmount) || !Number.isInteger(loanAmount)) {
    if (Number.isNaN(loanAmount)) {
      userMessages(DISPLAY[language]['entered NaN']);
      userMessages(DISPLAY[language]['loan']);
      loanAmount = parseFloat(readline.question('$').replace('$', '').replace(/[,]+/g, ''));
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
      loanMonths = parseFloat(readline.question('MONTHS: '));
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
  userMessages(`${DISPLAY[language]['pm']} ${monthlyPayment
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`);
  // prettier-ignore
  userMessages(`${DISPLAY[language]['pm2']} ${loanAmount
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`);
  userMessages(`${DISPLAY[language]['pm3']}`);
  userMessages(`${DISPLAY[language]['pm4']} ${loanYears}`);
  userMessages(`${DISPLAY[language]['pm5']} ${loanMonths}`);

  // prettier-ignore
  userMessages(`${DISPLAY[language]['total paid']} ${totalPaid.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}. ${DISPLAY[language]['total interest']} ${totalInterest.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.`);

  // prettier-ignore
  userMessages(`${DISPLAY[language]['percent interest']} ${percentInterest.toFixed(0)}% ${DISPLAY[language]['percent principal']} ${percentPrincipal.toFixed(0)}%.`)

  userMessages(DISPLAY[language]['again']);

  // prettier-ignore
  again = readline.question()
    .replace(/['"]+/g, '')
    .trim()
    .toLowerCase()
    .substring(0, 1);

  if (language === 'es' && again === 's') {
    again = 'y';
  }

  // prettier-ignore
  while (again !== 'y' && again !== 'n') {
    userMessages(DISPLAY[language]['again error']);
    again = readline.question()
      .replace(/['"]+/g, '')
      .trim()
      .toLowerCase()
      .substring(0, 1);
    if (language === 'es' && again === 's') {
      again = 'y';
    }
  }

  userMessages(DISPLAY[language]['thank you']);
}
