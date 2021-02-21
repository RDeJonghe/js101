// practice problem 11

// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let stringified = JSON.stringify(arr);
let deepCopy = JSON.parse(stringified);


// 1st way
// deepCopy.map(obj => {
//   for (let key in obj) {
//     obj[key] += 1;
//   }
// })



console.log(arr);
console.log(deepCopy);