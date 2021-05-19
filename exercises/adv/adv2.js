/* 
1  5  8
4  7  2
3  9  6 */

/* 
1  4  3
5  7  9
8  2  6 */

/* Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged. */

// PROBLEM
  // take a nested 3 row array and make the columns the rows
  // input a nested array
  // output a new array, the original array remains unmodified
// EXAMPLES
  // given
// DATA STRUCTURE
  // array and a deep copy to modify
// ALGORITHM
  // create a helper function to make the deepCopy to use
  // create an empty nested array, this will be used to push the values to
  // have to select each nested number based off of its index value, create an index value variable that can be incremented
  // on each iteration through the subarrays only select the value that has the current index value,
    // push that to the new array


// my solution that worked
// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];


// let transpose = function(arr) {
//   let transposedArr = [[], [], []];
  
//   for (let i = 0; i < arr.length; i ++) {
//     let row = arr[i];
//     transposedArr[0].push(row[0]);
//     transposedArr[1].push(row[1]);
//     transposedArr[2].push(row[2]);
//   }
//   return transposedArr;
// }

// let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]] 

// my practice with this
// let arr = [[], [], []];

// for (let i = 0; i < matrix.length; i ++) {
//   console.log(matrix[i]);
//   let row = matrix[i];
//   arr[0].push(row[0]);
//   arr[1].push(row[1]);
//   arr[2].push(row[2]);
// }

// console.log(arr);
// console.log(matrix);



// book solution uses row and column index

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let transpose = function(arr) {
  let transposedArr = [[], [], []];

  for (let rowIdx = 0; rowIdx < 3; rowIdx ++) {
    for (let colIdx = 0; colIdx < 3; colIdx ++) {
      transposedArr[colIdx].push(arr[rowIdx][colIdx]);
    }
  }
  return transposedArr;
}

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]] 
