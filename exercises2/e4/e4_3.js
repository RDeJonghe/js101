// 
// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

/* What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go! */


// ALGORITHM
// require('readline-sync')
// ask user their age, save to variable
// ask user retirement age, save to variable
// set a date variable to the current year - look at mdn for date function
// have that date variable also be a number variable of the year -- it already returns a number
// set working years variable - subtract age from retirement age
// set retire year variable - add working years to year variable
// log results with template literal

const  READLINE = require('readline-sync');

let age = READLINE.question('What is your age? ');
let retireAge = READLINE.question('At what age would you like to retire? ');

// IN FUTURE: remember that readline.question returns Strings - implicit conversion works here but it's a good idea to convert these with parseInt()

// let currentDate = new Date(Date.now()); - this is not necessary, do like below
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let workingYears = retireAge + age; // this works because of implicit conversion - readline returns a string but is converted here, if this were + it would concatenate them together
let retireYear = workingYears - currentYear;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.\nYou only have ${workingYears} years of work to go!`);