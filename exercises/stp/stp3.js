// PROBLEM
// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

// EXAMPLES: given
// DATA STRUCTURES: strings, objects, possibly arrays
// ALGORITHM:
  // set an empty object with keys and values set to 0
  // split string into array
  // iterate over array
  // use regex or > < to check if a character falls in, if so increment object value


// My original solution that works
// function letterCaseCount(str) {
//   let countObj = {lowercase: 0, uppercase: 0, neither: 0};
//   let strArr = str.split('');

//   for (let i = 0; i < strArr.length; i++) {
//     if (str[i] >= 'a' && str[i] <= 'z') {
//       countObj.lowercase += 1;
//     } else if (str[i] >= 'A' && str[i] <= 'Z') {
//       countObj.uppercase += 1;
//     } else {
//       countObj.neither += 1;
//     }
//   }
//   return countObj;
// }

// can do with match and regex. Remember match is called on a string with regex and it creates an array with everything that matches, can check the length property of this to get the number of items

// function letterCaseCount(str) {
//   let lower = str.match(/[a-z]/g) || [];
//   let upper = str.match(/[A-Z]/g) || [];
//   let neither = str.match(/[^a-z]/gi) || [];

//   return {lower: lower.length, upper: upper.length, neither: neither.length};
// }

// or regex like this with ? user submitted solution

function letterCaseCount(str) {
  let lower = str.match(/[a-z]/g)?.length || 0;
  let upper = str.match(/[A-Z]/g)?.length || 0;
  // let neither = str.match(/[^a-z]/gi)?.length || 0; can also do just by subtraction
  let neither = str.length - upper - lower;

  return {lower, upper, neither};
}




console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }