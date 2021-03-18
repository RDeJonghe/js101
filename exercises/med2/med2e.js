// PROBLEM
  /* A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

  Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

  NOTE: The largest possible featured number is 9876543201. */
// EXAMPLES: given
// DATA STRUCTURES: numbers, possibly array/string
// ALGORITHM:
  // Take the number, find next number that is a multiple of seven greater than that
  // if it's odd check to see if each digit occurs once, if so return,
  // if not generate the next highest odd multiple of seven and check
  
  // can also just have an array of all possible values... push in the values that meet those conditions
  // make array of true values, set these using a loop up until the highest value is reached
  // take number, push into array and sort
    // have to check to make sure each digit only occurs once - use a helper function
  // iterate over array, find that number
  // get the index of that + 1
  // return that number

// My original Solution that works but is slow:
// let featuredNumbers = [];
// let num = 7;

// while (num <= 9876543201) {
//   if (eachNumOnlyOnce(num) && multOf7AndOdd(num)) {
//     featuredNumbers.push(num);
//   }
//   num = num + 7;
// }


// function featured(num) {
//   if (num < 9876543201) {
//     featuredNumbers.push(num);
//     featuredNumbers.sort((a, b) => a - b);
//     let indexNeeded;

//     for (let i = 0; i < featuredNumbers.length; i++) {
//       if (featuredNumbers[i] === num) {
//         indexNeeded = i + 1
//       }
//     }
//     return featuredNumbers[indexNeeded];
//   } else {
//     return console.log('There is no number that fulfills those requirements');
//   }
// }



// function eachNumOnlyOnce(num) {
//   let numArr = String(num).split('');
//   numArr.sort((a, b) => a - b);
  
//   let truthFlag;
  
//   for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] === numArr[i + 1]) {
//       truthFlag = false;
//       break;
//     } else {
//       truthFlag = true;
//     }
//   }
//   return truthFlag;
// }

// function multOf7AndOdd(num) {
//   return num % 7 === 0 && num % 2 === 1;
// }




// BOOK ALGORITHM AND SOLUTION:
  // uses do while loops
  // Increment the number and check whether it meets criteria (don't need an array)
  // Make helper function that returns the next number that is both a multiple of 7 and odd - this will get you to the next odd multiple of 7. This is really used to get the number above the users number the entered that is odd and mult of 7. This uses a do while loop
  // Need an all unique helper function
    // this will use an object to check whether a number has been seen, true or false will depend on this. object value is T/F
    // make and array and iterate over the array to check what exists
    // after it's checked if it is seen object value for that number is set to true since it has been seen
  // set a function to perform the operation
    // need to set the featured number to the oddmultiple of 7 function - this gets first value. So a variable is used to hold the incrementing number
    // constant variable to hold the max number - this is compared against in the do while loop, do while less than this
    // do - check if the featured num is unique, if so return it
    // in loop the iteration will increment this by 14 (this will always be odd multiple of 7 then) - makes it perform faster
    // outside of loop return error message, when no number higher is possible, greater than the max number


  


function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNumber = toOddMultipleof7(number);

  do {
    if (allUnique(featuredNumber)) {
      return featuredNumber;
    }

    featuredNumber += 14;
  } while (featuredNumber < MAX_FEATURED);

  return 'There is no number that meets those requirements'
}



function toOddMultipleof7(number) {
  do {
    number +=1
  } while (number % 2 === 0 || number % 7 !== 0)
  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let i = 0; i < digits.length; i++) {
    if (seen[digits[i]]) {
      return false;
    }
    seen[digits[i]] = true;
  }
  return true;
}



console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."