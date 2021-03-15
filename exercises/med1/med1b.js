// PROBLEM:
  /* Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left. */
// EXAMPLES: given
// DATA STRUCTURES: numbers, arrays
// ALGORITHM:
  // take number and turn into a string
  // split number in to an array
  // set a variable for the moved number to a negative slice
  // set a variable for the front, part and slice that
  // set a variable for digits that get shifted
  // concat all of this together

// my solution that works with arrays
// function rotateRightmostDigits(num, count) {
//   if (count === 1) {
//     return num;
//   }
//   let numArr = String(num).split('');
//   let digit = numArr.slice(-count, -count + 1);
//   let front = numArr.slice(0, -count);
//   let moved = numArr.slice(-count + 1);

//   let rotated = front.concat(moved).concat(digit).join('');
//   return Number(rotated);
// }

// book algorithm:

/* Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left. */

/* convert the original number to a string
split the string into two parts: the part to remain unchanged and the part to be rotated
rotate the second part
join the first part back together with the rotated second part
convert the string to a number and return it */
// does this with a helper function that does the rotate


function rotateRightmostDigits(num, count) {
  let firstPart = String(num).slice(0, -count);
  let secondPart = String(num).slice(-count);
  
  return Number(firstPart + doRotation(secondPart));
}



function doRotation (str) {
  return str.slice(1) + str[0];
}




console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917







// function rotateRightmostDigits(num, count) {
//   let strNum = String(num);
//   let unchanged = strNum.slice(0, -count);
//   let secondPart = strNum.slice(-count);
//   let rotated = unchanged + rotate(secondPart);
//   return Number(rotated);
// }


// function rotate(str) {
//   return str.slice(1) + str[0];
// }





// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917
