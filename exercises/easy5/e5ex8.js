// PROBLEM:
  //  Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.
// EXAMPLES: given
// DATA STRUCTURES: Arrays, numbers
// ALGORITHM
  // set empty array
  // make the number a string
  // iterate over the string
  // push each element to the empty array - these have to be converted back to Numbers
  // return array

function digitList(num) {
  let strNums = String(num).split('');
  let numArr = [];
  for (let i = 0; i < strNums.length; i++) {
    numArr.push(parseInt(strNums[i]));
  }
  return numArr;
}

// first way was able to solve it.
// const digitList = (num) => {
//   let arr = [];
//   strNum = String(num);
  
//   for (let i = 0; i < strNum.length; i++) {
//     arr.push(Number(strNum[i]))
//   }
//   return arr;
// }

// another attempt that worked
// const digitList = (num) => {
//   let arr = String(num).split('');
//   let numArr = arr.map(el => {
//     return Number(el);
//   })
//   return numArr;
// }

// using .map()
// const digitList = (num) => {
  
//   let numArr = [...String(num)].map(el => Number(el));
//   return numArr;
// }






console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
