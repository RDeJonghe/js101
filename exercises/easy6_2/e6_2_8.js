/* Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array. */

// ALGORITHM:
  // set a results array
  // set number
  // while counter > 0
  // push to results array += number
  // decrease counter

// function sequence(counter, num) {
//   let results = [];
//   let total = num
//   while (counter > 0) {
//     results.push(total);
//     total += num;
//     counter --
//   }
//   return results;
// }

// another way to do it



function sequence(count, num) {
  return ([...Array(count)].map((_, indx) => num * (indx + 1)));
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []