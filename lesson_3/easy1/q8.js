// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');

console.log(flintstones);

// can also add to an array with concat

flintstones = flintstones.concat("Name");

console.log(flintstones);

// can also add to the last index with .length, adding another can do like this:

flintstones[flintstones.length] = 'Name2';

console.log(flintstones);
