// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// function stringy(num) {
//   let counter = 1;
//   let results = [];
//   while (counter <= num) {
//     if (counter % 2 === 1) {
//       results.push(1);
//     } else {
//       results.push(0);
//     }
//     counter ++;
//   }
//   return results.join('');
// }


// can do it by concating string

// function stringy(num) {
//   let results = '';
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 1) {
//       results += '1';
//     } else {
//       results += '0'
//     }
//   }
//   return results;
// }

// with ternary operator

function stringy(num) {
  let results = '';
  for (let i = 1; i <= num; i++) {
    (i % 2 === 1) ? results += '1' : results += '0';
  }
  return results;
}
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

/* 101010
101010101
1010
1010101 */