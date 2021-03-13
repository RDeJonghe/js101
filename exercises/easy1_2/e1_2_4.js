// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

const READLINE = require('readline-sync');

let length = parseFloat(READLINE.question('Enter in length'));
let width = parseFloat(READLINE.question('Enter in width'));

function area(l, w) {
  let area = l * w;
  let areaFeet = area * 10.7639
  return `The area is ${area} square meters / ${areaFeet} square feet.`
}

console.log(area(length, width));