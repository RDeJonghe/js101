// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

// You may not use javascript's Date class methods.

// ALGORITHM - after midnight
// create a function that takes a string as an argument representing the time
// handle edge cases of 00:00 and 24:00
// set a number of minutes variable to 0
// take the string number and split it at :
  // this will give an array of the hours and minutes
  // set an hours variable equal to the Number of 0 element, set the minutes to the number of first element
  // if the number of hours = 24, set it to zero
// take the hours and * 60 minutes in an hour
// add and return the minutes and hours

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

function afterMidnight(time) {
  let totalMinutes = 0;
  let timeArray = time.split(':');

  totalMinutes += Number(timeArray[1])

  if (timeArray[0] !== '24') {
    totalMinutes += (Number(timeArray[0])) * MINUTES_PER_HOUR;
  }

  return totalMinutes;

}


function beforeMidnight(time) {
  let afterMidnightMinutes = afterMidnight(time);

  if (afterMidnightMinutes === 0) return 0;

  return MINUTES_PER_DAY - afterMidnightMinutes;
}




console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);