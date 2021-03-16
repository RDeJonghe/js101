// PROBLEM
  /* Write a function that takes a string, and returns an object containing the following three properties:

  the percentage of characters in the string that are lowercase letters
  the percentage of characters that are uppercase letters
  the percentage of characters that are neither
  You may assume that the string will always contain at least one character. */
  // number is string to fixed (2)

// EXAMPLES: given
// DATA STRUCTURES: object, string, possibly array
// ALGORITHM
  // set an empty object
  // set empty counter variables for lowercase, uppercase, neither
  // iterate over string
    // conditional that checks if character is between a-z, A-Z, or neither
    // increase counter variables
  // divide variables by length and mult by 100
  // Put this in to object

function letterPercentages(str) {
  let resultPercentages = {};
  let lowerTally = 0;
  let upperTally = 0;
  let otherTally = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      lowerTally += 1;
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      upperTally += 1;
    } else {
      otherTally += 1;
    }
  }
  resultPercentages['lowercase'] = ((lowerTally / str.length) * 100).toFixed(2);
  resultPercentages['uppercase'] = ((upperTally / str.length) * 100).toFixed(2);
  resultPercentages['neither'] = ((otherTally / str.length) * 100).toFixed(2);

  return resultPercentages;
}



console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }