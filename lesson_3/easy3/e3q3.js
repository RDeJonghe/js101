let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)

// this will output 'hello there'
// the variable is a primitive value so it store the string primitive value
// str2 is assigned as str1, but when str2 is reassigned str1 does not change it still holds the actual value.