// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.


// algorithm
// create a functin that takes two arrays of numbers
// create a results array
// create a counter variable equal to zero
// create a while loop, while counter is < arr1.length
// assign to the new array the product of each array using the counter as an index
// increment counter by 1
// return new array

function multiplyList(arr1, arr2) {
  let results = [];
  let counter = 0;

  while (counter < arr1.length) {
    results[counter] = arr1[counter] * arr2[counter];
    counter += 1;
  }
  return results;
}

// with reduce

const multiplyList = (arr1, arr2) => arr1.reduce((accum, el, indx) => accum.concat(el * arr2[indx]), [])

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]