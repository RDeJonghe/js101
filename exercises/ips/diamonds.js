// PROBLEM: Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.
  // INPUT: a number
  // OUTPUT: ordered strings
  // ASSUMPTIONS: only positive odd numbers passed - yes
  // UNDERSTANDING PROBLEM
    // the output is 9 rows tall and 9 rows wide at the middle row
// EXAMPLES/TEST CASES: given
// DATA STRUCTURES
  // number passed as argument
  // strings
// ALGORITHM
// HIGH LEVEL
  // find the middle of the number to use for ordering
  // print a single * that is centered
  // add an asterisk to the beginning and the end
  // continue until the middle number is reached
  // then decrease back down to one *

// DETAILED
  // create a function that takes a number as a argumnet
  // create a numOfAsterisks var = 1
  // create a countdown numOfAsterisks = num - 2
  // create a padstart variable - this will be the math.floor(num/2)
  // create a countdown padStart variable = 1
  // create a middleRow variable = math.ceil(num / 2)
  // create a first half counter variable = 1
  // create a second half counter variable = Math.floor(num / 2)
  // open first loop
    // while counter <= middle row var
    // pad start the number of asterisks, this will also be console.log, and .repeat
    // decrease number of asterisks by 2, decrease padStart by 1
  // open a second loop
    // set a counter variable = math.floor(num / 2)
    // while second half counter var > 0
    // console.log the pad start of the asterisks - the second countdown variables and .repeat
    // decrease num of asterisks by 2, increase pad start by 1


    // need total length for padStart
    // firstHalfTotalLength = Math.floor(num / 2)
    // secondHalfTotalLength = num - 1

function diamond(num) {
  const charToPrint = '*'
  let firstHalfAsterisks = 1;
  let firstHalfPadStart = Math.ceil(num / 2);
  let secondHalfAsterisks = num - 2;
  let secondHalfPadStart = num - 1;
  let middleRow = Math.ceil(num / 2);
  let firstHalfCounter = 1;
  let secondHalfCounter = Math.floor(num / 2);

  while (firstHalfCounter <= middleRow) {
    console.log(charToPrint.repeat(firstHalfAsterisks).padStart(firstHalfPadStart, ' '));
    firstHalfPadStart += 1;
    firstHalfAsterisks += 2;
    firstHalfCounter += 1;
  }
  while (secondHalfCounter > 0) {
    console.log(charToPrint.repeat(secondHalfAsterisks).padStart(secondHalfPadStart, ' '));
    secondHalfPadStart -= 1;
    secondHalfAsterisks -= 2;
    secondHalfCounter -= 1;
  }
}




(diamond(1));
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

(diamond(9));
 // logs
//      *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *