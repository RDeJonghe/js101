// practice problem 9 from lesson 4

// Add up all of the ages from the Munster family object:

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
// - Output (is the original mutated or returning new collection?): Number, original not mutated
// - Rules
//     - Restate explicit requirements: Output has to be a number summing all of the ages
//     - Identify implicit requirements
// - List Questions

// **EXAMPLES / TEST CASES**
//  - Look at what example input and output is, consider exceptions/differences

// **DATA STRUCTURES**
// - How you interact with data when you implement: Object, number (primitive value)

// **ALGORITHM (PROCESS / SET OF STEPS FROM INPUT TO OUTPUT)**
// - Take the object
// - Loop over object properties
// - Select the age (number)
// - Take each one and add them to find total
// - Return Total

// **CODE (IMPLEMENT THE SOLUTION IN CODE)**
// - Set an age total variable, use this in the loop.
// - Since this is an object can use Object.values to turn the values in to an array.
// - Array of numbers will be easy to work with and sum

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let agesArray = Object.values(ages);

// let ageTotal = 0;

// agesArray.forEach(el => {
//   return ageTotal += el;
// })

// console.log(ageTotal);

// Yes, got this solution on the first try.

// Now try with reduce

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let agesArray = Object.values(ages);

// console.log(agesArray.reduce((accum, el) => {
//   return accum += el;
// }, 0));

// Now try with for... in

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let totalAges = 0;

for (let key in ages) {
  totalAges += ages[key]; // can use return here for some reason, works without return.
}

console.log(totalAges);

