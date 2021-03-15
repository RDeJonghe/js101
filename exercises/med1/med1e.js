// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// ALGORITHM:
  // isolate just the numbers in the string, to work with those, save other parts to concat later
  // split string into array at spaces
  // make an object with the spelled out numbers
  // iterate over array
  // if the array has a number, replace it with the spelled out number
  // join array back together

// const NUMS = {
//   'zero' : '0',
//   'one' : '1',
//   'two' : '2',
//   'three': '3',
//   'four' : '4',
//   'four.': '4.',
//   'five' : '5',
//   'six' : '6',
//   'seven' : '7',
//   'eight' : '8',
//   'nine' : '9'
// }

// function wordToDigit(str) {
//   let strArr = str.split(' ');
//   let spelledNumsArr = Object.keys(NUMS);
//   for (let i = 0; i < strArr.length; i++) {
//     if (spelledNumsArr.includes(strArr[i])) {
//       strArr[i] = NUMS[strArr[i]];
//     }
//   }
//   return strArr.join(' ');
// }

// Book solution with regex

const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('The wait is done'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."