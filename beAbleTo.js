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

// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];


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
// let arr1 = [2, 4, 6, 8];
// let arr2 = [6, 8, 10, 12, 14];

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

// let arr = [2, 4, [6, 8]];
// let shallow = [...arr];

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
// do this by creating a new object within map





