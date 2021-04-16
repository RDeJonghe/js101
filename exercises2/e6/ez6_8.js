// Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

// ALGORITHM
// create a function that takes two numbers as arguments
// set a results variable as empty array
// if num1 = 0 return results array
// set a multiplier variable equal to 1
// set a counter variable equal to first number
// create a while loop, while counter > 0
// push to results array num2 * multiplier
// ++ multiplier
// -- counter
// return results array

// function sequence(num1, num2) {
//   let results = [];
//   let counter = num1;
//   let multiplier = 1;

//   if (num1 === 0) {
//     return results;
//   }

//   while (counter > 0) {
//     results.push(num2 * multiplier);
//     multiplier += 1;
//     counter -= 1;
//   }
//   return results;
// }


// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []
