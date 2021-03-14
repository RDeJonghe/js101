/* Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters. */

// ALGORITHM:
  // make array from string, split at space ' '
  // set empty object
  // iterate over array
  // assign it to object based on length (key)
  // Have to check whether or not it exists, set it as 0
  // set the number as += 1 ???

function wordSizes(str) {
  let arr = str.split(' ');
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let wordSize = arr[i].length;
    if (wordSize === 0) {
      continue;
    }
    if (!obj[wordSize]) {
      obj[wordSize] = 0;
    }
    obj[wordSize] += 1;
  }
  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}