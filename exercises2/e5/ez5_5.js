/* PROBLEM: Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements. */
  // - return new array, leave arguments unaltered
  // - first argument starts the alternation

// EXAMPLES: given
// DATA STRUCTURES: arrays


// ALGORTIM - assuming arrays are of equal length
// create function that takes two arrays as arguments
// set an empty results array - use this to push elements to
// iterate over first array
  // first push el[i] of this array
  // also push el[i] of second array

// function interleave(arr1, arr2) {
//   let results = [];
//   for (let i = 0; i < arr1.length; i ++) {
//     results.push(arr1[i]);
//     results.push(arr2[i]);
//   }
//   return results;
// }


// using reduce

function interleave(arr1, arr2) {
  return arr1.reduce((accum, el, indx) => accum.concat(el, arr2[indx]), [])
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]