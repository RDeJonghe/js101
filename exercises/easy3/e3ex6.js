// easy 3 ex 6

/* Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Example: */

/* Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle. */

const READLINE = require('readline-sync');

let noun = READLINE.question('type in a noun: ')
let verb = READLINE.question('type in a verb: ')
let adj = READLINE.question('type in an adjective: ')
let adverb = READLINE.question('type in an adverb: ')

let story = `Jack and Jill ${verb} ${adverb}. They brought ${noun} with them and they felt ${adj}`;

console.log(story);

