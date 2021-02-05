// Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];

// numbers = [];

// numbers.length = 0;

// numbers.splice(0, numbers.length);

// numbers.forEach(el => {
//   numbers.pop(el);
// })
// Why doesn't forEach work with .pop or .shift? Only takes off last 2 or first 2?
// same thing with a for loop

while (numbers.length) {
  numbers.pop();
}
console.log(numbers);