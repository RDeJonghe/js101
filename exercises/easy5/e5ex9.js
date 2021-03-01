// PROBLEM:
  // Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV")
// EXAMPLES: given
// DATA STRUCTURES: array, strings
// ALGORITHM:
  // make an empty object, the empty object will store the name and the value will be the number
    // This is important to remember, sometimes an object is used and the info is sent from the array to the object
    // First instinct might say to work with the array and shift, or change and count items in array, but in this case send to object
  // iterate over array
  // Have to count and set each item using object notation to assing
  // If it already exists, += 1. This comes first, don't want to create it and then plus equal after. check if it exists first
  // If it doesn't exist, set it to one, this comes second - in case there is one item it will only get set not plussed.
  // To print the items in format have to do iteration - easy way is to use Object.keys, Object.values and deal with arrays to print.


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

const countOccurrences = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  print(obj);
}

function print(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]} => ${values[i]}`);
  }
}



(countOccurrences(vehicles));


// function countOccurrences(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] ++;
//     }
//     else {
//       obj[arr[i]] = 1;
//     }
//   }
//  let keys = Object.keys(obj);
//  let values = Object.values(obj);
//  for (let i = 0; i < keys.length; i++) {
//    console.log(`${keys[i]} => ${values[i]}`);
//  }
  
// }

// (countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

