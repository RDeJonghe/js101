// lesson 4 second time practice

// let str = 'The grass is green';

// // console.log(str.slice(4, 9));
// console.log(str.slice(-5));
// console.log(str.slice(-8, -6));

// let arr = [{first : 1},['second', '2'], 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
// console.log(arr.slice(2, 5)[0]);

// // console.log(arr === arr.slice());

// let arrCopy = arr.slice();

// arrCopy.push('h');
// arrCopy[1][0] = 'third'

// console.log(arr);
// console.log(arrCopy);

// let arr = [['first', 2], 'third', 4, ['fifth']];

// // let arrCopy = arr.slice();
// // arrCopy[0][0] = '1st';

// // // arrCopy[2] = 5;

// let fifthArr = arr[3].slice();
// fifthArr[0] = 'sixth';

// console.log(arr);
// // console.log(arrCopy);
// console.log(fifthArr);

// let arr = ['fu'];
// let arr2 = arr.slice();

// arr2[0] = 'bu';

// console.log(arr);
// console.log(arr2);


// let object = { first: [1] };
// let numArray = object["first"].slice(); // 
// numArray.push(2);

// console.log(object);
// console.log(numArray);

// let arr = [['first', 2], 'third', 4, ['fifth']]; // nested array, the pointers (shallow copy are copied over - they are not distinct). The primitive values are distinct though.
// let arrCopy = arr.slice();

// // arrCopy[0][0] = '1st'; // this references the shallow copy and the pointer, so the change will be seen in both places
// // arrCopy[1] = '3rd';

// let arr = [['first', 2], 'third', 4, ['fifth']]; // nested array, the pointers (shallow copy are copied over - they are not distinct). The primitive values are distinct though.
// let arrCopy = arr.slice();

// arrCopy[0][0] = '1st'; // this references the shallow copy and the pointer, so the change will be seen in both places
// arrCopy[1] = '3rd'; // this references a primitive value, the actual value is stored. The change will only be seen in arrCopy
// console.log(arr);
// console.log(arrCopy);

// let arr = [['first', 2], 'third', 4, ['fifth']];
// let fifthArr = arr[3].slice();

// fifthArr[0] = 'sixth';

// console.log(arr);
// console.log(fifthArr);

// let arr = [['first', 2], 'third', 4, ['fifth'], ['sixth']];
// let sixthArr = arr.slice();

// sixthArr[4][0] = '6th';

// console.log(arr);
// console.log(sixthArr);

// let arr = [1, 2, [3]];
// let arrCopy = arr.slice();

// console.log(arr === arrCopy);
// console.log(arr[2] === arrCopy[2]);

// let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' };

// console.log(obj)

// let answer = 'Phoenix';

// if (['Los Angeles', 'San Diego', 'San Francisco'].includes(answer)) {
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }

// let num = 12.99;
// console.log(Math.floor(num));

// let arr1 = 'back once again';
// let arr2 = 'I\'m the renegade master';

// function logIt(a, b) {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }

// function iterateIt(a, b) {
//   let arrCopy = [...arguments[0]];

//   console.log(arrCopy.map(el => el.toUpperCase()));
//   console.log(arr1);
// }

// iterateIt(arr1, arr2);

// function func1(a, b, c) {
//   console.log(arguments[0]);
//   // expected output: 1

//   console.log(arguments[1]);
//   // expected output: 2

//   console.log(arguments[2]);
//   // expected output: 3
// }

// func1(1, 2, 3);


// let num = 31.76;

// let rounded = Number(num.toFixed(1));
// console.log(rounded);
// console.log(typeof rounded);

// let strRound = num.toFixed(0);
// console.log(strRound);
// console.log(typeof strRound);

// let str = '123.56';
// let str2 = '12oz';

// // console.log(parseInt(str, 10))
// // console.log(parseInt(str2, 10))

// console.log(parseFloat(str))
// console.log(parseFloat(str2))

// let str3 = '1234.56789';

// console.log(Number(parseFloat(str3).toFixed(3)));

// let num = 4358;

// // let neg = -Math.abs(num);
// let neg = Math.abs(num) * -1

// console.log(neg);

// let nums = [1, 2, 3]

// let arr = Array(...nums);
// // let arr = [...nums]

// arr[0] = 0;
// console.log(arr);
// console.log(nums)

// let arr = new Array('Back', 'once', 'again', ['im', 'the', 'renegade', 'master']);

// let arr = new Array('back');

// let arr = ['hello', 'world'];

// let newArr = new Array('yo', arr)

// console.log(newArr);


// let str = 'back once again';
// // let newStr = string.slice(string.indexOf('once'), string.indexOf('again'));
// // console.log(newStr)

// let counter = 0;

// for (let i = 0; i < str.length; i++) {
//   newStr = str.substring(counter);
//   console.log(newStr);
//   counter ++;
// }

// let arr = [2, 6, 8, 10];

// arr.splice(1, 0, 4);

// arr.splice(2, 0, 4.5)

// console.log(arr);

// arr.splice(-1, 0, 8.5)

// console.log(arr);


// let str = 'back once again';

// let aChar = str.match(/ag/gi);

// console.log(aChar);

// let arr = [3, 2, 1];

// console.log(arr.reverse());

// let str = '321';
// console.log(str.split('').reverse().join(''));

// let str = 'Back once again';

// let regex = /[a-zA-z]/g;
// let regex2 = /[a-z][A-Z]/g;

// console.log(str.match(regex));
// console.log(str.match(regex2));

// const READLINE = require('readline-sync');

// let num = READLINE.question('enter a number: ');

// console.log(num);
// console.log(typeof num);

// // convert to rounded number

// num = Number(parseFloat(num).toFixed(2));
// console.log(num);
// console.log(typeof num);

// const READLINE = require('readline-sync');

// let num = READLINE.question('enter a number: ');

// num = parseFloat(num);

// while (numIsInvalid(num)) {
//   console.log('INVALID ENTRY');
//   num = READLINE.question('enter a number: ');
// }

// // while (num.trimStart === '' || Number.isNaN(num)) {
// //   console.log('invalid entry')
// //   num = READLINE.question('enter a number: ')
// // }

// // console.log(typeof num);
// // console.log(num);

// function numIsInvalid(number) {
//   return number.trimLeft === '' || Number.isNaN(number);
// }

// let num = '    32';
// console.log(num);
// console.log(num.trimStart());

// const READLINE = require('readline-sync');

// function numIsInvalid(numberVar) {
//   return numberVar.trimStart() === '' || Number.isNaN(Number(numberVar));
// }



// let num = READLINE.question('Enter in a number: ');

// while (numIsInvalid(num)) {
//   console.log('INVALID ENTRY');
//   num = READLINE.question('Enter in number: ');
// }


// console.log(num);
// console.log(typeof num);

// const READLINE = require('readline-sync');

// function numIsInvalid(numberVar) {
//   return numberVar.trimStart() === '' || Number.isNaN(Number(numberVar));
// }

// let num = READLINE.question('Enter in a number fool: ');

// while (numIsInvalid(num)) {
//   console.log('invalid entry');
//   num = READLINE.question('For realz homes enter a number: ');
// }

// console.log(num);
// console.log(typeof num);

// test that it's a string

// function strIsInvalid(strVar) {
//   return !Number.isNaN(Number(strVar)) || strVar.trimStart() === '';
// }

// const READLINE = require('readline-sync');

// let str = READLINE.question('Enter in a sentence: ');

// while (strIsInvalid(str)) {
//   console.log('invalid entry');
//   str = READLINE.question('Enter in a sentence: ');
// }

// console.log(str);

// const INFO = require('./practice.json');

// console.log(INFO['Thailand']['Bangkok']);
// console.log(INFO['Mexico']['Oaxaca']);

// let arr1 = [2, 4, 6, 8, 10];
// let arr2 = [8, 10, 12, 14, 16];

// let arr3 = Array(...arr1);

// for (let i = 0; i < arr2.length; i++) {
//   if (!arr3.includes(arr2[i])) {
//     arr3.push(arr2[i]);
//   }
// }

// console.log(arr3);
// console.log(arr2);
// console.log(arr1);

// let answer = "'en'";
// let answer2 = '"es"';

// console.log(answer2)
// console.log(answer)


// function noQuotes(str) {
//   return str = str.replace(/['"]+/gi, '');
// }

// console.log(noQuotes(answer));
// console.log(noQuotes(answer2));

// function clearConsole() {
//   console.clear();
// }

// clearConsole();

// let obj = {
//   colorado : 'mountains',
//   arizona : 'grand canyon',
//   california : 'beaches',
//   'new york' : 'city'
// }

// console.log(obj.hasOwnProperty('new york'));
// obj.hasOwnProperty();
// obj.hasOwnProperty();
// obj.hasOwnProperty();
// obj.hasOwnProperty();
// obj.hasOwnProperty();
// obj.hasOwnProperty();
// obj.hasOwnProperty();
// obj.hasOwnProperty();
// obj.hasOwnProperty();
// obj.hasOwnProperty();

