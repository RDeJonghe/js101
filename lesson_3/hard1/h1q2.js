//// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// I say it will show {first: [1, 2]}
// numArray is set to object['first'], so they share the same pointer in memory. Then 2 is pushed.
// since they share the same place in memory, object is also pointing to that sot the object is also changed.

//Right


// Two ways of doing it without modifying original object .slice and .concat

let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);

let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);
