// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

// ALGORITHM
// create a function that takes a number as an argument
// turn the number into a string
// iterate over the string
// send the number of each string to a results array
// return results array

// function digitList(num) {
//   let strNumber = String(num);
//   let results = [];
//   for (let i = 0; i < strNumber.length; i ++) {
//     results.push(Number(strNumber[i]));
//   }
//   return results;
// }

// with .map()

// function digitList(num) {
//   let strNumArr = String(num).split('');
//   return strNumArr.map(el => Number(el));
// }






console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]