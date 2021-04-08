// Practice for lesson 5, second time through

// let arr = [2, 11, 9, 4, 107, 21, 1];

// arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else return 0;
// })

// console.log(arr);

// let arr = ['back', 'once', 'again'];

// arr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })
// console.log(arr);

// console.log([2, 11, 9, 4, 107, 21, 1].sort());

// let arr = [2, 11, 9, 4, 107, 21, 1];

// // arr.sort((a, b) => b - a);

// // console.log(arr);

// arr.sort();
// console.log(arr);
// console.log(typeof arr[0]);

// let string = 'back once again';
// console.log(string.charAt(0).toUpperCase());
// console.log(string.charCodeAt(0));

// console.log('b'.charCodeAt());
// console.log('.'.charCodeAt());

// let arr = [2, 11, 9, 4, 107, 21, 1];

// arr.sort((a, b) => {
//   console.log(`a is ${a} and b is ${b}`);
//   return a - b;
// })

// let words = ['go', 'ahead', 'and', 'jump'];

// words.sort((a, b) => {
//   if (a.length < b.length) {
//     return -1;
//   } else if (a.length > b.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(words);

// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];


// // want to sort to this: [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];

// // do this with reduce!!!

// scores.sort((a, b) => {
//   let totalAScore = a.reduce((accum, el) => accum += el);
//   let totalBScore = b.reduce((accum, el) => accum += el);

//   return totalAScore - totalBScore;
// })

// console.log(scores);

// for (let i = 0; i < scores.length; i ++) {
//   scores[i].sort((a, b) => a - b);
// }

// console.log(scores);

// let scores2 = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// console.log(scores2);

// for (let i = 0; i < scores2.length; i++) {
//   scores2[i].sort((a, b) => a - b);
// }
// console.log(scores2);

// let scores2 = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

// for (let i = 0; i < scores2.length; i++) {
//   scores2[i].sort((a, b) => a - b);
// }

// console.log(scores2);

// let arr = [[1], [2]];
// arr[0].push([1.25, 1.5, 1.75]);
// console.log(arr);

// let arr = [{ a: 'ant' }, { b: 'bear' }];

// console.log(arr[0]['a']);

// let arr = [{ a: 'ant' }, { b: 'bear' }];

// arr[0]['c'] = 'cat';
// arr[0]['d'] = 'dog';

// console.log(arr);
// [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]

// let arr = [['a', ['b']], { b: 'bear', c: 'cat' }, 'cab'];

// console.log(arr[1].b[3]);
// console.log(arr[2][2]);
// console.log(arr[0][0]);
// console.log(arr[0][1][0]);

// let a = [1, 3];
// let b = [2];
// let arr = [a, b];
// // arr // => [ [ 1, 3 ], [ 2 ] ]

// a[0] = 12;

// // console.log(arr);

// arr[0][1] = 12;

// console.log(a);
// console.log(arr);

// let arr = [2, 4, 6];
// let arr2 = [...arr];

// arr2[0] = 22;

// console.log(arr);
// console.log(arr2);

// let arr = [2, [4, 6]];
// let arr2 = arr.slice();
// arr2.push(8);
// arr2[1].push(7);
// console.log(arr);
// console.log(arr2);

// let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
// let copyOfArr = [...arr];
// arr[1]['b'] = 'bu';
// arr.push({'d' : 'dog'});

// console.log(arr);
// console.log(copyOfArr);

// let obj1 = { a: 'foo' };
// let obj2 = { b: ['bar'] };

// Object.assign(obj1, obj2); // => { a: 'foo', b: 'bar' }
// obj2['b'][0] = 'bu';

// console.log(obj1);                      // => { a: 'foo', b: 'bar' }
// console.log(obj2);

// let obj = { a: { b: 'foo' }, c: ['bar'] };
// let copyOfObj = Object.assign({}, obj);

// obj['a']['d'] = 'baz';
// copyOfObj['d'] = 'dog'
// console.log(copyOfObj); // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
// console.log(obj);       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }

// let arr = [{ b: 'foo' }, ['bar']];
// let arrShallow = arr.slice();
// arrShallow[0]['c'] = 'cat';
// arrShallow[2] = 'owl';
// console.log(arr);
// console.log(arrShallow);

// let serializedArr = JSON.stringify(arr);
// let deepCopyArr = JSON.parse(serializedArr);

// deepCopyArr[0]['b'] = 'fu';
// console.log(arr);
// console.log(deepCopyArr);

