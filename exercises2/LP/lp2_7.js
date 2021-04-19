// Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

// ALGORITHM - FIRST WAY, THIS WORKS
// create a function that takes an array as an argument
// create a multiplier value = to the length of array
// create a total value = 0;
// iterate over the array with a while loop, while multiplier > 0
// push the multiplication of the multiplier x element
// decrease multiplier by one
// return the total value

// function sumOfSums(arr) {
//   let multiplier = arr.length;
//   let index = 0;
//   let total = 0;

//   while (multiplier > 0) {
//     total += multiplier * arr[index];
//     multiplier -= 1;
//     index += 1;
//   }
//   return total;
// }


// ALGORITHM - SECOND ATTEMPT AT DIFFERENT WAY
// SEND EVERYTHING TO AN ARRAY, THE ORDER OF NUMBERS GIVEN IN THE EXAMPLES
// create an empty array
// iterate over array - iterate backwards - start with the length of the array, while length > = 1 (this will be used for slice)
  // push to the results array the slice of arr.slice(0, index); - this will send each one in decreasing length
// reduce this array by adding to accum all elements
// return this

function sumOfSums(arr) {
  let numberCombos = [];

  for (let i = arr.length; i >= 1; i --) {
    numberCombos.push(arr.slice(0, i));
  }

  return numberCombos.flat().reduce((accum, num) => accum += num);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35