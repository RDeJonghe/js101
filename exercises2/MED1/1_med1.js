/* Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly. */


// ALGORITHM
// PROBLEM: GIVEN
  // input: array, else return undefined
  // output: a new array, original array is not mutated
// EXAMPLES: given
// DATA STRUCTURES: arrays
// ALGORITHM
  // create a function that takes an array as an argument
  // check argument passed if not array return undefined
  // create a deep copy using stringify and parse
  // with the deep copy push the shift of the array, this should take off and put it on the end


function rotateArray(arr) {
  if (Array.isArray(arr) === true && arr.length === 0) return arr;
  if (Array.isArray(arr) === false) return undefined;

  let stringified = JSON.stringify(arr);
  let deepArr = JSON.parse(stringified);

  deepArr.push(deepArr.shift());
  return deepArr;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

// console.log(Array.isArray([]));