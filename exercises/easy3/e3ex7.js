// easy 3 ex 7
// Problem
/* Double Doubles
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is. */

// Examples: given

// Data structures: number, also string possibly

// Algorithm:
  // take number entered
  // split it in half
  // compare two sides
  // if two sides are equal then return initial number
  // if not equal multiply initial number by 2 and return that


function twice(num) {
  let strNum = String(num);
  let middleIndx = (strNum.length / 2);
  let firstHalf = strNum.slice(0, middleIndx);
  let secondHalf = strNum.slice(middleIndx);
  
  if (firstHalf === secondHalf) {
    return num;
  }
  else {
    return num * 2;
  }
}



console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676