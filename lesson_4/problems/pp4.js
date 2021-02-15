// Practice problem 4 from lesson 4

console.log(['ant', 'bear', 'caterpillar'].pop().length);

// What is the return value of the following statement? Why?

// I think it will pop and remove all of the elements. I'd say it will return an empty array but it's never that clear.

let arr = ['ant', 'bear', 'caterpillar'];

let caterpillarLength = arr.pop().length;

console.log(arr);
console.log(caterpillarLength);

// wrong it doesn't pop the length, i thought it would just pop everything it doesn't. What it does do is pop the last element of the array which is caterpillar and then returns the length of that which is 11

console.log('caterpillar'.length);