// console.log(Object.keys(obj).includes('california'));

// let num = Number('');

// // console.log(num);
// // console.log(typeof num);

// let num2 = 100;

// console.log(num * num2);

// let str = 'Back 1nce @g@in Im the renegade master';

// // console.log(str.charAt(11));
// // console.log(str.charCodeAt(11));
// // console.log(str.charCodeAt(11) === 103);

// str = str.slice(0, 11) + str.charAt(11).toUpperCase() + str.slice(12);
// console.log(str);

// let arr1 = [2, 4, 6, 8];
// let arr2 = [6, 8, 10, 12];

// let arr3 = Array(...arr1);

// for (let i = 0; i < arr2.length; i++) {
//   if (!arr3.includes(arr2[i])) {
//     arr3.push(arr2[i]);
//   }
// }
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


// arr3 = arr3.concat(arr2);
// console.log(arr3)

// arr3.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(arr3)

// let arr = [2, 4, 6, [8, 10], 12, [14, 16], 18 ];

// let flatArr = [];

// for (let i = 0; i < arr.length; i++) {
//   flatArr = flatArr.concat(arr[i]);
// }

// console.log(flatArr);

// let arr = [2, 4, 6, 8];

// // arr.length = 2;

// // arr.length = arr.length - 1;

// // arr[arr.length] = 10;

// console.log(arr);

// let arr = ['foo', 'bar', 'qux'];

// arr[0] = 'fu';

// // console.log(arr);

// arr[1] = {fubu : 'clothes'};

// // console.log(arr);

// arr[-1] = 'hello';

// console.log(arr);

// Object.keys(arr);

// let arr = [2, 4, 6, 8];

// console.log(Object.keys(arr));

// flatten an object to a single array

// let obj = {
//   Mexico : 'Mexico City',
//   Thailand : 'Bangkok',
//   Spain : 'Madrid',
//   Belgium : 'Brussels',
//   Canada : 'Ottawa'
// }

// let arr = Object.entries(obj);

// let flatArr = [];

// for (let el of arr) {
//   flatArr = flatArr.concat(el);
// }

// console.log(flatArr);

// let str = 'Back';
// let str2 = 'once again';

// // console.log(str.concat(' ', str2));

// console.log(str2.includes('o', 1));

// let str = '   back once again   ';
// console.log(str.length);
// str = str.trimStart();
// console.log(str.length);

// console.log(str.split('once'));

// str = str.trimStart().trimEnd().substring(0, 1).toUpperCase() + str.trimStart().trimEnd().substring(1);


// let str = 'back once again';
// str = str.charAt(0).toUpperCase() + str.slice(1);

// let str = "back once again I'm the renegade master"

// console.log(str);
// console.log(str.charCodeAt(0));

// console.log(String.fromCharCode(97));

// let letterArr = [];

// let counter = 97;

// while (counter < 120) {
//   letterArr.push(String.fromCharCode(counter));
//   counter ++;
// }
// console.log(letterArr);

// console.log('$'.charCodeAt());

// console.log(str.startsWith('b'));

// console.log(str.endsWith('?'));

// let str = 'xo';
// let str2 = str.repeat(5);
// console.log(str2);

// let arr = [1, 2, 3, 4, 5];

// let index = 0;

// while (index < arr.length) {
//   arr[index] += 1;
//   index ++;
// }
// console.log(arr);

// let num;
// while (true) {
//   num = Math.floor(Math.random() * 10);
//   console.log(num);
//   if (num === 6) {
//     console.log('favorite number');
//     break;
//   }
// }

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// let counter = 0;

// while (counter < alphabet.length) {
//   console.log(alphabet[counter]);
//   counter ++;
// }

// for (let i = 0; i < alphabet.length; i++) {
//   console.log(alphabet[i].toUpperCase());
// }

// let arr = ['hello', 10, undefined];

// for (let el of arr) {
//   console.log(typeof el);
// }

// let obj = {
//   shirt : 'light blue',
//   suit : 'grey',
//   belt : 'brown',
//   shoes : 'brown',
//   socks : 'grey',
//   tie : 'blue and white'
// }

// let objPropsArr = Object.keys(obj);

// for (let i = 0; i < objPropsArr.length; i++) {
//   console.log(obj[objPropsArr[i]]);
// }

// let counter = 0;

