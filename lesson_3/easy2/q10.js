// Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let t1 = statement1.split('').filter(char => char === 't').length;
let t2 = statement2.split('').filter(char => char === 't').length;

console.log(t1);
console.log(t2);