// PROBLEM:
  // Write a function that takes an Array as an argument, and reverses its elements in place; that is, mutate the Array passed into this method. The return value should be the same Array object.
  // You may not use Array.prototype.reverse().
// EXAMPLES: given
// DATA STRUCTURES: arrays
// ALGORITHM - this was pretty close, but have to meet in middle of array, loop has to stop there
  // iterate over array
  // set a counter = length - 1
  // decrement counter each time through
  // assign each element position to the counter
  // return array


// My original strategy refactored after seeing user submitted solutions
// function reverse(arr) {
//   let counter = arr.length - 1;
//   for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[counter];
//     arr[j] = arr[temp];
//     counter -= 1;
//   }
//   return arr;
// }

// LS solution
// function reverse(arr) {
//   let leftIndx = 0;
//   let rightIndx = arr.length - 1;

//   while (leftIndx < arr.length / 2) {
//     [arr[leftIndx], arr[rightIndx]] = [arr[rightIndx], arr[leftIndx]];
//     console.log(arr);
//     leftIndx ++;
//     rightIndx --;
//     break;
//   }
//   return arr;
// }



// User solution that is clear
// function reverse(arr) {
//   let i = 0;
//   let j = arr.length - 1;
//   let temp;

//   while (i < j) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i ++;
//     j --;
//   }
//   return arr;
// }



// First attempt. This doesn't mutate the original. So reverses it but doesn't log true.
// function reverse(arr) {
//   let reversedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     reversedArr.unshift(arr[i]);
//   }
//   arr = reversedArr;
//   return arr;
// }


// console.log(reverse([1, 2, 3, 4]));


let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
