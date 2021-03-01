
// Palindromic Strings (Part 2)
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Don't have to always pass characters to an array and remove, can remove from string, just by assigning it to a result. Still use iteration, but don't have to push or pop

// function isRealPalindrome(str) {
//   cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//   return isPalindrome(cleanString);
// }

// function isPalindrome(str) {
//   let reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }




// can also do with .includes and .filter comparing 2 arrays.
// send it to an array, filter with includes, compare 2 arrays.

// const ALPHA_NUM = 'abcdefghijklmnopqrstuvwxyz0123456789';

// function isRealPalindrome(str) {
//   filteredArr = str.toLowerCase().split('').filter(char => {
//     return ALPHA_NUM.includes(char);
//   });

//   return filteredArr.join('') === filteredArr.reverse().join('');
  
// }


function isRealPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  return isPalindrome(cleanStr);
  
}

function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}



console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false