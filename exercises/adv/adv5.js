/* Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays */


// ALGORITHM
  // create a function that takes 2 arrays as arguments
  // create an empty array that will take all of the sorted values
  // iterate over first array
  // do a nested iteration and compare,
    // but don't have to iterate over all numbers, just that first
  // do a conditional and push based on value


// book solution

function merge(arr1, arr2) {
  // if (arr1.length === 0 || arr2.length === 0) {
  //   return nonEmptyArray(arr1, arr2)
  // }

  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }
  return result.concat(copy1.length === 0 ? copy2 : copy1);
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]





// practice attempts


function nonEmptyArray(arr1, arr2) {
    if (arr1.length === 0) {
      return arr2;
    } else if (arr2.length === 0) {
      return arr1;
    }
  }
  
  // function longestOrEqualLenghtArray(arr1, arr2) {
  //   let longestOrEqualLenghtArray;
  //   if (arr1.length > arr2.length) {
  //     return longestOrEqualLenghtArray = arr1.length;
  //   } else if (arr1.length < arr2.length) {
  //     return longestOrEqualLenghtArray = arr2.length;
  //   } else {
  //     return longestOrEqualLenghtArray = arr1.length;
  //   }
  // }
// if (arr1.length === 0 || arr2.length === 0) {
//   return nonEmptyArray(arr1, arr2);
// }
// let merged = [];
// let counter = 0;
// let stoppingCondition = longestOrEqualLenghtArray(arr1, arr2);

// while (counter < stoppingCondition) {
//   if (arr1[counter] < arr2[counter]) {
//     merged.push(arr1[counter], arr2[counter]);
//   } else if (arr2[counter] < arr1[counter]) {
//     merged.push(arr2[counter], arr1[counter])
//   } else {
//     merged.push(arr1[counter], arr2[counter]);
//   }
//   counter += 1;
// }  

// return merged;

  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] > arr2[j]) {
  //       merged.push(arr1[i], arr2[j])
  //       break;
  //     } else if (arr1[i] < arr2[j]) {
  //       merged.push(arr2[j], arr1[i])
  //       break;
  //     } else {
  //       merged.push(arr1[i], arr2[j])
  //       break;
  //     }
  //   }
  // }
  // return merged;