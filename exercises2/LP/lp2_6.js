/* Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes. */

// ALGORITHM
// PREVIOUS FUNCTION RETURNS AN ARRAY OF ALL SUBSTRINGS
// create a function that takes a string as an argument
// call the previous function on the string, set this equal to an allSubstring variable
// set a results variable = []
// iterate over this array
  // on each iteration check if it's a palidnrome
  // is element equal to the split reverse join of the element
  // if so push to results array
// return results array

function leadingSubstrings(str) { // from previous exercise
  let results = [];
  let counter = 1;

  while (counter <= str.length) {
    results.push(str.slice(0, counter));
    counter += 1;
  }
  return results;
}

function substrings(str) {
  allSubstrings = [];

  while (str.length > 0) {
    allSubstrings.push(leadingSubstrings(str));  // I could refactor the above to use .concat() like the example solution => allSubstrings = allSubstrings.concat(leadingSubstrings(str))
    str = str.slice(1); // I can reassign this, it's pass by value. A variable passed as an argument would not be modified.
  }
  return allSubstrings.flat(); // with the use of .concat() there would not be a need to flatten the array
}

function palindromes(str) {
  return substrings(str).filter(el => {
    if (el.length >= 2) {
      return el === el.split('').reverse().join('')
    }
  });
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