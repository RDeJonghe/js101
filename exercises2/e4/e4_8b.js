// 
// Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// ALGORITHM
// create a function that takes a string as an argument
// create an empty results object
// if the length of the element is zero - return the empty array - this handles last example
// create an array of words using split
// iterate over the array
// HAVE TO SET THE KEY TO THE LENGTH OF EACH VARIABLE
  // check if this already exists, if it doesn't exist set it
// HAVE TO COUNT THE LENGHTS
  // on each iteration += 1 the value
// return the object

function wordSizes(str) {
  let results = {};
  if (str.length === 0) {
    return results;
  }
  let wordArr = str.split(' ');
  for (let i = 0; i < wordArr.length; i++) {
    if (!results[wordArr[i].length]) {
      results[wordArr[i].length] = 1;
    } else {
      results[wordArr[i].length] += 1;
    }
  }
  return results;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}