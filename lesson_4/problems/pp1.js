// Practice problem 1 from lesson 4

console.log([1, 2, 3].filter(num => 'hi'));
// What is the return value of the filter method call below? Why?
//  - filter returns a value (like map, forEach returns undefined)
//  - filter creates a new array

// If this were written with num === 'hi' I'd say it would return an empty array. But I don't think it is written correctly
// I don't think this function does anything so I'll say it will produce and error.

// Wrong - no error, it doesn't filter anything it just passes them all to the new array that filter creates


// console.log([1, 2, 3].filter(el => el === 'hi'));