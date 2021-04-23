/* Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise. */

// 735291 original number
// 352917 the first number goes on the end
// 329175 first stays, second goes on the ened
// 321759 first two stays, thrid goes on the end
// 321597 first three stays, fourth goes on the end
// 321579 first four stays, fifth goes on the end (last two swapped)

// ALGORITHM
// take number and convert to string and split('') so it is an array
// shift first number and put it on end of variable, this is the first move
// create a counter variable, this will be used in the rotate rightmost digits helper function
  // counter has to start with the number at second index position - to work with helper function this has to be length - 1
// while counter >= 1
  // call the helper function
  // decrease counter
// number and join the result

function rotateRightmostDigits(num1, num2) {
  if (num2 === 1) return num1
  
  let stringNum1 = String(num1);
  let firstSlice = stringNum1.slice(0, -num2);
  let middleSlice = stringNum1.slice(-num2 + 1);
  let endSlice = stringNum1.slice(-num2, (-num2 + 1));
  
  let rotatedStrNum = firstSlice + middleSlice + endSlice;

  return Number(rotatedStrNum);
  
}


function maxRotation(num) {
  let strNumArr = String(num).split('');
  let firstToLast = strNumArr.shift();
  strNumArr.push(firstToLast);
  let strNum = strNumArr.join('');

  let counter = strNum.length - 1;

  while (counter >= 1) {
    strNum = rotateRightmostDigits(strNum, counter);
    counter -= 1;
  }
  
  
  return Number(strNum);
  
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845