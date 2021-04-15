// Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

// ALGORITHM
// create function that takes array as an argument
// HAVE TO FIND THE MIDDLE OF THE ARRAY this may depend on odd/even length
  // consider how the middle is determined to use slice to get parts of array
  // can use Math.ceil(arr.length / 2)
    // this will work with slice - if it's even it's already the correct num and not modified
    // if odd it will jump up to the next number which we want
// HAVE TO SPLIT THE ARRAY IN TWO
  // use .slice with the middle variable to determine the two halves
// TWO HALVES HAVE TO BE NESTED WITHIN AN ARRAY
  // this can be done when setting the variable, set the variable with the two halves sliced
// return new array

function halvsies(arr) {
  let middle = Math.ceil(arr.length / 2);
  let halvedArr = [arr.slice(0, middle), arr.slice(middle)]
  return halvedArr;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]