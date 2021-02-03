// Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));


// Can also do like this: But don't understand this on well
/*
console.log(str1.match('Dino')) !== null; // false
console.log(str2.match('Dino')) !== null; // true
*/

// Can also do like this. This works since index of will check the index of a string. If the index of a string doesn't exist it will return -1. So can check against -1

console.log(str1.indexOf('Dino') > -1); // false
console.log(str2.indexOf('Dino') > -1); // true