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

// Gets the absolute value, never negative.
Math.abs();
Math.abs();
Math.abs();
Math.abs();

// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

// so continue stops it and says do nothing with this, but go on.
continue
continue
continue

// .toFixed() will round the decimal to that many places. Can use with a variable. Will always give the number
varName.toFixed(2);
varName.toFixed(2);
varName.toFixed(2);
varName.toFixed(2);
varName.toFixed(2);
varName.toFixed(2);
varName.toFixed(2);
varName.toFixed(2);
varName.toFixed(2);

// READLINE.prompt() like READLINE.question()
READLINE.prompt();
READLINE.prompt();

// put strings together .concat(), can do with variables also like this:
let var1 = 'Hello';
let var2 = 'world';
console.log(var1.concat('you', var2));
var1.concat(' hey', var2);
var1.concat('whaddup');
var2.concat('no duh');
var1.concat(var1);
var1.concat('also put this on');
var2.concat(var1, var3);
var1.concat('yo');

// .length NO PARENS!!!
var2.length
var1.length
var2.length
var1.length
var3.length

// .join() THIS IS USED TO JOIN ARRAY ELEMENTS TOGETHER AND PUT IT INTO A STRING. CAN PUT IN PARENTHESIS WHATEVER YOU WANT TO SPACE IT. Need the quotes to show what goes in between.
let arr = ['November Rain', 'Paradise City', 'Welcome to the Jungle'];
let newVar = arr.join('<<>>');
console.log(typeof newVar);
console.log(newVar);
// Prints> "string"
//Prints> "November Rain<<>>Paradise City<<>>Welcome to the Jungle"
sampleArray.join(' ');
sampleArray.join(' ');
sampleArray.join(' ');
sampleArray.join(' ');
sampleArray.join(' <<>> ');
sampleArray.join(' $$$ ');

// Object.values() this is used to take the values of an object and put them in an array. Also there is Object.keys()

Object.values(objectNameHere);
Object.values(objectNameHere);
Object.values(objectNameHere);
Object.values(objectNameHere);
Object.values(objectNameHere);
Object.values(objectNameHere);
Object.values(objectNameHere);
Object.values(objectNameHere);
Object.keys(objectName);

// To check a character in a string, or check .length - 1
// Key is that names have indexes just like an array. So have to access the index.

stringVariable[5] // will show 5th character in index
stringVariable[6] // will show 6th character in string
stringVariable[stringVariable.length - 1] // will show last character in string. Note have to kinda do it twice to get to it.
console.log(name[name.length - 1]);
stringVariable[3];
stringVariable[stringVariable.length - 1];
console.log(variableName[variableName.length - 1]);
stringVar[stringVar.length - 1];

// startsWith() endsWith() - used for strings
stringVariable.endsWith('?');
stringVariable.startsWith('"');
stringVariable.endsWith('!');
stringVariable.startsWith('Hello');
strVar.startsWith('$');
strVar.endsWith('.');

// .includes() this works to check an array or a string. Checks the array for what you put in, for a string it can check for a string portion
stringVar.includes('The');
arrayVar.inculdes('Back');
stringVar.includes('The');
arrayVar.includes('Back');
stringVar.includes('What');
arrayVar.includes('Yo');

// .split() takes a string and splits these and puts these in an array. Commonly this is done with ' ' to look for where to split
str.split(' ');
str.split(' - ');
str.split(' ');
str.split(' ');
str.split(' ');

// map() this is used with an array. It will make a new array by using a function to do something to each element in the array
// So set the result equal to a new array. newArray = oldArray.map(function here);

newArray = numArray.map(num => num + 2);
newArray = numArray.map(num => num * 3);
newArray = stringArray.map(str => str.toUpperCase());

// .slice() this can be used with a string OR an array. Doesn't modify original array so if you want to keep it then store it to
// a variable. You can slice based on index, the first number you enter is where you start (inclusive, keeps that value), The second number is where it ends (exclusive) so that index won't be included

str.slice(2, 5);
str.slice(0, 10); // Takes the elements 0 - 9, 10 not included.

// .hasOwnProperty() used with Objects, check to see if something is in that object. Will check the key. This works for own properties not properties that were inherited.
objectNameHere.hasOwnProperty('Axl');
objectNameHere.hasOwnProprty('Slash');

// .charAt() This is a way to get at a string character based on index.
strName.charAt(4);
strName.charAt(5);

// .substring() This works the same as .slice() I think
strName.substring(3);
strName.substring(3, 6);
strName.substring(2);

// Object.assign() This will take the properties of one object and add it to another. In parenthesis goes the target object, then the source object. So it will add the source objects to the end of the target object
Object.assign(obj1, obj2);
Object.assign(obj1, obj2);
Object.assign(obj1, obj2);
Object.assign(obj1, obj2);
Object.assign(obj1, obj2);

// .splice() for arrays. in parens put starting index, delete count, then everything that will be added.
arr.splice(2, 2, 'Hello', 'world');

// .concat can be used for arrays, used to merge arrays, does not change existing arrays returns new array
arr1.concat(['Back', 'Once']);
arr1.concat(arr2);

// spread syntax with concat. First spread syntax will look at everything in an array or object
// Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
// can be used with nested arrays, will go and take each element
newArr = [].concat(...oldArr) // thiswill look at every element in the oldArr, so spread syntax says look at everything




