// PROBLEM:
  /* The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

  Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input.

  You may not use javascript's Date class methods. 

  The tests should log true*/

// ALGORITHM
  // declare a const variable for minutes per hour
  // declare a const variable for hours per day
  // declare a const variable for minutes per day
  
  // create helper functions to format how the time looks
  // create a leading zero function to add a zero on if the time is less than 10
    // function will take the time number as an argument
    // if the number is less than 10, use string interpolation to put a zero on first, else just returnt the string of the number
  // create a format time helper function
    // this will take hours, minutes as arguments
    // return using string interpolation
      // call leading zero on the hours and leading zero on the minutes within the string interpolation
  // create a time of day function
    // this will be the function that does the actual work of calculating the time
    // 




//   const MINUTES_PER_HOUR = 60;
//   const HOURS_PER_DAY = 24;
//   const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR; // 1440



//   function leadingZero(number) {
//     return number < 10 ? `0${number}` : String(number);
//   }
  
//   function formatTime(hours, minutes) {
//     return `${leadingZero(hours)}:${leadingZero(minutes)}`;
//   }



// // the purpose of this is to handle minutes that are larger than a day, so you can enter any number of minutes even if it's greater than the number in a day.
// // what this does by using the remainder operator is like saying disregard the full days - that's what's evenly divisible - so the remainder operator discards them
// // what's left over is just the minutes we need to calcualte the time in reference to midnight
// // if the number is negative that is passed - we add the minutes in a day just to put it in the positive frame - this will still reflect the correct distance from midnight
// // keep in mind that if the number is smaller than the minutes per day - the number just remains the same, the remainder operator returns that number

// function timeOfDay(deltaMinutes) {
//   if (deltaMinutes < 0) {
//     deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
//   } else {
//     deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   }

// // next calculate the hours by doing math.floor on delta minutes over minutes per hour
//   // what this does by doing floor is just get the hours, the decimal is left off because that represents the minutes

// // to get minutes calculate delta minutes % remainder minutes per hour
//   // since the hours were already calculated just need the minutes
//   // the remainder % basically says disregard all hours, what's left over is the minutes

// let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
// let minutes = deltaMinutes % MINUTES_PER_HOUR;

// return formatTime(hours, minutes);
// }




// const HOURS_PER_DAY = 24;
// const MINS_PER_HOUR = 60;
// const MINS_PER_DAY = HOURS_PER_DAY * MINS_PER_HOUR;

// let timeOfDay = (timeInMins) => {
//   while (timeInMins < 0) {
//     timeInMins += HOURS_PER_DAY * MINS_PER_HOUR;
//     // this loop will convert the number to a positive number representing the time in the day
//     // it's converting it to that number by adding all the minutes in a full day, on each iteration it adds a full days minutes
//     // so when it goes over 0 it goes over by the amount or the distance from midnight
//     // so this gives us a good number to work with.
//   }
//   let hours = Math.floor(timeInMins / MINS_PER_HOUR) % HOURS_PER_DAY;
//   console.log(Math.floor(timeInMins / MINS_PER_HOUR), '------')
//   // this will give how many hours, math floor of the time in minutes / mins per hours gives just the hours
//   // doing the remainder off of this will take away full days, this kind of functions like the negative numbers and getting that in range with the while loop
//   // the remainder basically says take off all full days, what is left is the hours in the actual day we want the time
//   let minutes = timeInMins % MINS_PER_HOUR;
//   // this takes off all the full hours, it leaves behind just the relevant minutes. Remainder operator takes off all the minutes associated with a full hour
//   return `${hours.toString().padStart(2, "0")}:${minutes
//     .toString()
//     .padStart(2, "0")}`;
//     // this converst the time to a string, pad start is called on each string number. the first argument of pad start is the total length, so in this case if the number already has two digits, nothing is done. If it doesn't 0 is added as necessary
// };

// <<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>

