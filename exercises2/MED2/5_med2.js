/* A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201. */

// algorithm - do this with helper functions
// create a function that takes a number as an argument
// if number passed is greater than the max value return message
// have to have a starting num that is % 7 = 0
  // check if the num given is remainder 7 if not loop until the num is remainder seven = 0
// create a while loop will increment to find the next number up to the max - use the starting num, will be incremented by 7
  // check if number is odd
    // if not continue
      // nested if statement check if each number occurs only once
      // convert to an array, sort and iterate
        // if num = next num continue
        // if not return that number

function featured(num) {
  let result = startingNum(num)

  do {
    if (checkOccurrence(result)) {
      return result;
    }
    result += 14;
  } while (num <= 9876543201);

  return 'no number that meets those conditions'
}

function startingNum(num) {
  let startingNum;
  do {
    num += 1;
    startingNum = num;
  }
  while (num % 7 !== 0 || num % 2 === 0)
  return startingNum;
}

function checkOccurrence(num) {
  let occurenceCheck = {};
  let numArr = String(num).split('');

  for (let i = 0; i < numArr.length; i ++) {
    if (occurenceCheck[numArr[i]]) {
      return false;
    }
    occurenceCheck[numArr[i]] = true;
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
 console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirements."