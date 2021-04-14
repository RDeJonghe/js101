// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// ALGORITHM
// use previous function to check if palindrome
// create new function that takes a string as an argument
// set a lowercase variable and lowercase the argument
// set a cleanLower variable and remove all characters that aren't letters or numbers
  // set a const alphanum variable
  // iterate over the string
  // if char is included in alphanum concat it to the clean variable
  // if the char is not included do nothing
// return and call origninal function with the cleanLower variable


// FIRST SOLUTION WORKS
// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// const ALPHA_NUM = 'abcdefghijklmnopqrstuvwxyz0123456789';

// function isRealPalindrome(str) {
//   let lowerStr = str.toLowerCase();
//   let cleanLowerStr = '';

//   for (let i = 0; i < lowerStr.length; i++) {
//     if (ALPHA_NUM.includes(lowerStr[i])) {
//       cleanLowerStr = cleanLowerStr.concat(lowerStr[i]);
//     }
//   }
//   return console.log(isPalindrome(cleanLowerStr));
// }


// CAN ALSO DO BY CHECKING CHARACTER VALUES

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isStrNumber(char) {
  return char >= '0' && char <= '9';
}

function isRealPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let cleanLowerStr = '';

  for (let i = 0; i < lowerStr.length; i ++) {
    if (isLetter(lowerStr[i]) || isStrNumber(lowerStr[i])) {
      cleanLowerStr = cleanLowerStr.concat(lowerStr[i]);
    }
  }
  return console.log(isPalindrome(cleanLowerStr));
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false