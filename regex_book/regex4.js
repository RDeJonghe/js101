// Write a method that changes every arithmetic operator (+, -, *, /) to a '?' and returns the resulting string. Don't modify the original string.


function mysteriousMath(str) {
let regex = /[+\-*/]/g
let newStr = str;
console.log(str);
return newStr.replace(regex, '?');
}


console.log(mysteriousMath('4 + 3 - 5 = 2'));     // -> '4 ? 3 ? 5 = 2'
console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1')); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'
