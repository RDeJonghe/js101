// Vowel Count
// PROBLEM
  // Problem Description
  // Given a string of one or more words, return an array that contains
  // the number of vowels in each word of the argument string.
  // The returned array should have the same number of
  // elements as words in the argument string.
  // Vowels are aeiou.
  // questions
    // case doesn't matter
    // consider punctionation - regard these
    // argument always a string - yes
  // edge cases: if empty string return empty array
  // 

// EXAMPLES: given
// DATA STRUCTURES: arrays - primitives are strings and numbers

// ALGORITHM:
  // create a function that takes a string as an argument
    // this is immutable so nothing can change it inside the function
  // lowercase the string passed
  // create a vowels variable (aeiou)
  // create a results array
  // split the string at the ' ' level
  // iterate over the array of words
  // split the word at the '' level
  // create a vowelCounter variable = 0
  // if conditional
    // if vowels.includes (currentChar) + 1 the vowel counter
    // at end of nested iteration push the count over
  // return results

const vowels = 'aeiou';

function vowelCount(str) {
  str = str.toLowerCase();
  let results = [];

  if (str === '') return results;

  str.split(' ').forEach(word => {
    let vowelCounter = 0;
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        vowelCounter += 1;
      }
    })
    results.push(vowelCounter);
  })
  return results;
}



// Test Cases
console.log(vowelCount('WhaTs yOur enneagram?'));
// [1, 2, 4]
console.log(vowelCount('Colonel Sanders feeds me well !!'));
// [3, 2, 2, 1, 1, 0]
console.log(vowelCount(''));
// []
console.log(vowelCount('ZoInkies!! There are monsters in here.'));
// [4, 2, 2, 2, 1, 2]
console.log(vowelCount('grrr!'));
// [0]