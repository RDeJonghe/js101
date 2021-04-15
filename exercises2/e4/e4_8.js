// Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// ALGORITHM
// create a function that takes a string as an argument
// create an empty results array
// HAVE TO SEPARATE THE WORDS
  // split the word at the space and create this array of words
// HAVE TO ACCESS THE LENGTH OF THE WORD
  // iterate over the array to access length of each element, can use forEach
// HAVE TO SEND THE LENGTH TO THE OBJECT
  // on each iteration
  // if that length does not exist assign it to a value of 0 - this step is just to set all of the keys
// HAVE TO COUNT ALL THE LENGTHS - THIS ALSO GOES TO THE OBJECT
  // to assign the values - iterate again over the array
  // forEach += 1 the value for the key value pairs
// return the object

function wordSizes(str) {
  let wordLengthCount = {};
  let wordArr = str.split(' ');

  wordArr.forEach(word => {return wordLengthCount[word.length] = 0});

  wordArr.forEach(word => {
    if (word === '') {
      return wordLengthCount = {};
    } else {
    return wordLengthCount[word.length] += 1
    }
  });
  return wordLengthCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}