// easy 2 exercises second time from lesson3

// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

// let advice = "Few things in life are as important as house training your important pet dinosaur.";

// let newStr = advice.replace('important', 'urgent');
// console.log(newStr);
// let newStr2 = advice.replace(/important/g, 'urgent');
// console.log(newStr2);

// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice().reverse());
// console.log([...numbers].reverse());
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]



// numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice().sort((num1, num2) => num2 - num1));
// console.log([...numbers].sort((num1, num2) => num2 - num1));
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// let arr = [];
// numbers.forEach(el => {
//   return arr.unshift(el);
// })

// console.log(arr);
// console.log(numbers);


// Given a number and an array, determine whether the number is included in the array.

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1))
// console.log(numbers.includes(number2))

// Starting with the string:

// let famousWords = "seven years ago...";

// console.log('Four score and '.concat(famousWords));
// console.log('Four score and ' + famousWords);

// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1);
// arr.splice(0, 0, 34);
// arr.splice(2, 2, 66, 77);
// arr.splice(-1, 1, 55);
// arr.splice(- 3, 0, 33);
// arr.splice(-3, 2, 33, 44);

// console.log(arr);


// let arr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// let newArr = arr.flat(); //quick way

// arr = [].concat(...arr);

// arr = arr.reduce((accum, el) => {
//   return accum.concat(el);
// }, [])

// let newArr = [];
// arr.forEach(el => {
//   return newArr = newArr.concat(el);
// })

// // console.log(arr);
// console.log(newArr);

// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
//convert object to array of key value pairs
// iterate over array
// select sub array that has barney as a key (do this with bracket notation el[0])

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// not most efficient way
let arr = Object.entries(flintstones);
let selected = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] === 'Barney' || arr[i][j] === 2) {
//       selected.push(arr[i][j]);
//     }
//   }
// }
// console.log(selected);

// not most efficient way refactored a bit

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i][0] === 'Barney') {
//     selected.push(arr[i]);
//   }
// }

// selected = selected.reduce((accum, el) => {
//   return accum.concat(el)
// }, [])

// console.log(selected);

// Efficient answer
// let results = Object.entries(flintstones).filter(el => el[0] === 'Barney').flat();

// practicing efficient answer with reduce instead of flat

// let arr = Object.entries(flintstones).filter(el => el[0] === 'Barney');

// let results = arr.reduce((accum, el) => {
//   return accum = accum.concat(el);
// }, [])

// console.log(results);

// [ 'Barney', 2 ]

// How would you check whether the objects assigned to variables numbers and table below are arrays?

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let title = "Flintstone Family Members";

// let padding = Math.floor((40 - title.length) / 2);

// console.log(title.padStart(padding + title.length));

// Write two one-line expressions to count the number of lower-case t characters in each of the following strings:
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log(statement1.split('').filter(el => el === 't').length);
// console.log(statement2.split('').filter(el => el === 't').length);