// while (counter < objPropsArr.length) {
//   let clothes = objPropsArr[counter];
//   let color = obj[objPropsArr[counter]];

//   console.log(`I'm wearing ${color} ${clothes}`);
//   counter ++;
// }

// for (let key in obj) {
//   console.log(`I'm wearing ${obj[key]} ${key}`)
// }

// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// for (let key in numberOfPets) {
//   console.log(`I have ${numberOfPets[key]} ${key}!`);
// }

let num;

// while (true) {
//   num *= Math.ceil(Math.random() * 10);
//   if (num > 15) {
//     break;
//   }
//   console.log(num);
// }

// do {
//   num = Math.floor(10 * Math.random());
//   console.log(num);
// } while (num !== 5);

// while (true) {
//   let num = Math.floor(10 * Math.random());
//   if (num === 5) {
//     console.log('All done');
//     break;
//   }
//   console.log(num);
// }

// let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

// for (let el of numbers) {
//   if (el % 2 === 1) continue;
//   console.log(Math.pow(el, 2));
// }

// PROBLEM:

// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.

// algorithm:
// take string and split at spaces
// iterate over array on word level
// if word is equal to palindrome reassign it to uppercase
// join and return array at spaces

// function changeMe(str) {
//   let arr = str.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i].split('').reverse().join('')) {
//       arr[i] = arr[i].toUpperCase();
//     }
//   }
//   return arr.join(' ');
// }

// console.log(changeMe("We will meet at noon")) //== "We will meet at NOON"
// console.log(changeMe("No palindromes here")) //= "No palindromes here"
// console.log(changeMe("")) //== ""
// console.log(changeMe("I LOVE my mom and dad equally")) //== "I LOVE my MOM and DAD equally"

// finding all the substrings for a given string
  // example: 'halo' => 'ha', 'hal', 'halo', 'al', 'alo', 'lo'
  // create an empty array
  // iterate over string - while length is > 1
  // with slice, select each subsection incrementing slice,
  // push these to array
  // with slice, reassingn string taking off first element
  // repeat
  // return array

/* for each starting index from 0 through the next to last index position
  for each substring length from 2 until there are no substrings of that length
    extract the substring of the indicated length starting at the indicate index position
  end of inner loop
end of outer loop */
  

/* - create an empty array called `result` that will contain all required substrings
// - create a `startingIndex` variable (value `0`) for the starting index of a substring
// - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//   - create a `numChars` variable (value `2`) for the length of a substring
//   - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//     - extract a substring of length `numChars` from `string` starting at `startingIndex`
//     - append the extracted substring to the `result` array
//     - increment the `numChars` variable by `1`
//   - end the inner loop
//   - increment the `startingIndex` variable by `1`
// - end the outer loop
// - return the `result` array */

// THIS WORKS
    // let string = 'halo';

    // function findSubstrings(str) {
    //   let results = [];
    // 

    //   for (let startingIndex = 0; startingIndex <= str.length - 2; startingIndex ++) {
    //     for (let numChars = 2; numChars <= str.length - startingIndex; numChars ++) {
    //       results.push(str.substring(startingIndex, startingIndex + numChars));
    //     } 
    //   }
    //   return results;
    // }

    // console.log(findSubstrings('halo'));
  

// doesn't work
// function findSubstrings(str) {
  //   let substringArr = [];
  //   let strCopy = str;
  
  //   while (strCopy.length > 1) {
  //     for (let counter = 2; counter < strCopy.length; counter ++) {
  //       substringArr.push(strCopy.slice(0, counter));
  //     }
  //     strCopy = strCopy.slice(1);
  //   }
  //   return substringArr;
  // }

//   let numbers = [1, 3, 9, 11, 1, 4, 1];
// let ones = [];

// for (let counter = 0; counter < numbers.length; counter++) {
//   let currentNum = numbers[counter];

//   if (currentNum === 1) {
//     ones.push(currentNum); // appends currentNum to the ones array
//   }
// }
// console.log(numbers);
// console.log(ones)



// let string = 'halo';

// function findSubstrings(str) {
//   let results = [];
//   // let startingIndex = 0;

