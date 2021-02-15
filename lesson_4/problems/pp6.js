// practice problem 6 from lesson 4

// How does Array.prototype.fill work? Is it destructive? How can we find out?



// fill can put and replace values in an array. So first number is start index, next number is what is being put in, and last number is end index. So in this case it's ending at index 5 so it's actually adding to the length.

// To see if it's destructive you can set it to a new array and see if the old array is also changed

let arr = [1, 2, 3, 4, 5]
let newArr = arr.fill(1, 1, 5);

console.log(arr);
console.log(newArr);

// yes it is destructive, but it also change index 0 which I didn't expect
