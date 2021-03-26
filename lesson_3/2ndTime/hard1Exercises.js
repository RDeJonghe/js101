// Hard1 exercises from lesson 3

// Will the following functions return the same results?


// function first() {
//   return {
//     prop1: "hi there"
//   };
// }

// function second() {
//   return
//   {
//     prop1: "hi there"
//   };
// }

// console.log(first());
// console.log(second());
// They won't return the same results - the return value isn't on the same line as { in the second code block


// What does the last line in the following code output?

// let object = { first: [1] };
// let numArray = object["first"]; // numArray is [1]
// numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object); // will show { first: [1, 2] } they point to same place in memory


// let object = { first: [1] };
// let numArray = object["first"].slice();
// numArray.push(2);

// console.log(object);
// console.log(numArray);


// function messWithVars(one, two, three) {
//   one = two; // both 1, 2, are ['two']
//   two = three; // 2, 3 are three
//   three = one; // 3 is two
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); //2
// console.log(`two is: ${two}`); // 3
// console.log(`three is: ${three}`); //2

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

/* Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote: */

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   if (dotSeparatedWords.length < 4 || dotSeparatedWords.length > 4) {
//     return false;
//   }
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       return false;
//     }
//   }

//   return true;
// }

// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }

//   return false;
// }

// console.log(isDotSeparatedIpAddress('10.400.5.11'));

// Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."