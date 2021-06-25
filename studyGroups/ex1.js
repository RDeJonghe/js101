// Problem Description
  // You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
  // questions - leave the array passed as an argument as is / not mutated - yes
  // edge cases
    // if the number passed is greater than the length of the array, return an empty string
    // if the number passed is negative or 0 return an empty string
    // if an empty array is passed return an empty string
    // what if 2 strings have the same length - does it matter which one is chosen? No

// Examples : given
  //Example: 
  // longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
  // "abigailtheta"
  //n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Data structures: array, primitive (strings), numbers

// HIGH LEVEL ALGORITHM
  // can handle edge cases right away
  // with the number given, you have to compare the lengths of the different combinations of strings
  // so think of each word in the string as just a length
  // have to go over all of those strings and find the longest length combination
  // can  do this in a loop i would say
  // so really just looking at the starting spot on each iteration and adding the length of 'k' number of words
  // so could set a indexStartForLongestWord variable as the first index,
  // then that length would be compared and replaced on an iteration if it were longer
  // have to stop the iteration so it doesn't access values outside the length of the array - will throw type error
  // what this would return would be the starting index for the longest consec string
    // it would be like this index plus the 'k' number of indexes after produce the longest string
  // the second step would be to concatenate these
    // so concatenate that index plus the 'k' - 1 number of strings

// DETAILED ALGORITHM
  // Handle edge cases
    // conditional if for num <= 0, or empty array passed, return ''
  // FIRST STEP - compare the lengths and identify the starting index of the longest combined words
  // create a function that takes an array and a number as arguments
  // set an indexStartForLongestCombinedStr variable = 0
  // set a lengthOfLongestCombinedWord variable = 0;
  // iterate over the array of words
    // set a combinedWordLength variable = to the length of the word of that index, plus the length of the words of 'k' numbers of words
      // the purpose of this is to add the length properties of the 'k' number of words and set it
    // conditional if
      // if the total length of combinedWord on the iteration is greater than the lengthOfLongestCombinedWord variable, reassign that variable to the current iteration
      // also within if conditional reassign the starting index of longest combined str variable to the index of the current iteration
  // SECOND STEP - concatenate the identified words together
    // set and return a results variable = to the concatenation of
      // the identified index to start
      // plus 'k' - 1 ( -1 since the first one is already included as the start) words
    // while loop, while set a counter = to the current index + 1. while that number <= k - 1
      // concat (reassign since concat is not destructive) k + the next index
  // return this concatenated value

function findStartIndexForLongestCombinedWords(arr, num) {
  let findStartIndexForLongestCombinedWords = 0;
  let lengthOfLongestCombinedWord = 0;

  for (let i = 0; i < (arr.length - (num - 1)); i++) {
    let counter = 0;
    let currentWordComboLength = 0;

    while (counter < num) {
      currentWordComboLength += arr[i + counter].length
      counter += 1;
    }

    if (currentWordComboLength >= lengthOfLongestCombinedWord) {
      findStartIndexForLongestCombinedWords = i;
      lengthOfLongestCombinedWord = currentWordComboLength;
    }
  }
  return findStartIndexForLongestCombinedWords;
}


function longestConsec(arrayOfWords, numberToCombine) {
  if (arrayOfWords.length === 0 || numberToCombine <= 0 || numberToCombine > arrayOfWords.length) return '';

  let startingIndex = findStartIndexForLongestCombinedWords(arrayOfWords, numberToCombine);

  let results = '';
  let counter = 0;

  while (counter < numberToCombine) {
    results = results + (arrayOfWords[startingIndex + counter])
    counter += 1;
  }
  return results;
}


//Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true