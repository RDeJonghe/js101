// practice exercises

// 1.
// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

// create a function that takes a string as an argument
// create a copy to not mutate orignal variable
// split the string at the word level
// iterate over the resulting array
// on each iteration set the first element of the word to uppercase, have to set this equal to itself
// join the array and return


// let str = 'launch school tech & talk';

// function cap(str) {
//   let copy = str.slice();
//   let wordArray = copy.split(' ');

//   // for (let i = 0; i < wordArray.length; i++) {
//   //   wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
//   // }

//   let upper = wordArray.map(word => {
//     return word = word[0].toUpperCase() + word.slice(1);
//   }) 

//   return upper.join(' ');
// }

// console.log(cap('launch school tech & talk'));

// 2. // Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

// ALGORITHM
// create a function that takes an array as an argument
// create an empty array for results
// iterate over passed array
// on each iteration reduce, have the accumulator be the sum total
// on each iteration, push this value to the results array

// function runningTotal(arr) {
//   if (arr.length === 0) return arr;
  
//   let results = [];
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     results.push(total);
//   }



//   return results;
// }



// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // [] 

// 3
/* Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Examples: */

// ALGORITHM
// if length of string is 1, return the string
// split the string at the space level
// with result array iterate over it
// on each iteration
  // if length of string is 1, return that
  // if length of string is 2 return concat of str[1] + str[0]
  // else str[length - 1] + str.slice(1, length - 1) + str[0]
// join and return


// function swap(str) {
//   if (str.length === 1) return str;

//   let words = str.split(' ');

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length === 1) {
//       words[i];
//     } else if (words[i].length === 2) {
//       words[i] = words[i][1] + words[i][0];
//     } else {
//       words[i] = words[i][words[i].length - 1] + words[i].slice(1, words[i].length -1) + words[i][0];
//     }

//   }
//   return words.join(' ');
// }



// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a" 


// let num = 1;

// switch (true) {
//   case num === 1 :
//     console.log('one');
//     break;
//   case (num === 6) :
//     console.log('six');
//     break;
//   default : console.log('not one or six');
// }

// let name = 'Joe';

// switch (name[0]) {
//   case ('M') :
//     console.log('begins with M');
//     break;
//   case 'J' :
//     console.log('begins with J');
//     break;
//   default : console.log('not m or j');
// }

// let num = 6;

// function add(num) {
//   return num + num;
// }

// function mult(num) {
//   return num * num;
// }

// let result;

// console.log(num === 6 ? result = add(num) : result = mult(num));

// console.log(result);

// function car(newCar) {
//   let make = getMake(newCar);
//   let model = getModel(newCar);
//   return [make, model];
// }

// function getMake(newCar) {
//   return newCar.split(' ')[0];
// }

// function getModel(newCar) {
//   return newCar.split(' ')[1]; // error was here, changed from 2 to 1
// }

// let [ make, model ] = car('Ford Mustang');
// console.log(make === 'Ford');   // => true
// console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined

// debug.js

// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   counter += 1;
// }

// let arr = [2, 4, 6, 8, 10];

// let total = arr.reduce((accum, el) => {
//   return accum += el;
// }, 0);
// debugger;
// console.log(total);

// let a = 2;
// let b = 3;

// debugger;
// let str1 = 'Back ';
// let str2 = 'Once Again';
// debugger;

// function add (num1, num2) {
//   return num1 + num2;
// }

// function concatIt(str1, str2) {
//   return str1 + str2;
// }

// add(a, b);
// concatIt(str1, str2);

// debugger;
// console.log(a);


// let add = function(a, b) {
//   return a + b;
// }

// let mult = function(a, b) {
//   return a * b;
// }

// let num1 = 2;
// let num2 = 4;

// let bigNum = mult(add(num1, num2), 10);

// console.log(bigNum);

// let advice = "Few things in life are as important as house training your important pet dinosaur.";

// let newAdvice = advice.split('important');

// console.log(newAdvice)