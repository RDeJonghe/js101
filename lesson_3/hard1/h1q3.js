// Question 3
// Given the following similar sets of code, what will each code snippet print?

/*
function messWithVars(one, two, three) {
  one = two; // 1 set as value of 2,
  two = three; // 2 unchanged previously now set as 3, points to same place in memory. Since 1 is equal to 2, 1 is also pointing to 3
  three = one; // 3 set as value of one, which is already pointing to 3. three has same value. All have value of 3
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); 
console.log(`two is: ${two}`); 
console.log(`three is: ${three}`); 
*/

// WRONG

/*
function messWithVars(one, two, three) {
  one = ["two"]; // this just sets each variable as an array. So when the function is run the array will show.
  two = ["three"];
  three = ["one"];
}

let one = ["one"]; // these are what orginal values are
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
*/
// WRONG PRINTS 1, 2, 3 AGAIN



function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// this changes it.



