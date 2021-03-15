/* Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise. */


// 735291 (starting number)
// 352917 move first number to the end (step 1) 352917
// 329175 first number stays, second number (5) goes to end
// 321759 first two stays (third number) (9) goes to end
// 321597 first three stays (fourth number) (7) goes to end
// 321579 first four stays last two rotated

// ALGORITHM:
  // convert number to a string
  // do first move of just putting it on the end
  // set a counter
  // while loop
  // call the function,
  // increment the loop, will keep doing rotation
  // return as a string


function maxRotation(num) {
  let strNum = String(num);
  let counter = strNum.length;
  
  while (counter >= 2) {
    strNum = rotateRightmostDigits(strNum, counter); // cant forget to reassign the variable each time through!!!
    counter --;
  }
  return Number(strNum);
}


// function maxRotation(number) {
//   let numberDigits = String(number).length;
//   for (let count = numberDigits; count >= 2; count--) {
//     number = rotateRightmostDigits(number, count);
//   }
//   return number;
// }


function rotateRightmostDigits(num, count) {
  let firstPart = String(num).slice(0, -count);
  let secondPart = String(num).slice(-count);
  
  return Number(firstPart + doRotation(secondPart));
}



function doRotation (str) {
  return str.slice(1) + str[0];
}




console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));              // 3
console.log(typeof maxRotation(3));              // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845


