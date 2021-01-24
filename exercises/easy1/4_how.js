/* Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input. */


const READLINE = require('readline-sync');

let length = parseInt(READLINE.question('Enter in the length of the room in meters.\n'));
let width = parseInt(READLINE.question('Enter in the width of the room in meters.\n'));

/*
let areaMeters = length * width;
let areaFeet = areaMeters * 10.7639

console.log(`The room is ${areaMeters.toFixed(2)} square meters and ${areaFeet.toFixed(2)} square feet.`);
*/

// Another way to do it with a function.

function area(l, w) {
  let areaMeters = l * w;
  let areaFeet = areaMeters * 10.7639;
  console.log(`The area in meters is ${areaMeters.toFixed(2)} and the area in feet is ${areaFeet.toFixed(2)}`);
}

area(length, width);