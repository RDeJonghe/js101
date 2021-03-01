// easy 5 exercise 2

// PROBLEM:
  // Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.
    // Questions, what about strings? Example only shows numbers
    // Leave original arrays intact?
// EXAMPLES: given
// DATA STRUCTURES: Arrays, numbers, possibly strings
// ALGORITHM:
  // take 2 arrays as arguments
  // can combine 2 arrays
    // look for duplicate values - this is the hard step
      // use indexOf = -1 to check if it already exists, if it exists don't send it to new array
      // iterate over 1 array, if it doesn't exist in second array push it.
      // only new values show up
  // return single values array


// Can also do using .includes and checking with that.
// function union(arr1, arr2) {
//   let results = [...arr1];
//   for (let el of arr2) {
//     if (!results.includes(el)) {
//       results.push(el)
//     }
//   }
//   return results;
// }


// let sampleArr = ['back', 'once', 'again'];
// let sampleArr2 = ['again', 'i\'m', 'the', 'renegade', 'master']
// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
// console.log(union([2, 4, 5], [2, 4, 6]));
// console.log(union(sampleArr, sampleArr2));

// Can use spread syntax to copy a single array and check in iteration with index of.
// function union(arr1, arr2) {
//   let resultArr = [...arr1];
//   for (let el of arr2) {
//     if (resultArr.indexOf(el) === -1) {
//       resultArr.push(el);
//     }
//   }
//   return resultArr;
// }

// let sampleArr = ['back', 'once', 'again'];
// let sampleArr2 = ['again', 'i\'m', 'the', 'renegade', 'master']
// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
// console.log(union([2, 4, 5], [2, 4, 6]));
// console.log(union(sampleArr, sampleArr2));


// This works by just sending the elements from the one to the other.
// function union(arr1, arr2) {
//   arr1.forEach(el => {
//     if (arr2.indexOf(el) === -1) {
//       arr2.push(el);
//     }
//   })
//   return arr2;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// PROBLEM:
  // Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may 
  // assume that both arguments will always be arrays.
// EXAMPLES: given
// DATA STRUCTURES: array, numbers, strings
// ALGORITHM:
  // Set a new array to record results, can use spread syntax to send all of one of the arrays there.
  // Loop over the second array, check to see if it exists in the results array already, can use .includes or .indexOf
  // If it doesn't exist push it to the results array
  // return the results array

// function union(arr1, arr2) {
//   let resultsArr = [...arr1];
//   arr2.forEach(el => {
//     if (!resultsArr.includes(el)) {
//       resultsArr.push(el);
//     }
//   })
//   return resultsArr;
// }


// Can also do like the example given, can have a helper function that does the copying, and a union function that puts the two together

// function union(arr1, arr2) {
//   let results = [];
//   makeCopy(results, arr1);
//   makeCopy(results, arr2);
//   return results;
// }


// function makeCopy(resultsArr, arrToCopy) {
//   for (let el of arrToCopy) {
//     if (resultsArr.indexOf(el) === -1) {
//       resultsArr.push(el);
//     }
//   }
//   return resultsArr;
// }


// Solution with the arguments Object

function union() {
  let results = [];

  for (let i = 0; i < arguments.length; i++) {
    makeCopy(results, arguments[i])
  }
  return results;
}

function makeCopy(resultArr, arr) {
  for (let el of arr) {
    if (!resultArr.includes(el)) {
      resultArr.push(el);
    }
  }
  return resultArr;
}

let sampleArr = ['back', 'once', 'again'];
let sampleArr2 = ['again', 'i\'m', 'the', 'renegade', 'master']
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([2, 4, 5], [2, 4, 6]));
console.log(union(sampleArr, sampleArr2));