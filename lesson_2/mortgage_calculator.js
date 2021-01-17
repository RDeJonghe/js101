// Mortgage Calculator Assignment from JS101

const readline = require('readline-sync');
const DISPLAY = require('./messages_displayed.json');
function userMessages(messageDisplayed) {
  console.log(`>>> ${messageDisplayed}`);
}

let again;
let language = null;

while (again !== 'n') {
  while (language === null) {
    userMessages(DISPLAY['language']);
    // prettier-ignore
    language = readline.question()
      .replace(/['"]+/g, '')
      .trim()
      .toLowerCase()
      .replace('glish', '')
      .replace('pañol', '')
      .replace('panol', '');
  }
  // prettier-ignore
  while (language !== 'en' && language !== 'es') {
    userMessages(DISPLAY['language error']);
    userMessages(DISPLAY['language']);
    language = readline.question()
      .replace(/['"]+/g, '')
      .trim()
      .toLowerCase()
      .replace('glish', '')
      .replace('pañol', '')
      .replace('panol', '');
  }

  userMessages(DISPLAY[language]['loan']);
  // prettier-ignore
  let loanAmount = readline.question('$')
    .replace('$', '')
    .replace(/[,]+/g, '');
  loanAmount = parseFloat(loanAmount);

  while (Number.isNaN(loanAmount) || !Number.isInteger(loanAmount) || Math.sign(loanAmount) !== 1) {
    if (Number.isNaN(loanAmount)) {
      userMessages(DISPLAY[language]['entered NaN']);
      userMessages(DISPLAY[language]['loan']);
      loanAmount = parseFloat(readline.question('$').replace('$', '').replace(/[,]+/g, ''));
    } else if (!Number.isInteger(loanAmount)) {
      userMessages(DISPLAY[language]['has decimal']);
      loanAmount = Math.round(loanAmount);
      userMessages(
        `${DISPLAY[language]['rounded']} ${loanAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
      );
    } else if (Math.sign(loanAmount) !== 1) {
      userMessages(DISPLAY[language]['invalid loan']);
      loanAmount = parseFloat(readline.question('$').replace('$', '').replace(/[,]+/g, ''));
    }
  }

  userMessages(DISPLAY[language]['credit score']);
  let creditScore = parseFloat(readline.question());

  // prettier-ignore
  while (
    Number.isNaN(creditScore) ||
    (creditScore < 300 || creditScore > 850) ||
    !Number.isInteger(creditScore)
  ) {
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
  let yearsToMonths = loanYears * 12;
  let loanDuration = yearsToMonths + loanMonths;

  while (
    isNaN(loanYears) ||
    !Number.isInteger(loanYears) ||
    !Number.isInteger(loanMonths) ||
    (loanYears === 0 && loanMonths === 0) ||
    loanDuration > 360 ||
    (Math.sign(loanYears) !== 1 && Math.sign(loanYears) !== 0) ||
    (Math.sign(loanMonths) !==1 && Math.sign(loanMonths) !== 0)
    ) {
      if (isNaN(loanYears)) {
        userMessages(DISPLAY[language]['invalid year']);
        loanYears = parseFloat(readline.question(`${DISPLAY[language]['pm4']}`));
        loanMonths = parseFloat(readline.question(`${DISPLAY[language]['pm5']}`));
        yearsToMonths = loanYears * 12;
        loanDuration = yearsToMonths + loanMonths;
      } else if (!Number.isInteger(loanYears)) {
        userMessages(DISPLAY[language]['decimal year']);
        loanYears = parseFloat(readline.question(`${DISPLAY[language]['pm4']}`));
        loanMonths = parseFloat(readline.question(`${DISPLAY[language]['pm5']}`));
        yearsToMonths = loanYears * 12;
        loanDuration = yearsToMonths + loanMonths;
      } else if (!Number.isInteger(loanMonths)) {
        userMessages(DISPLAY[language]['invalid month']);
        loanYears = parseFloat(readline.question(`${DISPLAY[language]['pm4']}`));
        loanMonths = parseFloat(readline.question(`${DISPLAY[language]['pm5']}`));
        yearsToMonths = loanYears * 12;
        loanDuration = yearsToMonths + loanMonths;
      } else if (loanYears === 0 && loanMonths === 0) {
        userMessages(DISPLAY[language]['zero year and month']);
        loanYears = parseFloat(readline.question(`${DISPLAY[language]['pm4']}`));
        loanMonths = parseFloat(readline.question(`${DISPLAY[language]['pm5']}`));
        yearsToMonths = loanYears * 12;
        loanDuration = yearsToMonths + loanMonths;
      } else if (loanDuration > 360) {
        userMessages(DISPLAY[language]['max duration']);
        loanYears = parseFloat(readline.question(`${DISPLAY[language]['pm4']}`));
        loanMonths = parseFloat(readline.question(`${DISPLAY[language]['pm5']}`));
        yearsToMonths = loanYears * 12;
        loanDuration = yearsToMonths + loanMonths;
      } else if ((Math.sign(loanYears) !== 1 && Math.sign(loanYears) !== 0) ||
      (Math.sign(loanMonths) !==1 && Math.sign(loanMonths) !== 0)) {
      userMessages(DISPLAY[language]['negative duration']);
      loanYears = parseFloat(readline.question(`${DISPLAY[language]['pm4']}`));
      loanMonths = parseFloat(readline.question(`${DISPLAY[language]['pm5']}`));
      yearsToMonths = loanYears * 12;
      loanDuration = yearsToMonths + loanMonths;
    }
  }

  // prettier-ignore
  let monthlyInterestRate = (apr / 12) / 100;

  // prettier-ignore
  let monthlyPayment = loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

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
  userMessages(`${DISPLAY[language]['percent interest']} ${percentInterest.toFixed(0)}% ${DISPLAY[language]['percent principal']} ${percentPrincipal.toFixed(0)}%.`);

  userMessages(DISPLAY[language]['again']);

  // prettier-ignore
  again = readline.question()
    .replace(/['"]+/g, '')
    .trim()
    .toLowerCase();

  if (again === 'yes' || again === 'no' || again === 'si' || again === 'sí') {
    again = again.replace('es', '').replace('o', '').replace('i', '').replace('í', '');
  }

  if (language === 'es' && again === 's') {
    again = 'y';
  }

  // prettier-ignore
  while (again !== 'y' && again !== 'n') {
    userMessages(DISPLAY[language]['again error']);
    again = readline.question()
      .replace(/['"]+/g, '')
      .trim()
      .toLowerCase();

    if (again === 'yes' || again === 'no' || again === 'si' || again === 'sí') {
      again = again.replace('es', '')
        .replace('o', '')
        .replace('i', '')
        .replace('í', '');
    }

    if (language === 'es' && again === 's') {
      again = 'y';
    }
  }
  if (again === 'n') {
    userMessages(DISPLAY[language]['thank you']);
  }
  console.clear();
}
