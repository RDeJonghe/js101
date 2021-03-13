// Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.


// Have to check to see if it is the same forward as reverse.
// book solution uses two functions and filter.


function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

function leadingSubstrings(str) {
  let results = [];
  for (let i = 1; i <= str.length; i++) {
    results.push(str.slice(0, i));  
  }
  return results;
}

function substrings(str) {
  let allSubstrings = [];
  for (let i = str.length - 1; i >= 0; i --) {
    allSubstrings.push(leadingSubstrings(str));
    str = str.slice(-i);
  }
  return allSubstrings.flat();
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]