// let obj = {a : 'ant', b : ['bug']};
// // let objShallow = Object.assign({}, obj);

// // obj['d'] = 'dog';
// // obj['b'][0] = ('bird');

// // console.log(obj);
// // console.log(objShallow);

// let serializedObj = JSON.stringify(obj);
// let deepCopyObj = JSON.parse(serializedObj);
// let objShallow = Object.assign({}, obj);

// obj['b'][0] = 'bat';

// console.log(obj);
// console.log(deepCopyObj);
// console.log(objShallow);

// let arr = [2, 4, [6, 8]];
// let shallow = [...arr];

// let serialized = JSON.stringify(arr);
// let deep = JSON.parse(serialized);

// arr[2][1] = 66;

// console.log(arr);
// // console.log(shallow);
// console.log(deep);

// let obj = {a : 1, b : {c : 3, d : 4}};

// let shallow = Object.assign({}, obj);

// let serialized = JSON.stringify(obj);
// let deep = JSON.parse(serialized);

// obj['b']['c'] = 33;

// console.log(obj);
// // console.log(shallow);
// console.log(deep);

// let arr = [2, 4, 6, 8, [10, 12]];
// let obj = {'a' : 'ant', 'b' : 'bug', 'c' : ['cats', 'chameleons']};

// Object.freeze(arr);
// Object.freeze(obj);

// arr[0] = 3; // does not reassign this, is frozen
// obj['a'] = 'anteater'; // is frozen can't

// arr[4][0] = 1000; // this does modify becasue it is nested
// arr[4].push(200) // yes can modify

// arr[0] = 20;

// console.log(arr);

// obj['c'][0] = 'CATZ';

// obj['c'].push('kangaroos')

// console.log(obj);

// console.log(Object.isFrozen(arr));

// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?
// let arr = ['10', '11', '9', '7', '8'];
// // since these are strings convert to numbers first to sort

// arr.sort((a, b) => {
//   if (Number(a) > Number(b)) {
//     return -1;
//   } else if (Number(a) < Number(b)) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(arr);

// How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// books.sort((a, b) => {
//   return Number(a['published']) - Number(b['published']);
// })

// console.log(books);

// For each of these collection objects, demonstrate how you would access the letter g.

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// // console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// // console.log(arr2[1]['third'][0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// // console.log(arr3[2]['third'][0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// // console.log(obj1['b'][1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
// console.log((Object.keys(obj2['third'])[0]))

// For each of these collection objects, demonstrate how you would change the value 3 to 4.

// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// // console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// // console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1['first'][2][0] = 4;
// // console.log(obj1);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2['a']['a'][2] = 4;
// console.log(obj2);

// Compute and display the total age of the male members of the family.

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// algorithm
// convert to object.entries to have the key value pairs
// this also needs to be converted to object.entries since it is nested
// iterate over this and filter on male gender
// iterate over the filtered array to add all of the ages


// This works
// let munstersEntries = Object.entries(munsters);
// console.log(munstersEntries);
// let maleAgesArr = [];

// for (let i = 0; i < munstersEntries.length; i ++) {
//   if (munstersEntries[i][1]['gender'] === 'male') {
//     maleAgesArr.push(munstersEntries[i][1]['age']);
//   }
// }

// let maleAgesSummed = maleAgesArr.reduce((accum, el) => accum += el, 0);
// console.log(maleAgesSummed);

// with for in loop

// let ageSummed = 0;

// for (let el in munsters) {
//   if (el['gender' === 'male']) {
//     ageSummed += el['age'];
//   }
// }
// console.log(ageSummed);

// Given the following code, what will the final values of a and b be? Try to answer without running the code.

// let a = 2; // primitive value
// let b = [5, 8]; // array
// let arr = [a, b]; // [primitive value, pointer to an array]

// arr[0] += 2; // this changes the array but not a so a = 2; arr is [4, [5, 8]]
// arr[1][0] -= a; // a is still 2 so array is now [4, [3, 8]] b is also [3, 8] since they point to the same spot in memory



// // Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// // get the arrays with .values and flatten to iterate with for each

// console.log(Object.values(obj).flat())

// strings and letters need different versions of sort() or you could just always do it writing out the long syntax
// let arr = ['b', 'c', 'a'];
// let arr2 = [21, 3, 1];

// // arr.sort((a, b) => a - b);
// // arr2.sort((a, b) => a - b);

// arr.sort();
// arr2.sort();

