// Practice problem 5 from lesson 4

// What is the callback's return value in the following code? Also, what is the return value of every in this code?

console.log([1, 2, 3].every(num => {
  return num = num * 2;
}));

// The callback's return value is the multiplied number,
// Every returns true since they all pass that test. Every number can be multiplied so it's true