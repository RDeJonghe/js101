// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

/* What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go! */

const READLINE = require('readline-sync');

// let year = 2021;

let today = new Date();
let currentYear = today.getFullYear();

let age = READLINE.question('What is your age?\n');
let retireAge = READLINE.question('At what age would you like to retire?\n');

let workYears = retireAge - age;
let retireYear = currentYear + workYears;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You only have ${workYears} years of work to go!`);