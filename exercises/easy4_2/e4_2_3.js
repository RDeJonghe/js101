// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

const READLINE = require('readline-sync');

let age = READLINE.question('What is your age? ');
let retireAge = READLINE.question('At what age would you like to retire? ');
let workingYears = retireAge - age;
let currentYear = new Date().getFullYear();


function retire() {
  console.log(`It's ${currentYear}. You will retire in ${currentYear + workingYears}`);
  console.log(`You have only ${workingYears} years of work left to go!`);
}

retire();

/* What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go! */