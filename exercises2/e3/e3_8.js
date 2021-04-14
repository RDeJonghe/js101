/* Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Examples: */

// ALGORITHM
// create a function that takes 3 numbers as arguments
// create a average variable that is equal to average of scores
// switch/case statement to check and assign correct grade - for switch with numbers have to switch true
// return the grade with each case

function getGrade(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;

  switch (true) {
    case avg >= 90 :
      return 'A';
    case avg >= 80 :
      return 'B';
    case avg >= 70 :
      return 'C';
    case avg >= 60 :
      return 'D'
    default :
      return 'F';
  }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(50, 50, 50));