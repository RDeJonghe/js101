/* Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century. */

// algorithm
// create empty results string ''
// this is centry formula let centuryNumber = Math.floor((11201 / 100)) + 1; 
  // if (year % 100 === 0) {
  //   centuryNumber -= 1;
  // }
// need to find the last two digits or last digit of the number - this can be done by dividing by 100 or by 10
  // if it ends in 11, 12, or 13 it gets 'th'
  // if it ends in just 1, 2, 3 it gets st, nd, 3d
  // all others get th








century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"


