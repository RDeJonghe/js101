// Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

// ALGORITHM
// create a function that takes a number as an argument
// create an array with the number - save this to a variable
// reverse the array
// create a while loop
  // while arr[0] === 0
  // shift to get rid of it
// 



// ALGORITM
// create a function that takes the number as an argument
// turn the number into a string
// set empty results variable = ''
// iterate backwards over the string
// set results equal to results + that string number
// parseInt() the results -- see if this handles the exception - yes it does

function reverseNumber(num) {
  let stringNum = String(num);
  let results = '';
  for (let i = stringNum.length - 1; i >= 0; i --) {
    results = results.concat(stringNum[i]);
  }
  return parseInt(results);
}






console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1