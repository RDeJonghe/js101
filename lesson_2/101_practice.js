const READLINE = require('readline-sync');
const GETJSON = require('./messages_displayed.json');

console.log(`${GETJSON['en']['loan']}`);

let num1 = READLINE.question('Num goes here:');

let num2 = parseFloat(num1);

console.log(num2 + ' this is parsed floated num');

console.log(typeof num2);

let str1 = 'Back once again I\'m the renegade master';

let str2 = str1.replace('B', 'b');

let str3 = str1.replace(/['a']+/g, 'G');

console.log(str1);
console.log(str2);
console.log(str3);

let num3 = NaN;

console.log(Number.isNaN(num3) + ' this should be NaN');

console.log(Number.isInteger(num2) + ' this should be an integer');

console.log(Math.sign(num2) + ' this should be 1');

console.log(Math.pow(3, 3) + ' this should be 27');

console.log('Hello \nworld!')