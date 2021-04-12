// easy 2 exercise 9

/* The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Examples */

// algorithm

// create a function
// create a result variable that is 0
// create an object of numbers that will be used for comparison, key is string, val is number
// convert the string to numbers
  // split and send to array, map the entire array of string numbers to an array of numbers by selecting the correct one from the object - resulting array will be numbers
// iterate over numbers array
// set value equal to value * 10 + the number from the numbers array
// return the value

function stringToInteger(strNum) {
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
  let result = 0;
  let numArr = strNum.split('').map(el => numObj[el]);
  numArr.forEach(num => result = (result * 10) + num);
  return result;
}

























console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true




// function stringToInteger(string) {
//   const DIGITS = { // object is used to match the string to the number, this I understood and planned for
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };
//   let arrayOfDigits = string.split("").map(char => DIGITS[char]); // this will take each string number and convert it to a number
//   console.log(arrayOfDigits);
//   let value = 0; // this is what will store the result number
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit)); // this is the mathematical operation that will combine all of the digits together. Basically it multiplys by 10 and that changes the place (tens, hundreds, thousands, etc) of the value, after the digit is added on. By multiplying by 10 the place is made to the correct place on each iteration. THIS IS THE TRICKY PART OF THE PROBLEM: how to combine all of the single numbers into the correct number.
//     // This works left to right through the array - this is okay, no need to reverse.
//     // with example 570 - first iteration value is 5, then it's multiplied by 10 and 7 is added on second iteration so 57. Then it's multiplied by 10 so 570 and 0 is added.
//   return value;
// }











