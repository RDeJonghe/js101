/* In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function. */


// algorithm for first part - create string from number
// create a array of string numbers from 0 to 9 (the index will be used to get the right number)
// create a function with a number parameter
// create a results variable equal to ''
// open a do while loop - while number > 0
// create a remainder variable that is equal to number % 10 - this will give the last digit on each iteration and will be used to access the number in the array based off of index - this is within the loop and gets reassigned each time
// remove the last digit of the number - reassign the number equal to Math.floor( number / 10) math.floor is needed so we just get each digit on the iteration and not decimals. Math.floor will make this zero on last iteration
// set the result variable - result is equal to the number from the array so array[remainder] plus the existing result - new number gets put on front since it moves left to right
// return result

// algorithm for second part
// check input using math.sign with conditional
// create pos/neg variable
// if math.sign of the number < 0 set variable to isNeg, same for isPos, same for isZero
// math.abs the number to make it pos
// use function as a helper function on number that was math.abs'd
// create conditional
// concat the sign '+' or '-' as needed
// return result

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let results = '';

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    results = DIGITS[remainder] + results;
  } while (num > 0);
  return results;
}

function signedIntegerToString(numbr) {
  let sign;
  if (Math.sign(numbr) > 0) {
    sign = '+';
  } else if (Math.sign(numbr) < 0) {
    sign = '-';
  } else {
    sign = '';
  }
  numbr = Math.abs(numbr);

  let strNum = integerToString(numbr);

  return sign + strNum;
}




console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");