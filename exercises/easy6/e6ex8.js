// PROBLEM
  /* Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

  You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array. */
// EXAMPLES: given
// DATA STRUCTURES: arrays, numbers
// ALGORITHM:
  // create a function w two parameters
  // set an empty array
  // set a multiply variable, this will start at one and then increase to two, three, etc.
  // handle edge case of count being zero, will be empty array
  // use a while loop with count being the stopping condition compared to length
  // return array

// My first attempt
// function sequence(count, num) {
//   let result = [];
//   let mult = 1;

//   if (count === 0) {
//     result = [];
//   }
//   while(result.length < count) {
//     result.push(num * mult);
//     mult ++;
//   }
//   return result;
// }


// Can do using Array() and spread syntax. User submitted solution


// function sequence(count, num) {
//   if (count === 0) return [];
//   return [...Array(count)].map((_, index) => num * (index + 1));
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

