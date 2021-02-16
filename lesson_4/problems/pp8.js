// practice problem 8 from lesson 4

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// **UNDERSTAND THE PROBLEM**
// - Inuput: Array
// - Output (is the original mutated or returning new collection?): An object, original is not mutated
// - Rules
//     - Restate explicit requirements: Names are keys, values are array positions
//     - Identify implicit requirements: Order is the same
// - List Questions

// **EXAMPLES / TEST CASES**
//  - Look at what example input and output is, consider exceptions/differences

// **DATA STRUCTURES**
// - Array & Object

// **ALGORITHM (PROCESS / SET OF STEPS FROM INPUT TO OUTPUT)**
// - Take an array
// - Set an empty object (I don't think you use Object.Assign in this case)
// - Iterate over the array, remember to also use the second value of index - idx, this will be needed
// - For each loop through assign object, use notation to assign each value
// - Return object

// **CODE (IMPLEMENT THE SOLUTION IN CODE)**
// - Think about solution and algorithm in the context of the programming language being used

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// let flintObj = {};

// flintstones.forEach((el, idx) => {
//   return flintObj[el] = idx;
// })

// console.log(flintObj);
// console.log(flintstones);

// Was able to do this first time, was right don't use Object.assign to take an array and make it an object. Use iteration and assign it within the loop.
