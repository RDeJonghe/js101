
// PROBLEM
// Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.
  // Input: string
  // Output: string
  // Note: spaces between numbers for output
  // return a new string, leave old string unchanged?
// EXAMPLES : given
// DATA STRUCTURES:
  // strings
  // array - split the string to examine
  // object - to store key value pairs - key is spelled out number
// ALGORITHM
  // create a constant variable for an object with key value pairs for numbers
  // create function that takes a string as an argument
  // split the string at the space to create an array of words
  // iterate over the array
    // check if the key exists in the array,
    // if so reassign it to the value in the object
  // join and return new string



// const NUM_PAIRS = {
//   'zero' : '0',
//   'one' : '1',
//   'two' : '2',
//   'three' : '3',
//   'four' : '4',
//   'five' : '5',
//   'six' : '6',
//   'seven' : '7',
//   'eight' : '8',
//   'nine' : '9',
//   'zero.' : '0.',
//   'one.' : '1.',
//   'two.' : '2.',
//   'three.' : '3.',
//   'four.' : '4.',
//   'five.' : '5.',
//   'six.' : '6.',
//   'seven.' : '7.',
//   'eight.' : '8.',
//   'nine.' : '9.'
// }

// function wordToDigit(str) {
//   let strArr = str.split(' ');

//   return strArr.map(word => {
//     if (NUM_PAIRS[word]) {
//       return NUM_PAIRS[word];
//     } else {
//       return word;
//     }
//   }).join(' ');
// }


// with regex

// const NUM_WORDS = {
//   zero:  0,
//   one:   1,
//   two:   2,
//   three: 3,
//   four:  4,
//   five:  5,
//   six:   6,
//   seven: 7,
//   eight: 8,
//   nine:  9,
// };

// function wordToDigit(sentence) {
//   Object.keys(NUM_WORDS).forEach(word => {
//     let regex = new RegExp('\\b' + word + '\\b', 'g');
//     sentence = sentence.replace(regex, NUM_WORDS[word])
//   })

//   return sentence;
// }


// let vm = 'Please call me at five five five one two three four. Thanks.';
// console.log(wordToDigit(vm));
// console.log(vm)
// "Please call me at 5 5 5 1 2 3 4. Thanks."

let nums = ['zero', 'one', 'two', 'three'];

console.log(nums.indexOf('two'))