// easy 5 exercise 1

// PROBLEM:
  // Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.
// EXAMPLES: given
// DATA STRUCTURES: numbers, strings
// ALGORITHM:
  // Take the decimal number and convert and split it up into degrees, minutes, seconds. Steps:
    // For the degrees use the whole number part of the decimal
    // For the minutes multiply the remaining decimal by 60. Use the whole number part of the answer as minutes.
    // For the seconds multiply the new remaining decimal by 60 (still want the whole number or round) */
  // Display the results as a string
    // Need to add zeros to the numbers that are under 10, so 6 becomes 06
    // can use String() to make a string
    // check length of string, then add the 0 on if needed
    // Can use a helper function for this
  // Return the new string displaying info and symbols ˚ ' "

 
function dms(num) {
  let degrees = Math.floor(num);
  let minutes = Math.floor((num - degrees) * 60);
  let minutesDecimal = ((num - degrees) * 60) - minutes;
  let seconds = Math.floor(minutesDecimal * 60);

  return `${makeString(degrees)}˚ ${makeString(minutes)}' ${makeString(seconds)}"`;
}

function makeString(num) {
  let strNum = String(num);
  if (strNum.length < 2) {
    strNum = '0' + strNum;
  }
  return strNum;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));  

//  function dms(num) {
//    let degrees = Math.floor(num);
//    let minutes = Math.floor((num - degrees) * 60);
//    let minutesDecimal = (((num - degrees) * 60) - minutes);
//    let seconds = Math.floor(minutesDecimal * 60);

//    return `${makeString(degrees)}˚ ${makeString(minutes)}' ${makeString(seconds)}"`

//  }

//  function makeString(num) {
//    let strNum = String(num);
//    if (strNum.length < 2) {
//      strNum = '0' + strNum;
//    }
//    return strNum;
//  }

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"