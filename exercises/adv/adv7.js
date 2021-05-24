
/* With a linear search, we would have to sequentially go through each of the items until we found the search item 'Pizzeria'. In a binary search, however, the following sequence happens:

Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
If the middle value is equal to 'Pizzeria', stop the search.
If the middle value is less than 'Pizzeria':
Discard the lower half, including the middle value --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
Repeat the process from the top, using the upper half as the starting data --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
If the middle value is greater than 'Pizzeria', do the same as the previous step, but with opposite halves.
Using the process described above, the search successfully ends on the second iteration when the middle value is 'Pizzeria'.

Implement a binarySearch function that takes an array and a searchItem as arguments, and returns the index of the searchItem if found, or -1 otherwise. You may assume that the array argument will always be sorted.

 */



 // ALGORITHM
  // create a function that takes an array as a firt argument, and a value as the second
  // create a copy of the array with slice
  // create a helper function to find the middle value of an array
  // check if the middle value is equal to the value passed as the second argument, if so return that
  // if not slice the first half of the array and get rid of it
  // with the second half perform the same search and repeat
  // can do this in a while loop, while length is > 0 (if greater than 0 return -1)
  // else return index of the found item in the original array

// function checkMiddle(arr, val) {
//   let copy = arr.slice();
//   let middle = Math.floor(arr.length / 2);

//   if (copy[middle] === val) {
//     return arr.indexOf(val);
//   }
// }


// function binarySearch(arr, val) {
//   let copy = arr.slice();
//   let middle = Math.floor(arr.length / 2);

//   return middle;
// }





// let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// binarySearch(yellowPages, 'Pizzeria');                   // 7
// binarySearch(yellowPages, 'Apple Store');                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6