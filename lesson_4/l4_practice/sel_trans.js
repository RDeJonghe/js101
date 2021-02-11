// Coding from lesson on selection and transformation

// Let's look at an example with objects. In this example, we want to select the key-value pairs where the value is 'Fruit'.


// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// Problem:
  // input: object
  // output: object
  // rules: select only the key value pairs that have 'Fruit' as a value
  // rules: print those in the object.

// Examples/Test Cases
  // selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// Data structure:
  // Object

// Algorithm
  // Input in an object
  // Get all of the object keys in array
  // Set empty object to be used for output
  // Loop over the keys
  // Use the object key to check against the original object
  // If that key has a value of fruit send it to new object (assign)
  // need current key and current value
  // Print/return the new object

// Code with intent

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFruit(obj) {
//   let keys = Object.keys(obj);
//   let selectedFruit = {};

//   for (let i = 0; i < keys.length; i += 1) {
//     let currentKey = keys[i];
//     let currentValue = obj[currentKey];

//     if (currentValue === 'Fruit') {
//       selectedFruit[currentKey] = currentValue;
//     }
//   }
//   return selectedFruit;
// }

// console.log(selectFruit(produce));


// NOW DO IT BUT USE SELECTION CRITERIA: say what you want to select, fruit, vegetable, etc.

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFood(obj, criteria) {
//   let keys = Object.keys(obj);
//   let selected = {};

//   for (let i = 0; i < keys.length; i += 1) {
//     currentKey = keys[i];
//     currentValue = obj[currentKey];

//     if (currentValue === criteria) {
//       selected[currentKey] = currentValue;
//     }
//   }
//   return selected;
// }

// console.log(selectFood(produce, 'Vegetable'));
// console.log(selectFood(produce, 'Fruit'));
// console.log(selectFood(produce, 'Meat'));

