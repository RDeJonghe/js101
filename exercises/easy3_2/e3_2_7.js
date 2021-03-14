/* A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is. */

// function twice(num) {
//   let strNum = String(num);
//   if (strNum.length % 2 === 1) {
//     return num * 2;
//   }
//   let firstHalf = [];
//   let secondHalf = [];
  

//   for (let i = 0; i < strNum.length / 2; i++) {
//     firstHalf.push(strNum[i]);
//   }
//   for (let i = strNum.length / 2; i < strNum.length; i++) {
//     secondHalf.push(strNum[i]);
//   }

//   if (firstHalf.join('') === secondHalf.join('')) { // Have to compare the strings, the arrays won't be equal
//     return num;
//   } else {
//     return num * 2;
//   }
// }


// CAN ALSO DO WITH SUBSTRING:



function twice(num) {
  let strNum = String(num);
  let middle = strNum.length / 2
  let firstHalf = strNum.substring(0, middle);
  let secondHalf = strNum.substring(middle, strNum.length);
  
  if (strNum.length % 2 === 1) {
    return num * 2;
  }
  if (firstHalf === secondHalf) {
    return num
  } else {
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