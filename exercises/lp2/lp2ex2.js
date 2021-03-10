// Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:

// ALGORITHM
  // take nums and make it an array
  // set an empty object
  // iterate over array and assign key value pairs based on numbers. Value is the actual number. key is word
  // take input array
  // sort based on spelled word

//   let nums = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen';


// function alphabeticNumberSort(arr) {
//   let spelledArr = nums.split(', ');
//   let numsObj = {};
  
//   for (let i = 0; i <spelledArr.length; i++) {
//     numsObj[spelledArr[i]] = arr[i];
//   }

//   let numPairs = Object.entries(numsObj);
//   numPairs.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     } else if (a > b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })
//   let orderedArr = [];
//   for (let i = 0; i < numPairs.length; i++) {
//     orderedArr.push(numPairs[i][1]);
//   }
//   return orderedArr;


// }

// Book solution:
// let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
//                     'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//                     'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


// function wordSort(a, b) {
//   if (NUMBER_WORDS[a] < NUMBER_WORDS[b]) {
//     return -1;
//   } if (NUMBER_WORDS[a] > NUMBER_WORDS[b]) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// function alphabeticNumberSort(arr) {
//   return arr.sort(wordSort);
// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]