// master list of javascript methods

// STRING
  String.fromCharCode(99);
  'a'.charCodeAt();
  'hello'.charAt(1);




// ARRAY
  arr.some(/* function goes here */);
  arr.every(/* function goes here */);
  arr.find(/* function goes here */) // will find the first element in the array that passes the test function, if nothing returns undefined.
  arr.findIndex(/* function goes here */) // finds first index for the first element that passes testing function. return -1 if nothing found
  arr.reverse() // careful! this mutates!

// Array destructuring assignment - create variables using the array
    let arr = [6, 'hello'];
    let [num, str] = arr;

