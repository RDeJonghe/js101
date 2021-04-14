/* Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces). */

// algorithm
// create a function that takes a string as an argument
// set a cleanCharacters variable equal to an empty string
// iterate over the string
  // if it's a special charcter assign the cleanChar variable a space
  // if it's a letter assign the cleanChar variable the letter
  // do this with charCodeAt and the range of letter variables 97 - 122 lowercase, 65 - 90 uppercase
// create second function
  // call first function
  // create an array of the cleanString
  // iterate over the clean array
  // check to see if an element is a space and the next element is a space, if so, reassign the element to an empty ''
  // else push the character -- not needed
// join and return the results array


function cleanCharacters(str) {
  let lettersOnly = '';

  for (let i = 0; i < str.length; i ++) {
    if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
      lettersOnly = lettersOnly.concat(str[i]);
    } else if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
      lettersOnly = lettersOnly.concat(str[i]);
    } else {
      lettersOnly = lettersOnly.concat(' ');
    }
  }
  return lettersOnly;
}

function cleanUp(str) {
  let cleanStringArr = cleanCharacters(str).split('');

  for (let i = 0; i < cleanStringArr.length; i ++) {
    if (cleanStringArr[i] === ' ' && cleanStringArr[i + 1] === ' ') {
      cleanStringArr[i] = '';
    }
  }
 return cleanStringArr.join('');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "


