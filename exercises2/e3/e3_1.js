// easy 3 exercise 1

// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// ALGORITHM
// create function that takes a string
// split string and create an array at the character level ''
// create an empty results array
// iterate over array of characters
// compare each character to the next character, if the character != to the next push it to results
// join results at the charcter level

function crunch(str) {
  let charArr = str.split('');
  let results = [];

  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] !== charArr[i + 1]) {
      results.push(charArr[i]);
    }
  }
  return results.join('');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""