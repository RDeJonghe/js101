// Practice problem 2

// How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

// NOPE, THIS PEDAC IS OFF, can do with just sort.
// Problem
  // - Order the array of Objects based on year of publication, old to new
  // - Input: Array of objects
  // - Output: Array of objects ordered
  // - Questions, want the same input as output?
  // - Questions - return new object? Old object is not modified

// Examples / Test cases
  // - check with array given

// Data structures:
  // Array, objects, years are strings

// Algorithm:
  // Take the array
  // Be able to iterate over each element
  // Order these by year published
  // return new array with the objects in order

// Code
  // - Take array and convert objects within it to an array
  // - Iterate over these inner arrays
  // - order by the year published - in sort convert to a number so can sort this way
  // - after sort convert back to objects - use iteration assignment to do this
  // - return new array with sorted objects


// CAN JUST USE SORT. SORT WILL ITERATE OVER THE ARRAY. will sort in place, destructive.
  // sort goes to each element,
  // from there just access the key - value pair, it will be sorted on that
  // have to convert to number

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

console.log(books.sort((a, b) => {
  return Number(a.published) - Number(b.published)
}))