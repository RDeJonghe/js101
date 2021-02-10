// Coding from lesson on selection and transformation

// Let's look at an example with objects. In this example, we want to select the key-value pairs where the value is 'Fruit'.

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

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
  // Get all of the object keys
  // Loop over that object
  // Select all key value pairs that have 'Fruit' as a value, using object keys
  // Those are sent to a new object
  // Print/return the new object

// Code with intent
  // - function
  // set an array of object keys
  // - for in loop to iterate over object keys
    // check that the object key has a value of 'Fruit'
    // - can use Object.values in an if statement to isolate the values we want
  // - set empty object
  // - use object.Assign to send to empty object

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let i = 0; i < produceKeys.length; i ++) {
    let currentKey = produceKeys[i];
    let currentValue = produceList[currentKey];
    
    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }
  return selectedFruits;
}

console.log(selectFruit(produce));