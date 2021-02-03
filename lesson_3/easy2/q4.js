// Starting with the string: show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";

let newFamousWords = 'Four score and ' + famousWords;

console.log(newFamousWords);

let four = 'Four score and ';

let veryFamousWords = four.concat(famousWords);

console.log(veryFamousWords);

