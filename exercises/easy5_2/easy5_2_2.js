/* Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays. */

// ALGORITHM
  // set results array to everything in arr1
  // iterate over second array
  // if the value doesn't exist in results, push it to results
  // sort and return

function union(arr1, arr2) {
  let results = [...arr1];

  for (let i = 0; i < arr2.length; i++) {
    if (!results.includes(arr2[i])) {
      results.push(arr2[i]);
    }
  }
  return results;
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]





