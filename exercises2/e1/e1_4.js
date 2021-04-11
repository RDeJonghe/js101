/* Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example: */

/* Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet). */

// ALGORITHM
  // ask the user for length of room in meters - set this to a variable
  // ask the user for width of room in meters - set this to a variable
  // create a function to calcualte dimensions include below steps
    // create an area meters variable set this equal to the result of mulitplying the two dimensions variable
    // create an area feet varaible
      // set this equal to the meters variable times 10.7639
    // print results

const READLINE = require('readline-sync');

const MULT_TO_GET_FEET = 10.7639;

let lengthM = READLINE.question('Enter in length of room in meters: ');
let widthM = READLINE.question('Enter in the width of room in meters: ');

function calcDimensions(length, width) {
  let areaM = length * width;
  let areaF = areaM * MULT_TO_GET_FEET;

  console.log(`The area of the room is ${areaM} square meters (${areaF} square feet).`)
}

calcDimensions(lengthM, widthM);