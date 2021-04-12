/* In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number. */

// algorithm

// create a digits array of string numbers to reference
// create a function
// create a results variable as empty string
// use a do while loop, going to do this while number is > 0
// first get remainder, remainder will be the last number on each iteration and we want this to use to access strNum in array
  // remainder = number % 10
// next take off the last digit
  // number = math.floor(number / 10) - dividing by 10 will take off last number, math.floor will take off decimals and just leave the previous digits in the sequence. On last iteration math.floor will make it 0 which we need to end the loop
// set the result = getting the correct strNum from the array (this is first) plus the result variable
  // this adds the new number on the front of the result
// return the result

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let results = '';

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    results = DIGITS[remainder] + results
  } while (num > 0);
  return results
}





console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"












// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // sets a string number array

// function integerToString(number) {
//   let result = '';

//   do { // the previous problem worked left to right with the math, this problem works right to left
//     let remainder = number % 10; // this is going to give each digit from left to right this starts with the last digit and will move to the next. This happens because of the below step. The below step removes the last number on each iteration
//     number = Math.floor(number / 10); // this removes the last number on each iteration - on the last iteration Math.floor will make the number 0
//     result = DIGITS[remainder] + result; // this picks out the correct number from the array and concatenates it
//   } while (number > 0);

//   return result;
// }


// integerToString(4321);      // "4321"
// integerToString(0);         // "0"
// integerToString(5000);      // "5000"
// integerToString(1234567890);      // "1234567890"
