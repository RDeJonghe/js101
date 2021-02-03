// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
/*
let upper = 'T';
let newDescription = upper.concat(munstersDescription.slice(1).toLowerCase());
console.log(newDescription)
*/


// can also do with charAt();
// note how you can concat with the + sign
/*
let newDescription = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();
console.log(newDescription);
*/


// Trying the concat with a plus +

let newDescription = 'T' + munstersDescription.slice(1).toLowerCase();

console.log(newDescription)

