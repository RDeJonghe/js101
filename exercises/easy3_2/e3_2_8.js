/* Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100. */

function getGrade(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;
  let grade;

  switch (true) { // REMEMBER WITH CASE STATEMENTS HAVE TO SWITCH TRUE FOR NUMBERS!!!! WON'T WORK WITH THE VARIABLE, CHECK TRUE!!
    case avg >= 90 :
      grade = 'A';
      break;
    case avg >= 80 :
      grade = 'B';
      break;
    case avg >= 70 :
      grade = 'C';
      break;
    case avg >= 60 :
      grade = 'D';
      break;
    case avg < 60 :
      grade = 'F';
      break;
  }
  return grade;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"