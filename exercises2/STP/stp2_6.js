// Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

// ALGORITHM
// create a function that takes a string as an argument
// split the string to an array at the character level
// map the array, use an index
// if index is even, uppercase element at that index
// if index is not even lowercase
// join and return


// function staggeredCase(str) {
//   let arr = str.split('');

//   for (let i = 0; i < arr.length; i ++) {
//     if (i % 2 === 0) {
//       arr[i] = arr[i].toUpperCase();
//     } else {
//       arr[i] = arr[i].toLowerCase();
//     }
//   }
//   return arr.join('');
// }

// with Map

function staggeredCase(str) {

  return str.split('').map((el, indx) => {
    if (indx % 2 === 0) {
      return el.toUpperCase();
    } else {
      return el.toLowerCase();
    }
  }).join('')
}


console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"