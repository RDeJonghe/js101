// Be able to

// 1.
// Find all substrings of a word that are palindromes (the same forward as backwards)

// example of palindromes are the words kayak, mom
// example of splitting a word into substrings
  // slow: slow, slo, sl, low, lo, ow 
  // all combinations of at least 2 characters, appearing in the order they appear in the word
// Test cases, examples of a palindrome within substrings is:
  // "supercalifragilisticexpialidocious" 
    // Return ["ili"] (only substring the same forward as backwards)
  // "abcddcbA"  
    // Return ["bcddcb", "cddc", "dd"] (case matters 'A' not the same as 'a')
  // "palindrome"  [] 
    // If it's not a palindrome return an empty array


// function allSubstrings(str) {
//   let results = [];
//   let startSlice = 0;

//   while (startSlice <= str.length - 2) {
//     let numChars = 2;
//     while (numChars <= str.length - startSlice) {
//       let endSlice = startSlice + numChars;
//       results.push(str.slice(startSlice, endSlice));
//       numChars ++;
//       }
//       startSlice ++;
//   }
//   return results;
// }

// console.log(allSubstrings('clock'));

// Find all substrings
// Be able to check if a word is a palindrome
// Return all the substrings that are palindromes



// console.log(palindromeSubstrings('supercalifragilisticexpialidocious'));
// console.log(palindromeSubstrings('abcddcbA'));
// console.log(palindromeSubstrings('palindrome'));
  
// 2.
// given a nested array of scores [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
  // 1. Sort by the subarray total, the total being the sum of the 3 scores
    // answer  [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];
  // 2. Sort the numbers in the nested arrays in order but leave the subarrays in the same order
    // answer [[3, 4, 6], [6, 8, 9], [1, 2, 4]]

// scores.sort((a, b) => {
//   let totalA = a.reduce((accum, el) => accum += el);
//   let totalB = b.reduce((accum, el) => accum += el);

//   return totalA - totalB;
// })

// console.log(scores);

// for (let i = 0; i < scores.length; i ++) {
//   scores[i].sort((a, b) => a - b); // key is the [i] that's what sorts it on the inner level of the loop
// }

// console.log(scores);

// 3.
// combine 2 arrays without repeating values

// one way

// let arr3 = Array(...arr1);

// for (let el of arr2) {
//   if (!arr3.includes(el)) {
//     arr3.push(el);
//   }
// }
// console.log(arr3);

// can also put all of them in there and then iterate and remove

// let arr1 = [2, 4, 6, 8];
// let arr2 = [6, 8, 10, 12, 14];
// let arr3 = Array(arr1, arr2).flat().sort((a, b) => a - b);

// function combine(arr) {
//   let results = [];
//   for (let i = 0; i < arr3.length; i++) {
//     if (arr3[i] !== arr3[i + 1]) {
//       results.push(arr3[i]);
//     }
//   }
//   return arr3 = results;
// }

// combine(arr3);

// console.log(arr3);


// 4. 
// flatten a single nested array without using .flat()

// let nums = [2, 4, [6, 8], 10, [12], [14, 16]];
// console.log(nums);


// can do with reduce
// nums = nums.reduce((accum, el) => accum.concat(el), []);

// can also do with regular iteration

// let flat = [];

// for (let i = 0; i < nums.length; i ++) {
//   flat = flat.concat(nums[i]); // key here is to set it equal
// }

// console.log(flat)

// 5.
// Be able to make deep copies of arrays and objects

// let serializedArr = JSON.stringify(arr);
// let deepCopy = JSON.parse(serializedArr);

// arr[2][0] = 66;

// console.log(arr);
// console.log(shallow);
// console.log(deepCopy);

// let obj = {a : 'ant', b : 'bug', c : {'cr' : 'cricket', 'ch' : 'chicken'}};

// let shallow = Object.assign({}, obj);

// let serializedObj = JSON.stringify(obj);
// let deepCopy = JSON.parse(serializedObj);

// obj['a'] = 'anteater';
// obj['c']['ch'] = 'chick';

// console.log(obj);
// console.log(shallow);
// console.log(deepCopy);

// 6.
// Iterate over nested data structures, objects within arrays, arrays within objects, arrays within arrays, objects within objects
// Need examples



