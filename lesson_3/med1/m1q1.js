/* Question 1
Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this: */

// The Flintstones Rock!
//  The Flintstones Rock!
  // The Flintstones Rock!
  //  ...

let phrase = 'The Flintstones Rock!'

for (let counter = 0; counter < 11; counter += 1) {
  console.log(' '.repeat(counter) + phrase);
}


// // 
// let counter = 0;
// let phrase = 'The Flintstones Rock!';
// let padding = phrase.length + counter;

// while (counter < 11) {
//   counter += 1;
//   console.log(phrase.padStart(padding, ' '));
// }

// for (let counter = 0; counter < 11; counter += 1) {
//   counter2 += 1;
//   console.log(phrase.padStart(padding, ' '));
// }

// console.log(phrase.padStart(padding, ' '));

// let title = "Flintstone Family Members";
// let padding = Math.floor((40 - title.length) / 2);

// console.log(title.padStart(padding + title.length));