// console.log(arr);
// console.log(arr2);

// let word = 'clock';

// // print all substrings

// for (let startSlice = 0; startSlice <= word.length - 2; startSlice ++) {
//   for (let numChars2Slice = 2; numChars2Slice <= word.length - startSlice; numChars2Slice ++) {
//     let endSlice = startSlice + numChars2Slice;
//     console.log(word.slice(startSlice, endSlice));
//   }
// }

// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

// convert number to a string
// split the number into single digits in an array
// loop over the array with a method call
// convert each string number to number
// add this to the total

// const sum = function (num) {
//   let arr = String(num).split('');
//   return arr.reduce((accum, el) => {
//     return accum += Number(el);
//   }, 0)
// }

// refactored to be more brief

// const sum = (num) => String(num).split('').reduce((accum, el) => accum += Number(el), 0);

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

// const isOdd = function(num) {
//   return Math.abs(num) % 2 === 1;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// let num = 1;

// while (num <= 99) {
//   console.log(num);
//   num += 2;
// }

// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

// const READLINE = require('readline-sync');

// let bill = READLINE.question('What is the bill? ');
// let tipPercent = READLINE.question('What is the tip percentage');

// let tip = Number(bill) * (Number(tipPercent) / 100);

// let total = Number(bill) + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);
/* What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00 */

// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// const READLINE = require('readline-sync');

// let num = READLINE.question('Enter in a number greater than zero =>  ');
// let operation = READLINE.question('Enter "s" for sum or "p" for product');

// let numArr = [];
// let realNum = Number(num);
// let totalSum = 0;
// let totalProd = 1;

// while (realNum > 0) {
//   numArr.push(realNum);
//   realNum --;
// }

// if (operation === 's') {
//   for (let el of numArr) {
//     totalSum += el;
//   }
//   console.log(totalSum);
// } else {
//   for (let el of numArr) {
//     totalProd *= el;
//   }
//   console.log(totalProd);
// }



/* Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15. */

/* Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720. */

// // Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// const shortLongShort = function(str1, str2) {
//   if (str1.length > str2.length) {
//     console.log(str2 + str1 + str2);
//   } else {
//     console.log(str1 + str2 + str1);
//   }
// }

// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"

// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1

// const multisum = (num) => {
//   let numArr = [];
//   while (num >= 1) {
//     if (num % 3 === 0 || num % 5 === 0) {
//       numArr.push(num);
//     }
//     num --;
//   }
//   return numArr.reduce((accum, el) => accum += el, 0);
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

// simple example with recursion

// function double(num) {
//   console.log(num);

//   if (num < 50) {
//     double(num * 2);
//   }
// }

// double(5);

// function cCat(str) {
//   console.log(str);

//   if (str.length < 20) {
//     cCat(str + 'z');
//   }
// }

// cCat('y');

// let num = 5;

// function add(number) {
//   console.log(number);
//   number += 1;

//   if (number < 10) {
//     add(number);
//   }
// }

// add(num);

// function fibonacci(num) {
//   if (num < 2) return num;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(6));  // => 8
// console.log(fibonacci(8)); // => 21
// console.log(fibonacci(20)); // => 6765


// while (arr.length < 10) {
//   arr[arr.length] = num;
//   num += 1;
// }
// console.log(arr)





// const ARR = [2, 4, 5];
// ARR[0] = 22;

// // console.log(ARR);
// const ARR2 = ARR;

// ARR2[0] = 33;

// console.log(ARR)
// console.log(ARR2)

// CONSTANT ARRAYS - THE CONTENTS CAN BE MODIFIED, THEY ARE CONSTANT IN THAT THEY CANNOT BE REASSIGNED WHERE THEY POINT TO. SO BE CAREFUL AND UNDERSTAND THAT CONSTANT REALLY REFERS TO THE POINTER, NOT TO THE CONTENTS

// OBJECT.FREEZE() CAN BE USED ON ARRAYS, ARRAYS ARE OBJECTS, FREEZES TOP LEVEL ELEMENTS (BUT NOT NESTED ELEMENTS) BUT YOU CAN FREEZE SUB ELEMENTS ALSO

// let arr = [1, 2, [3, 4]];
// Object.freeze(arr);
// Object.freeze(arr[2]);

// arr[2][0] = 333;

// console.log(arr);

// let arr = [1, 2, 3, 4];
// let arr2 = [4, 44, 444];
// arr = arr.concat(arr2);
// console.log(arr);
// arr[arr.length] = arr2;
// console.log(arr)

