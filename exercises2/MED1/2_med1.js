// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

// PROBLEM
  // input numbers
  // output a rotated number
// EXAMPLES: given
// DATA STRUCTURES: numbers, strings (to manipulate)
// ALGORITHM
  // create a function that takes two numbers as an argument
  // turn the first number into a string so it can be manipulated
  // create a first slice variable
    // this is eaual to the string.slice(0, - number passed)
  // create the middle slice variable
    // need to take the number that is rotated from the end and moved to middle, next to first sliced num
    // this is -num2 + 1
  // create a endSlice variable
    // this is the single digit moved to the end
    // this is slice(-num)


function rotateRightmostDigits(num1, num2) {
  if (num2 === 1) return num1
  
  let stringNum1 = String(num1);
  let firstSlice = stringNum1.slice(0, -num2);
  let middleSlice = stringNum1.slice(-num2 + 1);
  let endSlice = stringNum1.slice(-num2, (-num2 + 1));
  
  let rotatedStrNum = firstSlice + middleSlice + endSlice;

  return Number(rotatedStrNum);
  
}


// another way to solve it using an array, can remove the number, then join, then put the removed number on the end


// function rotateRightmostDigits(num1, num2) {
//   let strNumArr = String(num1).split('');
//   let last = strNumArr.splice(strNumArr.length - num2);
//   strNumArr = strNumArr.join('')
//   let first = last.shift();
//   last.push(first);

//   return Number(strNumArr + last.join(''))
// }


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917


