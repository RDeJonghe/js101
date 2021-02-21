//  Practice problem 7

// Given the following code, what will the final values of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]];

arr[0] += 2; // [4, [5, 8]]
arr[1][0] -= a; // a was changed to 4 also  [4, [1, 8]];

// It's:
[4, [1, 8]];

// a isn't an array!!! I thought it was an array and pointing to the same spot in memory. No it's a primitive value.