// let arr = [2, 4, 6];
// // let arr2 = []

// for (let i = 0; i < arr.length; i ++) {
//   arr[i] = arr[i] + 1;
// }

// console.log(arr)

// let strings = ['a', 'b', 'c', 'd'];

// let capped = strings.reduce((accum, el) => accum + el.toUpperCase(), '');

// console.log(strings);
// console.log(capped);

// let arr = [2, 4, 6];

// let reducer = ((accum, el) => accum + el);

// console.log(arr.reduce((accum, el) => accum + el, 0));

// let reducer = ((accum, el) => {
//   return accum = accum.concat(el + 1);
// }, [])

// console.log(arr.reduce((accum, el) => {
//   return accum = accum.concat(el + 10)
// }, []));

// 1) Turn an array of numbers into a total of all the numbers
// let arr = [1, 2, 3];

// console.log(arr.reduce((accum, el) => accum + el, 0));

// 2) Turn an array of numbers into a long string of all those numbers.

// let arr = [1, 2, 3];

// console.log(arr.reduce((accum, el) => accum + String(el)), '');

// let voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// // solve with reduce - can acutally reduce this array even though inner elements are objects

// let totalVoters = voters.reduce((accum, el) => {
//   if (el['voted'] === true) {
//     return accum + 1;
//   } else {
//     return accum;
//   }
// }, 0);

// console.log(totalVoters);

// // let totalVoters = 0;

// // for (let i = 0; i < voters.length; i ++) {
// //   if (voters[i]['voted'] === true) {
// //     totalVoters += 1;
// //   }
// // }

// // FILTER BEFORE REDUCING - if using conditional if, make sure to return something even for values you don't want

// let totalVoters = voters.filter(el => el['voted'] === true).reduce((accum, el) => accum + 1, 0);

// console.log(totalVoters);

// let totalVoters = voters.reduce(function(sum, record){
//   if(record.voted === true) {
//      return sum + 1;
//    } else{
//       return sum
//   }; 
// }, 0);
// console.log(totalVoters)

// let totalVoters = voters.reduce((accum, el) => {
//   if (el['voted'] === true) {
//     return accum + 1;
//   } else {
//     return accum;
//   }
// }, 0)

// console.log(totalVoters);

// valuable - understand why return accum above

// let arr = [[2, 6, 5], [300, 100, 400], [21, 33, 20]];

// arr.sort((a, b) => {
//   let totalA = a.reduce((accum, el) => accum + el, 0);
//   let totalB = b.reduce((accum, el) => accum + el, 0)

//   // if (totalA < totalB) {
//   //   return -1;
//   // } else if (totalA > totalB) {
//   //   return 1;
//   // } else {
//   //   return 0;
//   // }
//   return totalA - totalB;
// })

// arr.forEach(el => {
//   el.sort((a, b) => a - b);
// })

// let arr = ['back', 'once', 'again'];
// // arr.sort();
// arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if
//     (a > b) {
//       return 1;
//     } else {
//       return 0
//     }
// });

// let arr = [['back'], ['once'], ['again']];

// for (let i = 0; i < arr.length; i++) {
//  let a = arr[i];
//  let b = arr[i + 1]
// }

// console.log(arr);

// let wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(wishlist.reduce((accum, el) => {
//   return accum + el['price']
// }, 0));

// let arrays = [
//   ["1", "2", "3"],
//   [true],
//   [4, 5, 6]
// ];

// console.log(arrays.reduce((accum, el) => {
//   return accum = accum.concat(el)
// }, []))

// let doubler = function(num) {
//   console.log(num);
//   num *= 2;
//   if (num < 65) {
//     doubler(num);
//   }
// }

// doubler(3);

// let add2String = (str) => {
//   console.log(str);
//   str = str + 'z';
//   if (str.length < 12) {
//     add2String(str);
//   }
// }

// add2String('xy');

// let add2Arr = function(arr) {
//   console.log(arr);
//   arr.push('2');
//   if (arr.length < 5) {
//     add2Arr(arr);
//   }
// }

// add2Arr([2, 3])

// let fibonacci = function(num) {
//   if (num < 2) {
//     return num;
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(20))
// console.log(fibonacci(6))
// console.log(fibonacci(7))

// function factorial(num) {
//   let total = 1;
//   while (num > 1) {
//     total *= num;
//     num -= 1;
//   }
//   return total;
// }

// let counter = 0;

// while (counter  1) {
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }

