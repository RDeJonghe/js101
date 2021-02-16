// Create an object that expresses the frequency with which each letter occurs in this string:
// let statement = "The Flintstones Rock";
// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// **UNDERSTAND THE PROBLEM**
// - Inuput: String
// - Output (is the original mutated or returning new collection?): Object, old string is left intact
// - Rules
//     - Restate explicit requirements: Need to use a string and count occurences of each letter, results are put in an object, letter is the key, value is the number of occurances
//     - Identify implicit requirements: Case sensistive, uppercase is different than lowercase
// - List Questions
//    - If a letter occurs more than once will it occur more than once in the object (with appropriate number)?

// **EXAMPLES / TEST CASES**
//  - Look at what example input and output is, consider exceptions/differences

// **DATA STRUCTURES**
// - How you interact with data when you implement: String, Object, likely need arrays to convert between these.

// **ALGORITHM (PROCESS / SET OF STEPS FROM INPUT TO OUTPUT)**
// - Take a string
// - Go over each letter
// - Count all the occurences of each letter and keep a tally
// - Results are put into an object.

// **CODE (IMPLEMENT THE SOLUTION IN CODE)**
// - Think about solution and algorithm in the context of the programming language being used
// - Use.split() to send each letter to an array, so there is a letters array, ALSO USE FILTER TO GET RID OF SPACES
// - use regex to count all of the occurences?



let statement = "The Flintstones Rock";

let charsArray = statement.split('').filter(el => el !== ' ');
let result = {};
console.log(charsArray);

charsArray.forEach(el => {
  result[el] = result[el] || 0; // how is the letter getting assigned as the key?
  result[el] += 1;
});

// console.log(result);

g