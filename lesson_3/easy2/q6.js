// Suppose we build an array like this:
/* let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]); */

let nestArr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// Create a new array that contains all of the above values, but in an un-nested format:


// this is one way, but not the most efficient
let newArr = [nestArr[0], nestArr[1], nestArr[2][0], nestArr[2][1], nestArr[3][0], nestArr[3][1]];
console.log(newArr);


// first way from book
let flintArr = [].concat(...nestArr);

console.log(flintArr);

let randomArr = flintArr.concat(['Amy', 'Alice']);

console.log(randomArr);

