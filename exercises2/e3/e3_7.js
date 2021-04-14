 /* A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is. */

// ALGORITHM
// create a function that takes a number as an argument
// convert number to string - string will be easier to work with for checking things
// if length of string is odd - return original number times 2
// if length of string is even - need to split the string in half and do a comparison
  // create a first half variable that is a slice
    // 0, str.length / 2
  // create a second half variable that is a slice
    // str.length / 2
  // compare these two
  // if equal return original number
  // if not return original number multiplied by two


function twice(num) {
  let strNum = String(num);
  let firstHalf = strNum.slice(0, strNum.length / 2);
  let secondHalf = strNum.slice(strNum.length / 2);

  if (strNum.length % 2 === 1) {
    return num * 2;
  } else if (firstHalf === secondHalf) {
    return num;
  } else {
    return num * 2
  }
  
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));       // 3333
console.log(twice(7676));        // 7676