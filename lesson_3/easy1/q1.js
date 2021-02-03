// Will the code below raise an error?

// no, it will set it as 5, the other ones will be undefined

let numbers = [1, 2, 3];
numbers[6] = 5;

console.log(numbers[4]);
/* let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return? */

// Will return undefined. Yes, I was right about that. But it's technically not acutally undefined. It's empty items, so returns undefined to say that but not actually undefined. map() with this will show the difference