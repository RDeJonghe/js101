// adv 4 exercise

// PROBLEM
  // basic description of 90 degree rotation: the first row of an array becomes the last column of the new array with the first element of that row becoming the top number in the column (the left to right order of the row is the top down order of the column). Likewise the last row of the array becomes the first column.
  // Have to handle non square arrays
  // returns new array does not mutate first array
// EXAMPLES - given
// DATA STRUCTURES - nested arrays and numbers
// ALGORITHM
  // use the emptyMatrix helper function to create a new matrix

function emptyMatrix(arr) {
  let emptyMatrix = [];
  let numberOfNestedArrays = 0;

  while (numberOfNestedArrays < arr[0].length) {
    emptyMatrix.push([]);
    numberOfNestedArrays += 1;
  }
  return emptyMatrix;
}

let rotate90 = function(arr) {
  let rotated = emptyMatrix(arr);
  let numberOfRows = arr.length;
  let numberOfColumns = arr[0].length;

  for (let rowIdx = 0; rowIdx < numberOfRows; rowIdx ++) {
    for (let colIdx = 0; colIdx < numberOfColumns; colIdx ++) {
      rotated[colIdx].unshift(arr[rowIdx][colIdx]);
    }
  }
  return rotated;
}

// iterate over the passed array, this is the number of rows
// do a nested iteration based on the number of columns
// on each nested iteration unshift the appropriate number
  // rotated[colIdx].unshift(arr[rowIdx][colIdx])


let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];


let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]