// ALGORTIHM
  // create variables ofr hours per day, minutes per hour, and minutes per day
  // create a function that takes an argument of a number that represents the time in minutes
  // handle if the time in minutes is negative
    // this can be done with a while loop, while the time < 0
    // on each iteration just add on the minutes in a day
    // so each iteration adds a day, when the total goes over 0 the loop stops
    // the time in minutes will now represent the actual minutes in a single day / distance from midnight
  // set the hours
    // to do this take the time in minutes and divide it by MINUTES PER HOUR
      // Math.floor this - this will isolate just the hours, the minutes will be handled later
      // this number now represents all the minutes that account for full hours (even if it's over multiple days/a really large number)
      // now take the % with hours in a day - what this does it will take off all the hours that are accounted for by full days
      // what's left is just the hours in the day we want to measure / distance from midnight
  // set the minutes
    // take the time in minutes and just remainder this with the MINUTES PER HOUR
    // this will actually just give the minutes we need
  // return string interpolation
    // the numbers have to be converted to Strings
    // use .padStart() to put a 0 on if needed for correct format
      // padStart first argument is total length of string, set this to 2. (if the number is already 2 long nothing will be done)
      // then for second argument put '0'

// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(totalMinutes) {

//   while (totalMinutes < 0) {
//     totalMinutes = totalMinutes + MINUTES_PER_DAY;
//   }

//   let hours = Math.floor(totalMinutes / MINUTES_PER_HOUR) % HOURS_PER_DAY;
//   let minutes = totalMinutes % MINUTES_PER_HOUR;

//   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
// }



// ALGORITHM
  // if the number is negative, convert it to a positive number representing the time/distance from midnight
    // do this by taking away full days in number of minutes until it is above 0
  // find the number of hours
    // from total minutes - isolate just the minutes that represent hours
      // do this by dividing the total minutes by minutes per hour
      // math .floor this to isolate just the full hours, the decimal would represent minutes
      // so this is total number of minutes represented by full hours
      // now have to convert this to hours in a single day
        // so if this number represent multiple days of hours have to get it down to a day
        // this is the equivalent of what we did for negative numbers
        // just eliminate full days
        // get the remainder of this % hours per day
        // this just removes full days, hours in a day from midnight is left
  // find the total number of minutes
    // do this by getting the remainder of total minutes % minutes per hour
    // full hours are taken care of - the remainder is the minutes which is what we want
  // print and display  using template literals

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

// function timeOfDay(totalMinutes) {
//   while (totalMinutes < 0) {
//     totalMinutes = totalMinutes + MINUTES_PER_DAY;
//   }

//   let hours = Math.floor(totalMinutes / MINUTES_PER_HOUR) % HOURS_PER_DAY;
//   let minutes = totalMinutes % MINUTES_PER_HOUR;

//   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
// }




// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");


// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

// You may not use javascript's Date class methods.


// ALGORITHM
// create a function that takes a number as an argument
// the number represents the total minutes before or after midnight - so think distance from midnight
// create a const variable for minutes in an hour, hours in a day, and minutes in a day
// handle negative minutes scenario
  // have to account for full days and remove those to get just the distance from midnight in a single day
  // to do this can add the numbers of minutes in a day until positive
  // this positive number represents the distance from midnight and can be used to calc time
  // add num of minutes in a day using a while loop
// now have to calculate the hours and minutes
  // for hours have to handle the full days as well
  // hours = total minutes / 



// function timeOfDay(totalMinutes) {
//   const MINUTES_PER_HOUR = 60;
//   const HOURS_PER_DAY = 24;
//   const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

//   while (totalMinutes < 0) {
//     totalMinutes = totalMinutes + MINUTES_PER_DAY;
//   }

//  let hours = Math.floor(totalMinutes / MINUTES_PER_HOUR) % HOURS_PER_DAY;
//   // what this does is give you first the number of hours (total minutes / minutes_per_hour) with a decimal if not evenly divisible
//   // you math.floor that to just get total hours - this is what we want, decimal represents the minutes we don't want that
//   // last we want to get rid off full days
//   // so remainder hours per day, what this does is just remove the full days and leave the hours for a single day, distance from midnight
//   let minutes = totalMinutes % MINUTES_PER_HOUR;
 

//   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

// }









// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

// You may not use javascript's Date class methods.



// ALGORITHM
// create constant variables for minutes in an hour, hours, in a day, minutes in a day
// create a function that takes a number as an argument
// have to take care of negative numbers


// function timeOfDay(totalMinutes) {
//   const MINUTES_PER_HOUR = 60;
//   const HOURS_PER_DAY = 24
//   const MINUTES_PER_DAY = 60 * 24;

//   while (totalMinutes < 0) {
//     totalMinutes = totalMinutes + MINUTES_PER_DAY;
//   }

//   let hours = Math.floor(totalMinutes / MINUTES_PER_HOUR) % HOURS_PER_DAY;
//   let minutes = totalMinutes % MINUTES_PER_HOUR;

//   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
// }





console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");



  

