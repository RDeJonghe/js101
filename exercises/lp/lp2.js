
// PROBLEM
  // Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on 
  // the English word for each number:
// EXAMPLES: given
// DATA STRUCTURES: object, array
// ALGORITHM:
  // split the numbers string into an array
  // this occurs in the same order as the input
  // create empty object
  // iterate over array of spelled numbers and assign key value to object
  // with object call object entries for keys and values
  // sort this based off of alpha and return the nums in order

// My solution that worked
// const NUMS_SPELLED = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen';

// function alphabeticNumberSort(numsArr) {
//   numsSpelledArr = NUMS_SPELLED.split(', ');
//   let numsObj = {};

//   for (let i = 0; i < numsSpelledArr.length; i++) {
//     numsObj[numsSpelledArr[i]] = numsArr[i];
//   }
//   let numsPairs = Object.entries(numsObj);
//   numsPairs.sort();
//   let sortedNums = [];
//   for (let i = 0; i < numsPairs.length; i++) {
//     sortedNums.push(numsPairs[i][1]);
//   }
//   return sortedNums;
// }


// My solution, but refactored to include sort syntax explicitly written for practice. 

const NUMS_SPELLED = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen';

function alphabeticNumberSort(numsArr) {
  numsSpelledArr = NUMS_SPELLED.split(', ');
  let numsObj = {};

  for (let i = 0; i < numsSpelledArr.length; i++) {
    numsObj[numsSpelledArr[i]] = numsArr[i];
  }
  let numsPairs = Object.entries(numsObj);
  numsPairs.sort(function(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });


  let sortedNums = [];
  for (let i = 0; i < numsPairs.length; i++) {
    sortedNums.push(numsPairs[i][1]);
  }
  return sortedNums;
}


// Solution given
// let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
//                     'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//                     'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function wordSort(num1, num2) {
//   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
//     return 1;
//   } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function alphabeticNumberSort(array) {
//   return array.sort(wordSort);
// } 


console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]