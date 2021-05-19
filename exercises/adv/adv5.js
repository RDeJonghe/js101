/* Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays */


// ALGORITHM
  // create a function that takes 2 arrays as arguments
  // create an empty array that will take all of the sorted values
  // determine which array is longer and which is shorter
  // iterate over longer array
  // nested iteration for shorter array
  // compare the numbers and push the smaller number


function nonEmptyArray(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }
}

function merge(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return nonEmptyArray(arr1, arr2);
  }

}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]