// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];


// ALGORITHM:
  // set an empty object
  // iterate over array
  // check if it doesn't exist, if it doesn't set it to 0
  // increment it by one
  // do an object.entries
  // iterate over that and print

function countOccurrences(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (!obj[key]) {
      obj[key] = 0;
    }
    obj[key] += 1;
  }
  let entryPairs = Object.entries(obj);
  for (let i = 0; i < entryPairs.length; i++) {
    console.log(`${entryPairs[i][0]} => ${entryPairs[i][1]}`);
  }
}



console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2