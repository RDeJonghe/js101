// Practice problem 2 from lesson 4

console.log([1, 2, 3].map(num => {
  num * num;
}));

// .map() returns a new array
// however this array will be empty because nothing is returned in the curly braces. With the curly braces it has to explicitly say return
// you could remove the curly braces and it would work because of implicit return for a simple function like this.

// Nope, shows 3 undefined
// Was right in that there is nothing returned explicitly, because of that it returns undefined

console.log([1, 2, 3].map(num => num * num));