//   for (let startingIndex = 0 /*h*/; startingIndex <= str.length - 2;/*l no point in going farther last substring will begin with second to last letter*/ startingIndex ++) { // start at beginning and iterate to second to last. 
//     for (let numChars = 2; numChars <= str.length - startingIndex; /*This will change each time with outer iteration because starting index changes, 4 1st, 3 2nd, 2 3rd This will make it stop  when it equals the substring we want,*/ numChars ++) {
//       console.log(str.substring(startingIndex, startingIndex + numChars));
//       console.log(startingIndex, startingIndex + numChars)
//       console.log(str.length - startingIndex) // remember with substring the second number is excluded, so first iteration here is 0, 2 (2 is 3rd letter 'l' and is excluded, substring is 'ha' on first iteration, second iteration it is 0, 3 so 'hal', third iteration 0, 4 which is 'halo' 4 is beyond the index but that is okay since it is excluded, same number as length property). When this finishes, the outer loop runs and the starting index is incremented to 1. So then it is 1, 3 which is 'al', then 1, 4 which is 'alo'. Outer loop runs and now it's 2, 4 which 'lo'
//     } 
//   }
//   return results;
// }

// console.log(findSubstrings('halo'));

// Set an empty array to push the results to
// Start an outer loop
  // The purpose of the outer loop is to move what the outermost letter of the substring is. So for the word 'halo', the purpose of the outer loop is to start the substring with 'h', then 'a' then 'l'
  // So this just moves the starting point
  // can end this at the second to last character since there isn't any reason to find substrings with the last character - it's only one character
// Start an inner loop
  // The purpose of the inner loop is to find all of the substring combinations, so each time through it will find all the combinations that start with the letter from the outer loop, then it will finish, the outer loop will increment by one, and then it will find all the combinations starting with the new letter
  // The inner loop will do this with slice/substring and push the result to the results array for each one
  // The inner loop will have to change the number of characters that are sliced/substringed since all combinations are wanted. This will increment.
    // It will start with 2 since that is the minimum for a substring, and then it will stop when it is equal to the string.length - the startingIndex from the outer loop
      // This number represents the total length of the substring... you don't want .length alone. With each outer iteration this value will change. It's like saying stop when you get to the limit of the substring.
      // This is needed becasue without it the loop would keep running and would keep pushing duplicate values
  // for the slice/substring: you want to start with the loop value from the outer loop for starting index, that's the first value in the slice. That way when the outerloop runs it will give a new starting value each time
    // The second value in the slice is the same starting value + the number of characters. That way each inner loop will give all the different values for that substring.

// The inner loop starts with the smallest string and then it returns a longer string each time by one character,
// The outer loop then just moves the starting point one place to the right.

// WORKS
  // let string = 'halo';
  // let string2 = 'clock';

  // function findSubstrings(str) {
  //   let results = [];

  //   for (let startingIndex = 0; startingIndex <= str.length - 2; startingIndex ++) {
  //     for (let numChars = 2; numChars <= str.length - startingIndex; numChars ++) {
  //       results.push(str.substring(startingIndex, startingIndex + numChars));
  //     }
  //   }
  //   return results;
  // }

  // console.log(findSubstrings(string2));





// function firstLoop(str) {
//   for (let startingIndex = 0; startingIndex <= str.length - 2; startingIndex++) {
//     console.log(str.substring(startingIndex))
//   }
// }

// firstLoop(string);

// let string1 = 'halo';
// let string2 = 'clock';

// move the starting index one to the right in outer loop
// in inner loop increment the slice by one each time to get every combo

// function allSubstrings(str) {
//   let results = [];

//   for (let startSlice = 0; startSlice <= str.length - 2; startSlice ++) {
//     for (let numChars = 2; numChars <= str.length - startSlice; numChars ++) {
//       results.push(str.slice(startSlice, startSlice + numChars));
//     }
//   }
//   return results;
// }

// console.log(allSubstrings(string1));
// console.log(allSubstrings(string2));

// let string1 = 'halo';
// let string2 = 'clock';

// function allSubstrings(str) {
//   let results = [];

//   for (let startSlice = 0; startSlice <= str.length - 2; startSlice ++) {
//     for (let numChars = 2; numChars <= str.length - startSlice; numChars ++) {
//       results.push(str.slice(startSlice, startSlice + numChars));
//     }
//   }
//   return results;
// }

// using while loops

// let string1 = 'halo';
// let string2 = 'clock';

// function allSubstrings(str) {
//   let results = [];
//   let startingIndex = 0;

//   while (startingIndex <= str.length -2) {
//     let numChars = 2;
//     while (numChars <= str.length - startingIndex) {
//       results.push(str.slice(startingIndex, startingIndex + numChars));
//       numChars ++;
//     }
//     startingIndex ++;
//   }
//   return results;
// }

// function allSubstrings(str) {
//   let results = [];
//   let startingIndex = 0;

//   while (startingIndex <= str.length - 2) {
//     let numChars = 2;
//     while (numChars <= str.length - startingIndex) {
//       results.push(str.slice(startingIndex, startingIndex + numChars));
//       numChars ++;
//     }
//     startingIndex ++;
//   }
//   return results;
// }



// console.log(allSubstrings(string1));
// console.log(allSubstrings(string2));

// flatten a single nested array manually with concat

// let arr = [1, 2, [3, 4], 5, 6, [7, 8]];

// function flattenIt(array) {
//   let flattened = [];

//   for (let i = 0; i < array.length; i ++) {
//     flattened = flattened.concat(array[i]);
//   }
//   return flattened;
// }

// console.log(arr);
// console.log(flattenIt(arr));

// let arr2 = [1, 2, [3, 4, [4.5]], 5, 6, [7, 8]];

// console.log(arr2.flat(2));

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// function combine(arr1, arr2) {
//   let arr3 = Array(...arr1);

//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr3.includes(arr2[i])) {
//       arr3 = arr3.concat(arr2[i]);
//     }
//   }
//   return arr3;
// } 


// console.log(combine(arr1, arr2));

// let arr = [2, 20, 3, 43, 98, 3, 45, 27, 49, 3, 69, 8, 0, 374, 32];

// console.log(arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }))

// console.log(arr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }))

// let string1 = 'halo';
// let string2 = 'clock';

// function allSubstrings(str) {
//   let results = [];

//   for (let startSlice = 0; startSlice <= str.length - 2; startSlice ++) {
//     for (let charNum = 2; charNum <= str.length - startSlice; charNum ++) {
//       results.push(str.slice(startSlice, startSlice + charNum));
//     }
//   }
//   return results;
// }

// function allSubstrings(str) {
//   let results = [];
//   let startSlice = 0;

//   while (startSlice <= str.length - 2) {
//     let numChars = 2;
    
//     while (numChars <= str.length - startSlice) {
//       let endSlice = numChars + startSlice;
//       results.push(str.slice(startSlice, endSlice));
//       numChars ++;
//     }
//     startSlice ++;
//   }
//   return results;
// }

// console.log(allSubstrings(string1));
// console.log(allSubstrings(string2));

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// function palindromeSubstrings(str) {
//   let results = [];

//   let substrings = allSubstrings(str);

//   // for (let i = 0; i < substrings.length; i ++) {
//   //   if(isPalindrome(substrings[i])) {
//   //     results.push(substrings[i]);
//   //   }
//   // }
//   // with for each
//   substrings.forEach(el => {
//     if (isPalindrome(el)) {
//       results.push(el);
//     }
//   })
//   return results;
// }

// write a program that returns all the palindromes of all of the substrings of a string
// case matters

// need to find all of the substrings
// need a function to see if something is a palindrome
// iterate over the substrings, checking to see if it's a palindrome

// function allSubstrings(str) {
//   let results = [];
//   let startSlice = 0;

//   while (startSlice <= str.length - 2) {
//     let numChars = 2;
//     while (numChars <= str.length - startSlice) {
//       let endSlice = startSlice + numChars;
//       results.push(str.slice(startSlice, endSlice));
//       numChars ++;
//     }
//     startSlice ++;
//   }
//   return results;
// }

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// function palindromeSubstrings(str) {
//   let results = [];
//   let substringArr = allSubstrings(str);

//   for (let i = 0; i < substringArr.length; i++) {
//     if (isPalindrome(substringArr[i])) {
//       results.push(substringArr[i]);
//     }
//   }
//   return results;
// }

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
// console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"] case matters
// console.log(palindromeSubstrings("palindrome")); // []
// console.log(palindromeSubstrings(""));           // []

// let fruits = ['apple', 'banana', 'pear'];
// // add 's' to the end of each fruit

// let index = 0;
// while (index < fruits.length) {
//   fruits[index] = fruits[index] + 's';
//   index ++;
// }

// console.log(fruits);

// function selectVowels(str) {
//   let results = [];
//   let vowels = 'aeiouAEIOU';

//   for (let i = 0; i < str.length; i ++) {
//     if (vowels.includes(str[i])) {
//       results.push(str[i]);
//     }
//   }
//   return results.join('');
// }

// console.log(selectVowels('back once again'));
// console.log(selectVowels('The quick brown fox'));

// Let's look at an example with objects. In this example, we want to select the key-value pairs where the value is 'Fruit'.

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };


// // algorithm
// // take the key value pairs from an object and put them in an array
// // set an empty results object, it's returning an object
// // iterate over the array, wherever the value is 'fruit' (index 1 on each iteration)
// // assign that key value pair in that point in the iteration to the new object
// // return new object

// function selectFruit(obj) {
//   keyValArr = Object.entries(obj);
//   let results = {};

//   for (let i = 0; i < keyValArr.length; i++) {
//     if (keyValArr[i][1] === 'Fruit') {
//       results[keyValArr[i][0]] = 'Fruit';
//     }
//   }
//   return results;
// }


// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
// console.log(produce);


// let myNumbers = [1, 4, 3, 7, 2, 6];


// function doubleNumbers(arr) {
//   for (let i = 0; i < arr.length; i ++) {
//    arr[i] = arr[i] * 2;
//   }
//   return arr;
// }


// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);               

// let myNumbers = [1, 4, 3, 7, 2, 6];

// function doubleOddNumbers(arr) {
//   let results = [];
//   for (let i = 0; i < arr.length; i ++) {
//     if (arr[i] % 2 === 1) {
//       results.push(arr[i] * 2);
//     } else {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// console.log(doubleOddNumbers(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// double ones that have odd index

// function doubleOddIndex(arr) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 1) {
//       results.push(arr[i] * 2);
//     } else {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }
// console.log(myNumbers);
// console.log(doubleOddIndex(myNumbers));

// let myNumbers = [1, 4, 3, 7, 2, 6];

// function multiply(arr, num = 1) {
//   let results = [];

//   arr.forEach(el => {
//     return results.push(el * num);
//   })
//   return results;
// }

// console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
// console.log(multiply(myNumbers));
// console.log(multiply(myNumbers, 10));

// let str = 'back once again';

// str.split('').forEach(el => console.log(el));

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// Object.values(produce).forEach(el => console.log(el));

// let nums = [22, 33, 100];

// let [even, odd, hondo] = nums;

// console.log(even);
// console.log(odd);
// console.log(hondo);

// select vegetable and return a new object with filter & for each

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// // let vegetable = Object.entries(produce).filter(el => el[1] === 'Vegetable');

// // let obj = {};

// // fruit.forEach(el => {
// //   let [key, value] = el;
// //   obj[key] = value;
// // })

// let obj = {};
// Object.entries(produce).forEach(el => {
//   let [key, value] = el;
//   if (value === 'Vegetable') {
//     obj[key] = value;
//   }
// })



// // console.log(obj)

// console.log([1, 2, 3].map(num => {
//   num * 2;
// }));


// For instance, suppose we want to select all of the vowels in a string and get a new string that contains all of those vowels
// let str = "What's up, Doc?";

// console.log(str.split('').filter(el => 'aeiou'.includes(el)).join(''));

// console.log(str.split('').map(el => el + el).join(''));




// take a string and find all the substrings that are palindromes

// function to find all the substrings of the string, have these in array
// function to test if they are palindromes
// function to iterate over the substrings array, testing each one if it's a palindrome
// return those that are

// function allSubstrings(str) {
//   let results = [];
//   for (let startSlice = 0; startSlice <= str.length - 2; startSlice ++) {
//     for (let numChars = 2; numChars <= str.length - startSlice; numChars ++) {
//       let endSlice = startSlice + numChars;
//       results.push(str.slice(startSlice, endSlice));
//     }
//   }
//   return results;
// }

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// function palindromeSubstrings(str) {
//   let results = [];
//   let substringArr = allSubstrings(str);

//   for (let i = 0; i < substringArr.length; i++) {
//     if (isPalindrome(substringArr[i])) {
//       results.push(substringArr[i]);
//     }
//   }
//   return results;
// }



// console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
// console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"] case matters
// console.log(palindromeSubstrings("palindrome")); // []
// console.log(palindromeSubstrings(""));           // []


// take a string and find all the substrings that are palindromes

// function to find all the substrings of the string, have these in array
// function to test if they are palindromes
// function to iterate over the substrings array, testing each one if it's a palindrome
// return those that are

// function allSubstrings(str) {
//   let results = [];

//   for (let startIndex = 0; startIndex <= str.length - 2; startIndex ++) {
//     for (let numChars = 2; numChars <= str.length - startIndex; numChars ++) {
//       let endIndex = startIndex + numChars;
//       results.push(str.slice(startIndex, endIndex));
//     }
//   }
//   return results;
// }

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// function palindromeSubstrings(str) {
//   let results = [];
//   let substringArr = allSubstrings(str);

