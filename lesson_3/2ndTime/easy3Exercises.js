// Easy 3 exercises from lesson 3

// Write three different ways to remove all of the elements from the following array:
// let numbers = [1, 2, 3, 4];

// numbers.length = 0;

// while(numbers.length > 0) {
//   numbers.shift();
// }

// numbers = [];

// numbers.splice(0, numbers.length)

// console.log(numbers);

// What will the following code output?
// console.log([1, 2, 3] + [4, 5]);
// to concat JS coerces values to strings so this will be  a string with 34, commas are preserved no spaces

// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1)

// What will the following code output?

// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1);

// It's going to say 42, although I think slice should create a copy that wouldn't link them. Yes does show 42. Need to understand this better

// let arr3 = [{first : "value3"}, {second: "value4"}, 3, 4, 5];

// let arr4 = arr3.slice().sort((a, b) => b - a);

// console.log(arr3);
// console.log(arr4);

// let arr3 = [[1, 2]];
// let arr4 = arr3.slice().map(el => el.length = 0);

// console.log(arr3);
// console.log(arr4);

// slice performs shallow copies what that means is that primitive values like numbers and strings are actually copied over and are separate values that are not linked in the two different places. However with objects and arrays a shallow copy just copies the pointer. What this means is that they're really the same thing pointing to the same place, so a change will appear in both places.

// The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid(color) {
//   return color === 'blue' || color === 'green';
// }

// function isColorValid(color) {
//   return (color === 'blue' || color === 'green') ? true : false;
// }

// const isColorValid = (color) => ['blue', 'green'].includes(color);

// console.log(isColorValid('blue'));
// console.log(isColorValid('green'));
// console.log(isColorValid('yellow'));

