// adv 3

// ALGORITHM
  // Have to create an empty transposed matrix based of of the number of elements in a subarray, thats how many [] are needed
    // can create an empty matrix helper function
    // create function that takes an array as an argument
    // set a variable for the number of subarrays to the length of elements of one of the subarrays passed to the function
    // create an empty array
    // iterate based on the length variable and push in empty [] arrays
  // create a function that takes an array with subarrays as an argument
    // create a for loop to iterate over the rows, this has to be set to the length of the array so it can accomodate different arrays
    // create a nested for loop to iterate over the columns, - this is set to the length of the number of elements in a sub array
    // On each nested iteration
      // push each element from the row to the empty array as an element based off of the changing column iteration



function emptyMatrix(arr) {
  let emptyMatrix = [];
  let numberOfNestedArrays = 0

  while (numberOfNestedArrays < arr[0].length) {
    emptyMatrix.push([]);
    numberOfNestedArrays += 1;
  }
  return emptyMatrix;
}

function transpose(arr) {
  let transposed = emptyMatrix(arr);
  let numberOfRows = arr.length;
  let numberOfColumns = arr[0].length

  for (let rowIdx = 0; rowIdx < numberOfRows; rowIdx ++) {
    for (let colIdx = 0; colIdx < numberOfColumns; colIdx ++) {
      transposed[colIdx].push(arr[rowIdx][colIdx]);
    }
  }
  return transposed;
}


const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];




let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

// console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
// console.log(transpose([[1]]));                     // [[1]]

// console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// // // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]