
// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// ALGORITHM
// create function that takes a string as an argument
// can convert to backwards using str.split('').reverse().join('')
  // this converts it to an array at character level, reverses it, and joins it back together at character level
// return if forward is equal to backwards

function isPalindrome(str) {
  return console.log(str === str.split('').reverse().join(''));
}


isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

