/* Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse(). */


// Algorithm FIRST WAY THIS WORKED
// create a counter variable = arr.length - 2
// create a counter2 variable = to same
// while counter > 0, push element of counter
// decrease counter by 1
// while counter > 0, shift
// decrease counter by one
// return original array

// function reverse(arr) {
//   let counter = arr.length - 2;
//   let counter2 = arr.length - 2;

//   while (counter >= 0) {
//     arr.push(arr[counter]);
//     counter -= 1;
//   }
//   while (counter2 >= 0) {
//     arr.shift();
//     counter2 -= 1;
//   }
//   return arr;
// }


// ALGORITHM - BOOK SOLUTION USING REASSIGNMENT
// GOING TO ITERATE FROM BOTH SIDES IN, STOPPING AT THE MIDDLE,
  // CAN REASSIGN AND SWAP THESE TWO AS MOVING INWARD
// create a left index = 0, create a right index = arr.length - 1
// create a stopping point = arr.length - 2, that's the middle
// open a while loop, while left index  < math.floor(arr.length  - 2)
// reassing the array by just switcing the order using [el, el]
// increment and decrease counters
// return array

function reverse(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let middleStop = Math.floor(arr.length / 2);

  while (leftIndex < middleStop) {
    [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return arr;
}

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



// SYNTAX TO REASSIGN ARRAY ELEMENTS
// let arr = [3, 2, 1];
// [arr[0], arr[2]] = [arr[2], arr[0]];
// console.log(arr);

// let arr2 = ['back', 'once', 'again'];
// [arr2[0], arr2[2]] = [arr2[2], arr2[0]]
// console.log(arr2);