// 7.
// Iterate over nested objects and sum / perform some action
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

// for (let key in munsters) {
//   if (munsters[key]['gender'] === 'male') { // careful here, you need to say munsters[el]['gender'] not just [key]['gender']
//     ageSummed += munsters[key]['age'];
//   }
// }
// console.log(ageSummed);

// 8.
// Iterate over an object
/* One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age, and gender of each family member: (Name) is a (age)-year-old (male or female).*/

// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// with normal loop over array made with object.entries
// let entries = Object.entries(munsters);
// console.log(entries);

// for (let i = 0; i < entries.length; i ++) {
//   console.log(`${entries[i][0]} is a ${entries[i][1]['age']}-year-old ${entries[i][1]['gender']}.`);
// }

// with a for in loop // careful with key - key alone is just key not munsters[key] - that will say [object Object] in console.

// for (let key in munsters) {
//   console.log(`${key[0].toUpperCase() + key.slice(1)} is a ${munsters[key]['age']}-year-old ${munsters[key]['gender']}.`);
// }


// 9. 
//Iterate over an object
// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// // get the arrays with .values and flatten to iterate with for each

// let vowels = 'aeiou';
// let results = [];
// console.log(Object.values(obj).flat().forEach(word => {
//   word.split('').forEach(letter => {
//     if (vowels.includes(letter)) {
//       results.push(letter);
//     }
//   })
// }))

// console.log(results);

// 10.
// Sort and create new copy
// Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.

// with a deep copy
// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// let serializedArr = JSON.stringify(arr);
// let deepCopy = JSON.parse(serializedArr);

// for (let i = 0; i < deepCopy.length; i ++) {
//   deepCopy[i].sort((a, b) => {
//     if (a < b) {
//       return -1;
//     } else if (a > b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })
// }

// console.log(arr);
// console.log(deepCopy);

// with map (map returns a new array) but you have to slice each element (subarray) since those are single level arrays they can be sliced as a real copy
// Careful with difference between strings and numbers! .sort() works differently for each one
  // .sort() for strings (this doesn't work for numbers)
  // .sort((a, b) => a - b) for numbers (this doesn't work for strings)
  // can always do with the written out syntax of -1, 1, 0 like above and it works for both

// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// let sorted = arr.map(el => {
//   if (el[0] === 'number') {
//     return el.slice().sort((a, b) => a - b);
//   } else {
//     return el.slice().sort();
//   }
// })

// console.log(arr);
// console.log(sorted);

// 11. 
// Modify an array of objects DIFFICULT - NEED TO UNDERSTAND THIS
// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

