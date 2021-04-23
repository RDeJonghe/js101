// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

// ALGORITHM
  // set a counter = 0 - this will be used to upper and lower (anything that isn't a letter will be skipped)
  // split the string at the character level
  // iterate over the string
    // if the counter is even and the character is a letter to uppercase and increase counter by 1
    // if the counter is odd and the character is a letter to lowercase it and decrease counter by 1
  // join and return

  // MY SOLUTION THAT WORKS
// function staggeredCase(str) {
//   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let counter = 0;
//   let upperStrArr = str.toUpperCase().split('');

//   for (let i = 0; i < upperStrArr.length; i++) {
//     if (!letters.includes(upperStrArr[i])) {
//       continue;
//     } else if (counter % 2 === 0) {
//       counter += 1;
//     } else {
//       upperStrArr[i] = upperStrArr[i].toLowerCase();
//       counter += 1;
//     } 
//     // console.log(counter, upperStrArr[i])
//   }
//   let staggered = upperStrArr.join('');
//   return staggered;
// }






// SECOND ATTEMPT - similar to example with toggling case but handled a bit differently

// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

// ALGORITHM
// set the string to all upercase since the first letter is upper
// sets a needsLower counter variable to false, this will determine when to set to lower case 
// split the string to an array of characters
// if statement
// if needs Upper is true
  // check if the charactr is between A&Z, character goes to lowercase
  // needs upper is then false
// if needs upper is false
// check if character is between A&Z then set to true


function staggeredCase(str) {
  let upperStr = str.toUpperCase();
  let upperStrArr = upperStr.split('');
  let needsUpper = false;
  let staggered = [];

  for (let i = 0; i < upperStrArr.length; i ++) {
    if (needsUpper === false && (upperStrArr[i] >= 'A' && upperStrArr[i] <= 'Z')) {
      staggered.push(upperStrArr[i]);
      needsUpper = true;
    } else if (needsUpper === true && (upperStrArr[i] >= 'A' && upperStrArr[i] <= 'Z')) {
      staggered.push(upperStrArr[i].toLowerCase());
      needsUpper = false
    } else {
      staggered.push(upperStrArr[i]);
    }
  }
  return staggered.join('');
}





console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ALL CAPS"));
console.log(
  staggeredCase("ignore 77 the 444 numbers")
);
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);