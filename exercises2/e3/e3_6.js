// easy 3 exercise 6

/* Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Example: */

// ALGORITM
// require readline sync
// set variables and ask for noun verb, adj, adv
// use template literals to create the story

const READLINE = require('readline-sync');

let noun = READLINE.question('Enter a noun: ');
let verb = READLINE.question('Enter a verb: ');
let adj = READLINE.question('Enter an adjective: ');
let adv = READLINE.question('Enter and adverb: ');

console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`);
console.log(`The ${adj} ${noun} ${verb} ${adv} over the lazy dog.`);
console.log(`The ${noun} ${adv} ${verb} up ${adj} Joe's turtle.`)


/* Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle. */