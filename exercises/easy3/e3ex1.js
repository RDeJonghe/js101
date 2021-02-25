// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// Problem:
  // Input: string
  // output: new string
  // rules: all consecutive duplicate characters are collapsed into a single character
// Examples: given
// Data structures: strings, possibly an array for looping, removing
// Algorithm
  // Take string
  // Loop over all characters
  // Do a comparison, if a character is equal to the preceding character, remove it
  // Print out the new string with repeated consecutive characters removed
// Code
  // Split string into an array of characters
  // Loop over the array of characters
  // Compare the current character with the previous
  // If they are equal remove the current character
    // Try using .splice() no, maybe try with filter
  // Join array of characters back to a string
  // return new string


// First way, I thought of something similar to this but couldn't get it to work. Practice this more, this seemed natural to think of the problem in this way. (Although I was looking to splice out the doubles instead of just returning the way it is done here.)


  // function crunch(string = "") {
  //   let characters = string.split("");
  
  //   let finalLetters = characters.filter((letter, index) => {
  //     return letter !== characters[index + 1]
  //   });
  //   return finalLetters.join("");
  // }

// A solution pushing matches in to an empty array and then joining. This is another logical way for me to conceptualize it. I thought initially of using an if statement and this does that. Important thing is comparing it to the next character, not trying to compare it to the previous character.


// function crunch(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i ++) {
//     if (str[i] !== str[i + 1]) {
//       result.push(str[i]);
//     }
//   }
//   return result.join('');
// }


// This was my initial solution, I think it would've worked if I would've compared the character to the next character instead of the previous character. So trying that again. Yes, this is what I wanted to do and came close. Key point is comparing ahead. Also in splice using [i] and not str[i]


// function crunch(str) {
//   let strArr = str.split('');
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === strArr[i + 1]) {
//       strArr.splice(i, 1);
//     }
//   }
//   newStr = strArr.join('');
//   return newStr;
// }

// Try using map

function crunch(str) {
  let strArr = str.split('');
  let newArr = strArr.map((el, indx) => {
    if (el !== str[indx + 1]) {
      return el;
    }
  })
  return newArr.join('');
}

// Try using filter??





console.log(crunch('ddaaiillyy ddoouubbllee'));