// algorithm
// do this by creating a new object within map this was the part I missed
// need to do a nested loop to iterate over each inner array

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let mapped = arr.map(obj => {
//   let incremented = {};

//   for (let key in obj) {
//     incremented[key] = obj[key] + 1;
//   }
//   return incremented;
// })

// console.log(arr);
// console.log(mapped);

// 12.
// iterate and filter
// Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

// map first becasue we want same structure

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let newArr = arr.map(subArr => {
//   return subArr.slice().filter(num => { // don't need .slice() -> .filter() is called on the sub array, that returns a new array
//     return num % 3 === 0;
//   })
// })

// can do like this:
// let newArr = arr.map(subArr => {
//   return subArr.filter(num => num % 3 === 0);
// })

// console.log(arr);
// console.log(newArr);

// 13.
// sort
// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
  // let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
  // Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
  // [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// arr.sort((a, b) => {
//   let aOdds = a.filter(el => el % 2 === 1).reduce((accum, el) => accum + el, 0); // Have to filter before reduce!!!
//   let bOdds = b.filter(el => el % 2 === 1).reduce((accum, el) => accum + el, 0);

  
//   if (aOdds < bOdds) {
//     return -1;
//   } else if (aOdds > bOdds) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(arr);

// 14.
// FROM LESSON 5 PRACTICE PROBLEMS
// NEED TO PRACTICE AND UNDERSTAND THIS
// Iterate over object THIS ONE IS DIFFICULT, UNDERSTAND HOW TO DO THIS
// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

// The return value should look like this:
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// use object.values - you can iterate over all of the inner objects, they are indexed in an array then, no need to convert the inner objects to arrays





// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// const CAPITALIZE = (str) => {
//   return str[0].toUpperCase() + str.slice(1);
// }

// let vals = Object.values(obj);

// let results = vals.map(innerObj => {
//   if (innerObj['type'] === 'fruit') {
//     return innerObj['colors'].map(colorDescr => CAPITALIZE(colorDescr));
// } else if (innerObj['type'] === 'vegetable') {
//     return innerObj['size'].toUpperCase();
// }
// })

// console.log(results);


// 15.
// FROM LESSON 5 PRACTICE PROBLEMS
// NEED TO PRACTICE AND UNDERSTAND THIS
// Iterate over nested arrays and objects. Very difficult - how would this be done without filter
// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

// Algorithm
// loop over each index in the array
// loop over each object
// for each key, check to see if all the values are even !! Use .every()
// if they are they get filtered to new array


// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// // const isOdd = (num) => num % 2 === 1;


// let results = arr.filter(obj => {
//   return Object.values(obj).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
// })
// })
// console.log(results)


// 16
// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.



// 17
/* Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

Here are some examples for your reference: */

/* let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 } */

// 18
// solve with index of
// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];

/* Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false. */

/* contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false */

// 19
// solve with recursion

/* Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years */


// catAge(0); // 0
// catAge(1); // 15
// catAge(2); // 24
// catAge(3); // 28
// catAge(4); // 32


// ANSWER
// function catAge(years) {
//   if (years === 0) {
//     return 0;
//   } else if (years === 1) {
//     return 15;
//   } else if (years === 2) {
//     return 24;
//   } else {
//     return 4 + catAge(years - 1);
//   }
// }

// 20
// Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   // add code here
// };

// jane.greet('Bobby'); // Hej, Bobby!

// 21
// JS100 problem in objects section
// Write code that does the reverse, starting from a nested array of pairs and building an object. can also solve with forEach

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }



// answer
// function makeObj(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i][0]] = arr[i][1];
//   }
//   return obj;
// }

// console.log(makeObj(nestedArray));


// 22
// From objects exercises of JS100
// Write a function clone that takes an object as argument and returns a shallow copy of that argument. A shallow copy returns a new object that is a copy of the original object. However, only the object itself and any properties with primitive values are duplicated. Properties that are themselves objects are copied "by reference" -- that is, only a pointer to the object is copied.

// function clone(obj) {
//   // TODO
// }

// let person = {
//   title: 'Duke',
//   name: {
//     value: 'Nukem',
//     isStageName: true
//   },
//   age: 33
// };

// let clonedPerson = clone(person);
// person.age = 34;

// console.log(person.age);       // 34
// console.log(clonedPerson.age); // 33

// person.name.isStageName = false;
// console.log(person.name.isStageName);       // false
// console.log(clonedPerson.name.isStageName); // false


// 23
// solve using recursion
// find the sum of all numbers given between the number and 1, also the product (mult) of all numbers between number and one
// usually this can be done with a loop easily, do with recursion




// ANSWER
// function sum(num) {
  // if (num === 1) {  // THIS KINDA ACTS LIKE STOPPING CONDITION OF LOOP
//     return 1;
//   } else {
//     return num + sum(num - 1); // THIS IS WHAT CHANGES ON EACH ITERATION`
//   }
// }

// function mult(num) {
//   if (num === 1) {
//     return 1;
//   } else {
//     return num * mult(num - 1);
//   }
// }

// console.log(sum(5))


// 24
// exclusive or easy 2 exercise
/* The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&. */

// all examples answers evaluate to true

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);


// 25
// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

/* runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // [] */

// 26
// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

/* isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true */

// 27
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

/* isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false */

// 28
/* Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters. */

/* wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {} */

// 29
/* Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Examples: */

/* swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a" */

// 30
/* // Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays. */

// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// 31
// // Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

/* console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []] */

// 32
// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// 33
// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

/*
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

// 34
// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

/* doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // "" */

// 35
// Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
/* reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1 */

// 36
// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// 37
// Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []


// 38
// easy 6 reversed arrays
/* Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse(). */

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

// 39
// string processing
/* Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case. */

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");
