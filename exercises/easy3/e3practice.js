// practice for Easy 3 exercises

// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

/* crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // "" */

// WITH PUSH
// function crunch(str) {
//   let single = [];
//   let strArr = str.split('');
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] !== strArr[i + 1]) {
//       single.push(strArr[i]);
//     }
//   }
//   return single.join('');
// }

// WITH SPLICE

// function crunch(str) {
//   let strArr = str.split('');
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === strArr[i + 1]) {
//       strArr.splice(i, 1);
//       i -= 1; // this is what you need to make this work, decrement the index so it goes over it again so no doubles
//     }
//   }
//   return strArr.join('');
// }

// USING FILTER

// function crunch(str) {
//   let strArr = str.split('');
//   let single = strArr.filter((el, indx) => {
//     if (el !== strArr[indx + 1]) {
//       return el;
//     }
//   })
//   return single.join('');
// // }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch('')); 

// Add some code inside of the for loop below that logs the current value of i to the console on each iteration. Before you run the code: What sequence of numbers do you expect to be logged?

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i -= 1) {
//   console.log(i);
// }
// console.log('Launch!');

// let greeting = 'Aloha!';

// for (let i = 3; i > 0; i -= 1) {
//   console.log(greeting);
// }

// Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.

// for (let i = 1; i <= 100; i ++) {
//   console.log(i * 2);
// }

// Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.

// let array = [1, 2, 3, 4];
// let index = 0;

// while (index < array.length) {
//   console.log(array[index]);
//   index += 1;
// }

// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// for (let i = 0; i < cities.length; i ++) {
//   if (cities[i] === null) {
//     continue;
//   }
//   console.log(cities[i]);
// }

// for (let i = 0; i < 1; i += 1) {
//   console.log("and on");
// }

// let num = 1;
// while(num < 40) {
//   console.log(num);
//   num += 2;
// }

// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// function stringy(num) {
//   let str = '';
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       str += '0';
//     }
//     else {
//       str += '1'
//     }
//   }
//   return str;
// }

// function stringy(num) {
//   let str = '';
//   for (let i = 1; i <= num; i++) {
//     str += ((i % 2 === 0) ? 0 : 1);
//   }
//   return str;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.


function crunch(str) {
  let strArr = str.split('');
  let finalArr = [];

  for (let i = 0; i < strArr.length; i ++) {
    if (strArr[i] !== strArr[i + 1]) {
      // console.log(strArr[i]);
      finalArr.push(strArr[i]);
      // console.log(finalArr);
    }
  }
  return finalArr.join('');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
