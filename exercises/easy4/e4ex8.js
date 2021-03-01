/* Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters. */



// function wordSizes(words) {
//   let wordsArray = words.split(' ');
//   let count = {};

//   for (let idx = 0; idx < wordsArray.length; idx += 1) {
//     let wordSize = wordsArray[idx].length;
//     if (wordSize === 0) {
//       continue;
//     }

//     if (!count[wordSize]) {
//       count[wordSize] = 0;
//     }
//     count[wordSize] += 1;
//   }

//   return count;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

// function wordSizes(words) {
//   let wordsArray = words.split(' ');
//   let count = {};

//   for (let idx = 0; idx < wordsArray.length; idx++) {
//     let wordSize = wordsArray[idx].length;

//     if (wordSize === 0) {
//       continue;
//     }
//     if (!count[wordSize]) {
//       count[wordSize] = 0;
//     }
//     count[wordSize] += 1;
//   }
//   return count;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));


// PROBLEM:
  // Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.
  // Words consist of any sequence of non-space characters.
// EXAMPLES:
  // Given
// DATA STRUCTURES:
  // string, array (need to iterate over this), object
// ALGORITHM:
  // Split string into an array of words, can split of off space ' ' so that each word is separated, space is not needed
  // Set an empty object, this will be filled with the data
  // iterate over the array
  // set a variable of word length to the length of an individual element
    // This variable will be reset each time through the iteration
    // This variable will be used to send the length number to the object before it is reset
  // account for the empty string
    // if the length is 0 continue
  // Check to see if the key already exists in the object
    // use bang operator, if the key does not exist, set the count to 0
    // This is set to zero even though we're checking if it exists, it will be incremented later. Needs to be set to zero initially. If not it would be set to one and then incremented to two on the first time through. This would be incorrect.
  // Increment the count by one
  // return the object


// function wordSizes(wordStr) {
//   let wordArr = wordStr.split(' ');
//   let wordCount = {};

//   for (let i = 0; i < wordArr.length; i++) {
//     let wordLength = wordArr[i].length;

//     if (wordLength === 0) {
//       continue;
//     }
//     if (!wordCount[wordLength]) {
//       wordCount[wordLength] = 0;
//     }
//     wordCount[wordLength] += 1;
//   }
//   return wordCount;
// }


function wordSizes(str) {
  let words = str.split(' ');
  let countObj = {};

  for (let i = 0; i < words.length; i++) {
    let wordLength = words[i].length;
    if (wordLength === 0) {
      continue;
    }
    if (!countObj[wordLength]) {
      countObj[wordLength] = 0;
    }
    countObj[wordLength] += 1;
  }
 return countObj;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));

