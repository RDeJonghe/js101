// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

// ALGORITHM
// create a function that takes an array
// create an empty object variable for results
// iterate over the array
// check if the key exists, if it doesn't set it equal to one
// else += that key with 1
// create an object.entries array
// iterate over it, printing each key value with a template literal

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];


function countOccurrences(arr) {
  let vehicleCounts = {};

  for (let i = 0; i < arr.length; i ++) {
    if (!vehicleCounts[arr[i]]) {
      vehicleCounts[arr[i]] = 1;
    } else {
      vehicleCounts[arr[i]] += 1;
    }
  }
  let keyVals = Object.entries(vehicleCounts);
  keyVals.forEach(el => console.log(`${el[0]} => ${el[1]}`))
}                

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2