// for (let i = 0; i < 5;) {
//   console.log(i += 1);
// }

// The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result;


// do {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// } while (result <= 2)

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// function factorial(num) {
//   console.log(num);
//   if (num === 1) {
//     return 1;
//   }

//   return num * factorial(num - 1);
// }

// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320

// function adder(num) {
//   console.log(num);
//   if (num === 10) {
//     return 10;
//   }

//   return num + adder(num + 1);
// }

// console.log(adder(6));

// false || (true && false); FALSE
// true || (1 + 2); TRUE
// (1 + 2) || true; TRUE
// true && (1 + 2); TRUE
// false && (1 + 2); FALSE
// (1 + 2) && true; TRUE
// (32 * 4) >= 129; FALSE
// false !== !true; FALSE
// true === 4; FALSE
// false === (847 === '847'); TRUE
// false === (847 == '847');FALSE
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;  

// console.log(!(100/5));

// function factorial(num) {
//   if (num === 1) {
//     return 1
//   }
//   return num * factorial(num -1);
// }

// console.log(factorial(6));
// console.log(factorial(7));

// function adder(num) {
//   if (num === 6) {
//     return num;
//   }
//   return num + adder(num + 1);
// }

// console.log(adder(3))

// let nums = [[4, 2, 3], [33, 22, 44], [111, 101, 100]];

// nums.forEach(subArr => {
//   return subArr.sort((a, b) => a - b);
// })

// console.log(nums);

// BUILIDING .filter, .map, .forEach with reduce.

// let arr = [2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.reduce((accum, el) => {
//   if (el % 2 === 0) {
//     return accum.concat(el);
//   } else{
//     return accum;
//   }
// }, []);

// let newerArr = arr.reduce((accum, el) => {
//   return accum.concat((el * 2));
// }, [])

// console.log(arr);
// console.log(newArr);
// console.log(newerArr);

// arr.reduce((_, el) => {
//   console.log(el);
// })

// let arr2 = [[2, 3, 4], [5, 6, 7]];

// arr2.forEach(subArr => {
//   subArr.sort((a, b) => b - a);
// })


// arr2.reduce((_, subArr) => {
//   subArr.sort((a, b) => b - a);
// })
// console.log(arr2);

// function adder(num) {
//   console.log(num);
//   num += 1;
//   if (num < 10) {
//     return adder(num);
//   }
// }

// adder(4);

// function cCat(arr) {
//   arr = arr.concat('xyz');
//   console.log(arr);
//   if (arr.length < 10) {
//     return cCat(arr);
//   }
// }

// cCat([2, 3, 4]);

// function factorial(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

// console.log(factorial(6))

// CHECK TO SEE IF 2 DIFFERENT ARRAYS HAVE THE SAME VALUES - not nested arrays

// iterate over first array
// on each iteration check that value against value of other array
// if they are not equal return false
// otherwise return true

// let array1 = [1, 2, 3, 'hello', 6];
// let array2 = [1, 2, 3, 'hello', 6];

// function areEqual(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(areEqual(array1, array2))

// let nums = [2, 4, 6];
// let arr = ['back', 'once', 'again', nums];

// console.log(arr.includes(nums));

// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// myArray.forEach(subArr => subArr.forEach(num => {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }))

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let evenOdd = myArray.map(num => {
//   if (num % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// })

// let evenOdd = myArray.reduce((accum, num) => {
//   if (num % 2 === 0) {
//     return accum.concat('even');
//   } else {
//     return accum.concat('odd');
//   }
// }, [])

// console.log(evenOdd);

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

// const findIntegers = (arr) => {
//   return arr.filter(el => {
//     return Number.isInteger(el);
//   }
//   )}

// const findIntegers = function(arr) {
//   return arr.reduce((accum, el) => {
//     if (Number.isInteger(el)) {
//       return accum.concat(el);
//     }
//     return accum;
//   }, [])
// }

  // let nums = findIntegers(things);
  // console.log(nums);

  // Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

//   let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

//   // function oddLengths(array) {
//   //   return array.map(el => el.length).filter(el => el % 2 === 1);
//   // }

// let oddLengths = function(array) {
//   return array.reduce((accum, el) => {
//     return accum.concat(el.length);
//   }, []).reduce((accum, el) => {
//     if (el % 2 === 1) {
//       return accum.concat(el);
//     }
//     return accum;
//   }, [])
// }

// console.log(oddLengths(arr)); // => [1, 5, 3]

// Use reduce to compute the sum of the squares of all of the numbers in an array:

// let array = [3, 5, 7];

// function sumOfSquares(arr) {
//   return arr.reduce((accum, num) => {
//     return accum += (num * num);
//   }, 0)
// }
// // console.log(sumOfSquares(array)); // => 83

// let arr = [
//   ["hello", "world"],
//   ["example", "mem", null, 6, 88],
//   [4, 8, 12]
// ];

// arr[1][3] = 606;
// console.log(arr);

// let funStuff = ['riding dirt bikes', 'camping'];

// let person = {
//   name:    'Jane',
//   age:     37,
//   hobbies: funStuff
// };

// console.log(person);
// delete person.age;

// console.log(person)

// let objA = {fu : 'bu'};
// let objB = {man : 'chu'};

// Object.assign(objA, objB);

// console.log(objA.man === objB.man)
// console.log(objA)
// console.log(objB)

// let myArray = {
//   0 : 'back',
//   1 : 'once',
//   2 : 'again',
//   length : 3
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let arr = Object.keys(obj).map(el => el.toUpperCase());

// console.log(arr)
// console.log(obj)

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// // let newObj = Object.create(myProtoObj);
// let myObj = Object.create(myProtoObj);
// // let newerObj = Object.assign({}, myProtoObj);
// console.log(myObj)
// console.log(newerObj)

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };
// let myObj = Object.create(myProtoObj);

// console.log(myObj.bar);

/* Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

Here are some examples for your reference: */

// set an empty object
// if no second argument set it equal to that array
// iterate over the original object
// assign to the new object the key values specified


// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let gnr = {
//   vocals: 'axl',
//   guitar: 'slash',
//   drums: 'steven',
//   bass: 'duff'
// }

// function copyObj(obj, arr) {
//   let resultObj = {};
//   if (!arr) {
//     return resultObj = obj;
//   }
// for (let i = 0; i < arr.length; i++) {
//   resultObj[arr[i]] = obj[arr[i]];
// }
// return resultObj;
// }

// let copied = copyObj(gnr, ['vocals', 'guitar']);
// console.log(copied);


// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// let str = 'hello';

// function assign(string) {
//   string = 'hi'
// }

// assign(str);

// console.log(str);

// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// obj['bar'][3]['xyz'] = 606;

// console.log(obj);

// let c = [1, 2];
// let d = c;
// // c = [33, 44]
// // c[2] = 17;

// console.log(c);
// console.log(d);

// let names = ['joe', 'sally', undefined, 'bob'];

// names.forEach(el => {
//   try {
//     console.log(`The name length is: ${el.length}`)
//   } catch (exception) {
//     console.log('check this')
//   } 
// })


// console.log(Math.sqrt(37));


// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// function allMatches(arr, regex) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (regex.test(arr[i])) {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// console.log(words.filter(el => /lab/.test(el)));

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// function notANumber(val) {
//   if (val !== val) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(notANumber(NaN));
// console.log(notANumber(5));
// console.log(notANumber('string'));

// console.log(3 / -0);
// console.log(3 / 0);

// function repeat(num, str) {
//   let newStr = '';
//   while (num > 0) {
//     newStr = newStr + str
//     num -= 1;
//   }
//   console.log(newStr)
// }

// repeat(3, 'ha'); // 'hahaha'

// let str = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'
// console.log(str)

// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';

// console.log(string1.toLowerCase() === string2.toLowerCase())

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// console.log(byteSequence.includes('x'))

// function isBlank(str) {
//   return str.trim().length === 0;
// }

// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // false
// console.log(isBlank(''));     // true

// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

// take string
// split it at the word level
// upper the zero index of each word
// join

// let string = 'launch school tech & talk';

// function capIt(str) {
//   let arr = str.split(' ');

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//   }
//   return arr.join(' ');
// }

// console.log(capIt(string));

// let scores = [96, 47, 113, 89, 100, 102];

// console.log(scores.filter(num => num >= 100).length)

// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// vocabulary.forEach(subArr => subArr.forEach(word => console.log(word)));


// function filter(input) {
//   return Array.isArray(input);
// }

// console.log(filter([2, 4]))

// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];

// function contains(city, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === city) {
//       return true;
//     } 
//   }
//   return false;
// }
// console.log(contains('Barcelona', destinations)); // true
// console.log(contains('Nashville', destinations)); // false


// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// passcode = passcode.join('-');

// console.log(passcode)
// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

