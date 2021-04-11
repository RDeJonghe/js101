// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// algorithm
// create function that takes array as argument
// set results array
// set counter equal to zero
// open while loop, while counter is less than array length
// push array[counter] to the results array
// increment counter by two - this will push all the odd ordered numbers
// don't be confused by indexes - those will be even, but will be 1st, 3rd, 5th nums
// return array

// first solution
// function oddities(arr) {
//   let results = [];
//   let counter = 0;
//   while (counter < arr.length) {
//     results.push(arr[counter]);
//     counter += 2;
//   }
//   return results;
// }

// solve using filter
// reate function that takes an array as an argument
// filter, use indx syntax to get at index
// if indx & 2 === 0 return that element (this will be the odd numbered ones in the list)

function oddities(arr) {
  return arr.filter((el, indx) => indx % 2 === 0);
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []