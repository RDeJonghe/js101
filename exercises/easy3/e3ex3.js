// Problem : Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.
// Examples:
  // stringy(6);    // "101010"
  // stringy(9);    // "101010101"
  // stringy(4);    // "1010"
  // stringy(7);    // "1010101"
//Data  structures: Integers, Strings
// Algorithm:
  // Take a number
  // set a pattern of 1 - 0
    // Probably use a loop
    // concat on the string
  // repeat the pattern up to the length/number of integer


// The solution makes use of a for loop to incrementally build the result string. At every iteration of the loop, the solution checks to see if the index position is even. If so, the solution appends a '1' to the initially empty result string, or '0' otherwise.

// function stringy(num) {
//   let result = '';
//   for (let i = 0; i < num; i++) {
//     let number = ((i % 2 === 0) ? 1 : 0);
//     result.concat(number);
//   }
//   return result;
// }


// Another way to do it:

// function stringy(num) {
//   let result = '1';
//   for (let i = 1; i < num; i++) {
//     if (result[result.length - 1] === '1') {
//       result += '0';
//       // result.concat('0'); Concat doesn't work here
//     }
//     else {
//       result += '1';
//       // result.concat('1'); concat doesn't work here
//     }
//   }
//   return result;
// }

// function stringy(int) {
//   let str = '1';
//   for (let i = 1; i < int; i++) {
//       if (str[str.length - 1] === '1') {
//           str += '0';
//       } else {
//           str += '1';
//       }
//   }
//   return str;
// }




// COULDN'T GET THIS WAY TO WORK.
// function stringy(num) {
//   let str = '1'; // always at least 1 positive integer
//   let numArr = [];
//   let counter = num;
//   while (counter > 0) {
//     numArr.push(counter);
//     counter -= 1;
//   }
//   numArr.reverse();
//   console.log(numArr);

//   for (let i = 1; i < numArr.length; i++) {
//     if (numArr[i] % 2 === 0) {
//           return str += '0';
//         }
//     if (numArr[i] % 2 === 1) {
//          return str += '1';
//         }
//       }
//       return str;
// }

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"


  // while (numArr.length <= num) {
  //   if (num % 2 === 0) {
  //     str.concat('0');
  //   }
  //   if (num % 2 === 1) {
  //     str.concat('1');
  //   }
  // }
  // return str;



