// Med1 exercises from lesson 3

/* 
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ... */

   /* Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this: */

// my solution
// let str = 'The Flintstones Rock!'

// let padding = str.length;

// let maxLength = str.length + 10;

// while (padding < maxLength) {
//   console.log(str.padStart(padding));
//   padding ++;
// }

// book solution

// for (let padding = 1; padding <= 10; padding++) {
//   console.log(' '.repeat(padding) + 'The Flintstones Rock!');
// }

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// set array = splitting the string
// iterate over array
// if element is lowercase uppercase it and vice versa
// join and return new string

// My solution:
// let munstersArr = munstersDescription.split('')

// for (let i = 0; i < munstersArr.length; i++) {
//   if (munstersArr[i] === munstersArr[i].toUpperCase()) {
//     munstersArr[i] = munstersArr[i].toLowerCase();
//   } else {
//     munstersArr[i] = munstersArr[i].toUpperCase();
//   }
// }

// let result = munstersArr.join('');
// console.log(result);

// book solution with map

// let reverseCase = munstersDescription.split('')
//   .map(el => {
//     if (el === el.toUpperCase()) {
//       return el.toLowerCase();
//     } else {
//       return el.toUpperCase();
//     }
//   })
//   .join('');

// console.log(reverseCase);


// Alan wrote the following function, which was intended to return all of the factors of number:

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0)
//     factors.push(number / divisor)
//     divisor -= 1;
//   }
//   return factors;
// }

/* Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code? */


// console.log(factors(100));


/* Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

Is there a difference between these implementations, other than the method she used to add an element to the buffer? */

// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// What will the following two lines of code output?

// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);

// What do you think the following code will output?

// let nanArray = [NaN];


// console.log(nanArray[0] === NaN);

// Going to say it's false. Can't use === or == to see if somehting is NaN
// NaN is just used when an operation that is supposed to return a number doesn't. At that point it will give you NaN.

// How can you reliably test if a value is NaN?

// let numVar = NaN;

// console.log(Number.isNaN(numVar));

// What is the output of the following code?

// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);

// Going to say 34. What happens is that new Answer gets the value of the function but it doesn't change the original variable. The only time that is changed is console.log


// One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }

// messWithDemographics(munsters);
// console.log(munsters);
// // This will change it becasue of shallow copy/pointers

// Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.

// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }

// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// rock
// paper
// paper
// paper

// function foo(param = "no") {
//   return "yes";
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }

// // What will the following function invocation return?

// console.log(bar(foo()));

// inner foo = 'no' for parameter, but returns 'yes';
// no - will return this

