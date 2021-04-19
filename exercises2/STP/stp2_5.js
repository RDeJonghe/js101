// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// ALGORITHM
// create a function that takes a string as an argument
// split the string at the character level ' '
// iterate over the array of characters
// check if the character is = to upper or lower, change it based off of that
// join and return

// function swapCase(str) {
//   let charArr = str.split('');

//   for (let i = 0; i < charArr.length; i ++) {
//     if (charArr[i] === charArr[i].toUpperCase()) {
//       charArr[i] = charArr[i].toLowerCase();
//     } else if (charArr[i] === charArr[i].toLowerCase()) {
//       charArr[i] = charArr[i].toUpperCase();
//     }
//   }
//   return charArr.join('');
// }

// can also do with map
 
function swapCase(str) {
  let strArr = str.split('');

  return strArr.map(char => {
    if (char >= 'a' && char <= 'z') {
      return char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      return char.toLowerCase();
    } else {
      return char;
    }
  })
    .join('');
}





console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"