// Repetitive practice

// This needs to be done in BASH in working directory, this puts in a directory node modules, readline sync library in there.
// npm install readline-sync --save
// npm install readline-sync --save
// npm install readline-sync --save
// npm install readline-sync --save
// npm install readline-sync --save
// npm install readline-sync --save
// npm install readline-sync --save
// npm install readline-sync --save
// npm install readline-sync --save
// npm install readline-sync --save
// npm install readline-sync --save

// In js file need to link to readline sync. require goes and gets it.
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');
const READLINE = require('readline-sync');

// readline.question() // This will ask the question to user. Usually saved to a variable so you can do something with answer.
// This gets the answer. Question is asked previously with a function or console.log or something.
// Returns a string. .question() is called on READLINE
let num1 = READLINE.question();
let num1 = READLINE.question();
let num1 = READLINE.question();
let num1 = READLINE.question();
let num1 = READLINE.question();
let num1 = READLINE.question();
let num1 = READLINE.question();
let num1 = READLINE.question();
let num1 = READLINE.question();
let num1 = READLINE.question();

// How to go get a json file
// saved to variable, require goes and gets it
// then ./ to go find it in directory followed by file name
// note quotes inside () after require
const DISPLAY = require('./messages_displayed.json');
const DISPLAY = require('./file_name.json');
const DISPLAY = require('./file_name.json');
const DISPLAY = require('./file_name.json');
const DISPLAY = require('./file_name.json');
const DISPLAY = require('./file_name.json');
const DISPLAY = require('./file_name.json');
const DISPLAY = require('./file_name.json');
const DISPLAY = require('./file_name.json');

// How to use json file example.
// json file has an object with keys so can go get those using the variable that requires it

console.log(`${DISPLAY['key']['value']}`);
console.log(`${DISPLAY['key']['value']}`);
console.log(`${DISPLAY['key']['value']}`);
console.log(`${DISPLAY['key']['value']}`);
console.log(`${DISPLAY['key']['value']}`);
console.log(`${DISPLAY['key']['value']}`);


// .replace() - use with strings, doesn't mutate so save to new variable if it is needed to be kept.
// simple .replace() the thing you want to replace, followed by what changes (this only replace one occurance)
// global .replace() this might be regex not sure, but can learn this example. changes all occurences
variableName.replace('$', '');
variableName.replace('A', 'a');
variableName.replace('5,', '6');
variableName.replace('Hello', 'Hi');
variableName.replace('e', 'Z');
variableName.replace('e', 'G');
variabelName.replace('f', 'Yo');

variableName.replace(/[,]+/g, '');
variableName.replace(/['E']+/g, 'e');
variableName.replace(/['W']+/g, 'w');
variableName.replace(/['2']+/g, '4');
variableName.replace(/['Hello']+/g, 'Hi');
variableName.replace(/['r']+/g, 'T');
variableName.replace(/['w']+/g, 'W');
variableName.replace(/['t']+/g, 'T');
variableName.replace(/['e']+/g, 'E');

// parseFloat(string goes here) takes a string and returns a number or NaN
// shows decimals
// can be used with readline question if we need a number from the user
// Takes everything that is a number so if a string starts with a number and then has letters it just takes the number

newNum = parseFloat(stringVariable);
newNum = parseFloat(stringVariable);
newNum = parseFloat(stringVariable);
newNum = parseFloat(stringVariable);
newNum = parseFloat(variableHere);
newNum = parseFloat(variableHere);
newNum = parseFloat(variableName);

// parseInt(string goes here) takes a string and returns a number or NaN
// cuts decimals off
// like parseFloat() but no decimals

newNum = parseInt(stringVariable);
newNum = parseInt(stringVariable);
newNum = parseInt(stringVariable);
newNum = parseInt(variableHere);
newNum = parseInt(variableName);
newNum = parseInt(variableName);

// Also Number function can do this, but doesn't 'parse' it or look through it, either string is completely a number or no

newNum = Number(stringVariable);
newNum = Number(stringVariable);
newNum = Number(stringVariable);
newNum = Number(stringVariable);
newNum = Number(stringVariable);

// Number.isInteger(), Number.isNaN() - NOT!!!! variableHere.isNaN()
// Number has a bunch of different methods to call to check on a variable
Number.isInteger(variableHere);
Number.isNaN(variableHere);
Number.isInteger(variableHere);
Number.isInteger(variableHere);
Number.isNaN(variableHere);
Number.isNaN(variableHere);
Number.isInteger(variableHere);
Number.isNaN(variableHere);
Number.isInteger(variableHere);
Number.isNaN(variableHere);
Number.isInteger(variableHere);
Number.isNaN(variableHere);

// Math.sign() checks to see positive or negative, the "sign" of the number.
// returns +1, -1 for pos or neg numbers, 0, -0 for pos zero and neg zero
// so have to check against 1, 0, -0, -1
Math.sign(variableHere);
Math.sign(variableHere);
Math.sign(variableHere);
Math.sign(variableHere);
Math.sign(variableHere);
Math.sign(variableHere);
Math.sign(variableHere);
Math.sign(variableHere);

// console.clear() this will clear the terminal screen, good for user experience
console.clear();
console.clear();
console.clear();
console.clear();
console.clear();
console.clear();
console.clear();
console.clear();

// Math.pow(base here, exponent here) returns the power, base to the exponent
Math.pow(2, 3);
Math.pow(4, 5);
Math.pow(4, 6);
Math.pow(2, 3);
Math.pow(4, 5);
Math.pow(5, 6);

// newline character \n backslash n tells node to start newline, can be used in console.log strings
console.log('hello \n world');
console.log('Back once again\nI\'m the renegade master');
console.log('Yo\nWhaddup?')

