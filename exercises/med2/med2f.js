// Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

// ALGORITHM
  // helper function to find square of sum
    // take number, set results array, iterate and push number to get all values in an array
    // reduce and add these, then square it.
  // Helper function to find sum of squares

// my solution that works

// function sumSquareDifference(num) {
//   return squareOfSum(num) - sumOfSquares(num);
// }


// function squareOfSum(num) {
//   let numArr = [];
//   while (num > 0) {
//     numArr.push(num);
//     num --;
//   }
//   return Math.pow(numArr.reduce((accum, el) => accum += el), 2);
// }

// function sumOfSquares(num) {
//   let numArr = [];
//   let total = 0;
//   while (num > 0) {
//     numArr.push(num);
//     num --;
//   }
//   for (let i = 0; i < numArr.length; i++) {
//     total += Math.pow(numArr[i], 2);
//   };
//   return total;
// }

// Book solution and algorithm
  // more efficient way without helper function
  // can set a variable to hold the result value for each square of sum and sum of squares
  // set a for loop with a counter variable, this will go all the way from 1 to the number entered. Each time through it can perform the operation.
  // When the loop is finished you have to values to work with
  // Then the operation can be completed outside of the loop - raising it to the power happens inside and outside of the loop

function sumSquareDifference(num) {
  let sumOfSquares = 0;
  let squareOfSums = 0;

  for (let counter = 1; counter <= num; counter ++) {
    sumOfSquares += Math.pow(counter, 2);
    squareOfSums += counter;
  }

  return Math.pow(squareOfSums, 2) - sumOfSquares;
}



console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150