//   substringArr.forEach(el => {
//     if (isPalindrome(el)) {
//       results.push(el);
//     }
//   })
//   return results;
// }

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
// console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"] case matters
// console.log(palindromeSubstrings("palindrome")); // []
// console.log(palindromeSubstrings(""));           // []

// let arr = [1, 3, 5, 7];
// let arr2 = [10, 12, 14];
// let arr3 = [];

// if (arr.every(el => el % 2 === 1)) {
//   arr3 = [...arr].concat(arr2);
// } else {
//   arr3[0] = 'empty';
// }

// console.log(arr);
// console.log(arr2);
// console.log(arr3);


// let animals = { a: 'ant', b: 'bear', c: 'cat' };

// console.log(Object.values(animals).some(el => el === 'cat'));

// let arr = ['cat', 'dog'];

// let [petsIdontLike, petsIlike] = arr;

// console.log(petsIdontLike);

// let arr = ['back', 'once', 'again', 'im', 'the', 'renegade', 'master'];

// console.log(arr.findIndex(el => el.length > 4));

// console.log({'c' : 'foo'} === {'c' : 'foo'});

// let gnr = {
//   vocals: 'Axl',
//   guitar: 'Slash',
//   bass : 'Duff',
//   drums : 'Steven'
// }

// console.log(Object.keys(gnr).includes('guitar'));
// console.log(Object.keys(gnr).includes('keyboard'));
// console.log(gnr.hasOwnProperty('bass'));

// let arr = [2, 4, {'six' : 6}]
// arr[-3] = 5;
// arr['foo'] = 'a';
// console.log(arr);              // [ 2, 4, 6, '-3': 5, foo: 'a' ]
// console.log(arr.length);       // 3
// console.log(Object.keys(arr))  // [ '0', '1', '2', '-3', 'foo' ]
// arr.map(x => x + 1);           // [ 3, 5, 7 ]

// let arr = [1, 2, 3, 4, 5]
// arr.fill(1, 1, 5);

// console.log(arr);

// console.log(['ant', 'bear'].map(elem => {
//   if (elem.length > 3) {
//     return elem;
//   }
// }));

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// PROBLEM: Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:
// EXAMPLES: { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
// DATA STRUCTURES: array, object
// ALGORITM:
  // - set an empty object
  // iterate over the array
  // using the index and value assign that pair to the empty object
  // return empty object

// function makeObj(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i ++) {
//     obj[arr[i]] = i;
//   }
//   return obj;
// }

// let flintstonesObj = makeObj(flintstones);
// console.log(flintstonesObj);

// can also do with forEach

// function makeObj(arr) {
//   let obj = {};

//   arr.forEach((el, indx) => {
//     obj[el] = indx;
//   })
//   return obj;
// }

// let flintstonesObj = makeObj(flintstones);
// console.log(flintstonesObj);

// Add up all of the ages from the Munster family object:

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let total = 0;

// Object.values(ages).forEach(el => total += el);

// console.log(total);

// or with reduce 

// console.log(Object.values(ages).reduce((accum, el) => {
//   return accum += el}, 0));

// console.log(Object.values(ages).reduce((accum, el) => accum += el, 0))

// // Pick out the minimum age from our current Munster family object:

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// with .sort

// let valsArr = Object.values(ages);
// let sortedArr = valsArr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(sortedArr[0]);

// console.log(Object.values(ages).sort((a, b) => a - b)[0])

// let valsArr = Object.values(ages);
// console.log(Math.min(...valsArr));

// PROBLEM: Create an object that expresses the frequency with which each letter occurs in this string:
// EXAMPLES: given
// DATA STRUCTURES: string, possibly array, object
// ALGORITM
  // Take string and split it at the letter level
  // create empty object
  // iterate over array
  // check to see if the letter exists in the object
  // if not add it
  // need a counter variable for letters to be incremented when they get passed in to object

// let statement = "The Flintstones Rock";

// let arr = statement.replace(/[' ']/g, '').split('');
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]] += 1;
//   }
// }


// console.log(obj);
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }


// another way to maybe do it is to set up an array for each group of letters and access the length property and assign that way

// let cat = 'Butterscotch';

// console.log(cat.indexOf('o'));

// let dog = 'fido'
// dog[0] = 'F';
// console.log(dog);

// let arr = ['This', 'is', 'a', 'string'];

// console.log(arr[3.14]);

