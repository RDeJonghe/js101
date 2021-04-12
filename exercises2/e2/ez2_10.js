// easy 2 exercise 10

/* In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson. */

// ALGORITHM
// create a function that takes a string number as an argument
// create an object with key value pairs to match string number to number
// create a results variable that is zero
// check the input to see if the number has a sign - create conditional
  // if strNum[0] has - or + save that to a variable and set the strNum equalt to the slice of it at 1 (remove sign and save it)
  // split number and map it based off of object key val pairs and have array of numbers
  // with array of numbers iterate over each number and set the value using the math formula to set the place. so value is equal to the value * 10 plus the number on the iteration
  // set a conditional
  // if the sign variable is - then multiply result by -1
  // else leave be
  // return variable


function stringToSignedInteger(strNum) {
  numObj = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9
  }
  
  let results = 0;
  let sign;
  
  if (strNum[0] === '+' || strNum[0] === '-') {
    sign = strNum.slice(0, 1);
    strNum = strNum.slice(1);
  }

  let numArr = strNum.split('').map(el => numObj[el]);

  numArr.forEach(el => results = (results * 10) + el);

  if (sign === '-') {
    results *= -1;
  }
  return results;
}
















console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true