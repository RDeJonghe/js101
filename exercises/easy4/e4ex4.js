// Palindromic Strings (Part 1)
// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.


// CAN SOLVE 2 WAYS, WITH REVERSE AND WITH A LOOP THAT SIMULTANEOUSLY CHECKS BOTH SIDES

// Do this using reverse!! can check with reverse.

// function isPalindrome(str) {
//   let reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }

// Can also use a while loop to compare two sides

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - (1 + i)]) {
      return false;
    }
  }
  return true;
}


console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true