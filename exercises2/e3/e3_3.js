// easy 3 exercise 3

// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// algorithm
// create a function that takes a number as an argument
// create a results variable that is an empty string ''
// create a while loop
// while <= to number given as an argument
// if length % 2 === 0 concat 1
// else if odd concat 0
// return string

function stringy(num) {
  let results = '';

  while (results.length < num) {
    if (results.length % 2 === 0) {
      results = results.concat('1');
    } else {
      results = results.concat('0');
    }
  }
  return results;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

                            // 101010
                            // 101010101
                            // 1010
                            // 1010101