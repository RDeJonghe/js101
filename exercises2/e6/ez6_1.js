// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// ALGORITHM
// create a function that takes a string as an argument
// create a results variable that is an empty string
// iterate over the string
// set the results variable equal to results concat repeating the character twice
// return new string

const repeater = function (str) {
  let results = '';
  for (let i = 0; i < str.length; i ++) {
    results = results.concat(str[i].repeat(2));
  }
  return console.log(results);
}


repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""