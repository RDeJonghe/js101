// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
let newNums = numbers.slice(0).reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
// this works becasue .slice doesn't mutate. So that is put on first with the entire array and then reversed.



// SPREAD SYNTAX
// Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 
// Don't understand this well


let numbers2 = [1, 2, 3, 4, 5];
let sortedArray = [...numbers2].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]



