// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

// ALGORITHM
// create a function that takes a string
// create an object that has the three keys set to zero
// iterate over the string
// if the character isn't between the char codes for a-z, A-Z, increase neither key by one
// if the char === char.tolowercase increment that by one
// else increment upper by one
// return the object

function letterCaseCount(str) {
  let counterObj = {lowercase: 0, uppercase: 0, neither: 0};

  for (let i = 0; i < str.length; i ++) {
    if ((str[i] < 'a' || str[i] > 'z') && (str[i] < 'A' || str[i] > 'Z')) {
      counterObj.neither += 1;
    } else if (str[i] === str[i].toLowerCase()) {
      counterObj.lowercase += 1;
    } else {
      counterObj.uppercase += 1;
    }
  }

  return counterObj;
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }