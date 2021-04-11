// easy 1 exercise 8

/* In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year. */

// ALGORITM
// take number input
// test different scenarios
// if Num % 4 === 0
  // open a nested conditional
  // test both 100 and 400 return true
  // test 100 alone return false
  // test 4 alone return true
// outside of nested return false



function isLeapYear(num) {
  if (num % 4 === 0) {
    if (num % 100 === 0 && num % 400 === 0) {
      return true;
    } else if (num % 100 === 0) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}


console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true