// easy exercise 5

// PROBLEM:
  // Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.
  // You may assume that both input arrays are non-empty, and that they have the same number of elements.
// EXAMPLES: given
// DATA STRUCTURES: arrays, numbers, strings
// ALGORITHM:
  // Set new Array
  // push over two elements at once, one from each array
    // This is possible because the two arrays have the same length, can just iterate over one and push based off of a shared index

// function interleave(arr1, arr2) {
//   let combinedArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     combinedArr.push(arr1[i], arr2[i]);
//   }
//   return combinedArr;
// }

// can also do it with forEach

// function interleave(arr1, arr2) {
//   let combinedArr = [];
//   arr1.forEach((el, indx) => {
//     combinedArr.push(el, arr2[indx]);
//   }) 
//   return combinedArr;
// }

// function interleave(arr1, arr2) {
//   let combinedArr = [];
//   arr1.map((el, indx) => {
//     combinedArr.push(el, arr2[indx]);
//   })
//   return combinedArr
// }

// user submitted solution using a while loop

function interleave(arr1, arr2) {
  let combinedArr = [];
  let i = 0;
  while (i < arr1.length) {
    combinedArr.push(arr1[i]);
    combinedArr.push(arr2[i]);
    i++;
  }
  return combinedArr;
}



console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]