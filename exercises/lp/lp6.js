/* Palindromic Substrings
Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes. */


// ALGORITHM
  // take the string, split, reverse join it
  // set a results empty array for palindromes
  // call substrings funtion on both reg and reversed, hold these in new arrays to compare
  // loop over both arrays and compare elements, need nested loop
  // if they are equal push them

function leadingSubstrings(str) {
  let results = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    results.push(str.slice(0, counter));
    counter += 1;
  }
  return results;
}

function substrings(stringLetters) {
let combos = [];
for (let i = 0; i < stringLetters.length; i++) {
  let shortString = stringLetters.substring(i);
  combos = combos.concat(leadingSubstrings(shortString));
}
return combos;
}

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
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