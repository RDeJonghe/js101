/* Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character. */

// create a function that takes a string as an argument
// create object
// create an upper regex
// create a lower regex
// create a neither regex
// use .match with each one to get an array of matches
// create percent variables an caluclate
// assign those to the object as toFixed


function letterPercentages(str) {
  let caseObj = {lowercase : '0', uppercase : '0', neither : '0'};

  let upper = new RegExp(/[A-Z]/, 'g');
  let lower = new RegExp(/[a-z]/, 'g');
  let neither = new RegExp(/[^a-zA-Z]/, 'g');

  if (str.match(lower)) {
    caseObj['lowercase'] = ((str.match(lower).length / str.length) * 100).toFixed(2)
    } else {
    caseObj['lowercase'] = '0.00'
  }
  if (str.match(upper)) {
    caseObj['uppercase'] = ((str.match(upper).length / str.length) * 100).toFixed(2)
    } else {
    caseObj['uppercase'] = '0.00'
  }
  if (str.match(neither)) {
    caseObj['neither'] = ((str.match(neither).length / str.length) * 100).toFixed(2)
    } else {
    caseObj['neither'] = '0.00'
  }


  return caseObj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }