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