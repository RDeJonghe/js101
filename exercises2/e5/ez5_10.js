// Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

// algorithm
// create a function that takes an array as an argument
// create a sum variable equal to adding all the elements of the array - can use this with reduce
// divide by length of array
// math.floor it

const average = (arr) => Math.floor((arr.reduce((accum, num) => accum += num, 0) / arr.length));


console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40