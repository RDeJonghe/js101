// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.


// My first solution
// function repeater(str) {
//   let arr = str.split('');
//   let arrCopy = arr.slice();
//   let doubleArr = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     doubleArr.push(arr[i], arrCopy[i]);
//   }
//   return doubleArr.join('');
// }

// Can also refactor my first solution tomake it more concise
// function repeater(str) {
//   let arr = str.split('');
//   let doubleArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     doubleArr.push(arr[i], arr[i]);
//   }
//   return doubleArr.join('');
// }

// Can try using map

// function repeater(str) {
//   return str.split('').map(el => el + el).join(''); // this concatenates the two characters together, it doesn't create a second element with the exact same character. So the element 'H' becomes the element 'HH'. With the array push like I did it was 'H' and 'H' and then those were joined. Here the join is joining double character elements. So 'HH', 'ee', etc.
// }

// Can solve this using repeat

// function repeater(str) {
//   let arr = str.split('').map(char => char.repeat(2)); // This doubles up the character 'HH' it doesn't make two seperate elements
//   return arr.join('');
// }

// Can also solve with reduce

function repeater(str) {
  return str.split('').reduce((accum, el) => {
    return accum + el + el;
  }, ''); // don't have to join since the accumulator is set as a string, each character is just concatenated to that.
}


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""