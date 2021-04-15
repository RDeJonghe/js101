// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// ALGORITHM
// USE PREVIOUS FUNCTION
// CREATE A HELPER FUNCTION TO REMOVE ANY CHARACTERS THAT AREN'T LETTERS
  // create function that takes a string as an argument
  // create a results variable that starts as an empty string '' to concat to
  // make a lowercase string variable to iterate over - don't have to worry about case we want length
  // iterate over lowercase string
  // check if each character is a letter - if so concat it to the empty string
  // also have to concat the spaces
  // remember concat = concat()....
  // return results string
// IN PREVIOUSLY MADE FUNCTION
  // set a cleanString variable = to the helper function called on the passed string
  // run cleanString through the function

function cleanStr(str) {
  let results = '';
  let lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === ' ') {
      results = results.concat(lowerStr[i])
    }
    else if (lowerStr[i] >= 'a' && lowerStr[i] <= 'z') {
      results = results.concat(lowerStr[i])
    }
  }
  return results;
}


function wordSizes(str) {
  let wordLengthCount = {};
  let cleanedStr = cleanStr(str);
  let wordArr = cleanedStr.split(' ');

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


// console.log(cleanStr('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(cleanStr('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(cleanStr("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
// console.log(cleanStr(''));

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}