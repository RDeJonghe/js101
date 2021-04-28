// PROBLEM
  /* Write a function that takes a string and returns an object containing the following three properties:

  the percentage of characters in the string that are lowercase letters
  the percentage of characters that are uppercase letters
  the percentage of characters that are neither
  You may assume that the string will always contain at least one character. */

// EXAMPLES: given
// DATA STRUCTURES: strings, numbers, object
// ALGORITHM
  // create a function that takes a string as an argument
  // create an object with the keys and values as an empty string - will fill when computed
  // create a lower count, upper count and neither count variables, all at 0
  // iterate over the string
    // check where the character is in the range of letters or not a letter
    // if it hits on any of those increase the counter by 1
  // assign to object the string of = counter / str.length * 100
  // return object

let percentObj = {
  lowercase: '',
  uppercase: '',
  neither: ''
}

function letterPercentages(str) {
  let lowerCount = 0;
  let upperCount = 0;
  let neitherCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      lowerCount += 1;
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      upperCount += 1;
    } else {
      neitherCount += 1;
    }
  }
  percentObj['lowercase'] = String((lowerCount / str.length) * 100);
  percentObj['uppercase'] = String((upperCount / str.length) * 100);
  percentObj['neither'] = String((neitherCount / str.length) * 100);

  return percentObj;
}



console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }