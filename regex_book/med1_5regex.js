// Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// algorithm
// create a function that takes a string as an argument
// create an array of numbers - each number corresponds with the index
// iterate over the array of numbers
  // on each iteration do a replace in the string,
  // replace the number spelled with the index
// return changes

function wordToDigit(str) {
  let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  nums.forEach((num, indx) => {
    let regex = new RegExp(`${num}`, 'g');
    str = str.replace(regex, `${indx}`)
  })
  return str;
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."