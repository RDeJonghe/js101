// Pick out the minimum age from our current Munster family object:

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// **UNDERSTAND THE PROBLEM**
// - Inuput: Object
// - Output (is the original mutated or returning new collection?): number
// - Rules
//     - Restate explicit requirements Output has to be the lowest age (number)
//     - Identify implicit requirements
// - List Questions

// **EXAMPLES / TEST CASES**
//  - Look at what example input and output is, consider exceptions/differences

// **DATA STRUCTURES**
// - How you interact with data when you implement object, number

// **ALGORITHM (PROCESS / SET OF STEPS FROM INPUT TO OUTPUT)**
// Take an object
// Loop over it and isolate all of the ages
// Pick out the lowest number
// Return/Print that number

// **CODE (IMPLEMENT THE SOLUTION IN CODE)**
// - Convert the values to an array, that will be easy to work with
// - Iterate over the Array with forEach - may not be needed.
// - Search for a Math function that finds minimum number (one option) - Math.min(...[array here]) NEED SPREAD SYNTAX!!!
// - May be able to set a second array with only one number and do a comparison, reassign if new number is smaller (option) not needed, solved with Math.min

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageArray = Object.values(ages);

let lowestAge = Math.min(...ageArray);
console.log(lowestAge);