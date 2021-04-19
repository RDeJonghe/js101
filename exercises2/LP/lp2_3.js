// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// ALGORITHM
// create a function that takes two arrays as arguments
// NEED TO MATCH EACH NUMBER WITH EACH OTHER AND MULTIPLY - NESTED LOOPS SEEMS LIKE THE OPTION
// create a results array to push each multiplication to
// iterate over the first array
  // nested loop on each outer iteration also have to iterate over second array
  // multiply outer number by inner number and push to results
// sort and return results

function multiplyAllPairs(arr1, arr2) {
  let results = [];

  arr1.forEach(outerNum => {
    arr2.forEach(innerNum => {
      results.push(outerNum * innerNum);
    })
  })
  
  return results.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]