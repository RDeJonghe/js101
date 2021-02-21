// practice problem 1 from lesson 5

// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

// arr.sort((a, b) => b - a);
// console.log(arr);  This worked without number function but hint says to use Number

// Number(arr.sort((a, b) => b - a)); Also works but they use number inside

let arr2 = arr.sort((a, b) => Number(b) - Number(a));
console.log(arr2);

console.log(typeof arr2[0]);