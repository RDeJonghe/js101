// Practice space for JS101 exercises

// use regEx to replace all non alphanumeric characters, leave spaces
// let str = 'back #$% 1nce A$g*i)n'
// str = str.replace(/[^a-zA-Z0-9' ']/g, '');
// console.log(str);

// use .includes to check if its an alphabet character
// let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
// let str = 'Back 1nce Again';

// function alphaCheck(str) {
//   let strArr = str.split('')
//   for (let i = 0; i < strArr.length; i++) {
//     if (!alpha.includes(strArr[i])) {
//     console.log(strArr[i] + ' doesnt include')
//     } if (alpha.includes(strArr[i])) {
//       console.log(str[i] + ' does include')
//     }
//     }
//   }

// alphaCheck(str);


// let num = 6;

// function add1(num) {
//   return num + 1;
// }
// const ADD2 = function(num) {
//   return num + 2;
// }
// const ADD3 = (num) => {
//   return num + 3;
// }
// const ADD4 = () => {
//   return num + 10;
// }
// console.log(add1(num));
// console.log(ADD2(num));
// console.log(ADD3(num));
// console.log(ADD4(num));

// let str = 'b@ck !nce Aga+n';

// let cleanStr = str.replace(/[^a-zA-z' ']/g, '');

// let str = 'a*b*c*d*E*F*G*H'
// let cleanStr = str.replace(/[a-zA-z]/g, '$');

// let str = 'b@cK 1nc3 A%@in';
// let cleanStr = str.replace(/[^A-Za-z0-9' ']/g, '$');
// console.log(str);
// console.log(cleanStr);

// let alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789';

// let code = '736j$hkelwk38hken';


// for (let i = 0; i < code.length; i++) {
//   if (alphaNum.includes(code[i])) {
//     console.log('yes');
//   }
//   if (!alphaNum.includes(code[i])) {
//     console.log(code.indexOf(code[i]));
//   }
// }

// console.log(Math.floor(100.7));
// console.log(Math.floor(100.1));
// console.log(Math.floor(100.5));
// console.log(Math.floor(100.9));

// let arr = [2, 4, 6, 8];
// let arr2 = [2, 3, 5, 6];

// function combine(arr, arr2) {
//   let result = [];

//   for (let i = 0; i < arr.length; i ++) {
//     if (arr2.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(combine(arr, arr2))

// let num = 5;
// console.log(-Math.abs(num));

// let str = 'b@ck 1nc% a9aiN';
// let newStr = str.replace(/[^a-zA-z0-9' ']/g, '<>');
// console.log(newStr);

// let str = 'back 1nce again';

// console.log(str.includes('1'));

// let arr = [3, 4, 5, 6];

// console.log(arr.includes(7));

// let num = 100.7;
// console.log(Math.floor(num));

// let num = 100;
// console.log(typeof num);

// let str = 'back once again';
// console.log(str.indexOf('o'));

// toFixed() returns a string.
// parseInt() returns a number
// parseFloat() returns a number

// let num = 489.837273;
// num = Number(num.toFixed(3));
// console.log(num, typeof num);

// let strNum = '123.457267';
// let strNum2 = String(parseInt(strNum));
// let strNum3 = parseFloat(strNum).toFixed(2);
// console.log(strNum2, typeof strNum2);
// console.log(strNum3, typeof strNum3);

// let num = 1234412.3445;
// console.log(num.toFixed(2));

// function add(num) {
//   return num + 1;
// }
// const ADD = function(num) {
//   return num + 1;
// }
// const Add = (num) => {
//   return num + 1;
// }

// let num = -34.567;
// console.log(Math.abs(num));
// let num = 324.54;
// console.log(-Math.abs(num));

// let error = 'WhaT is The error?';
// console.log(error.replace(/[T]/g, 't').replace(/[r]/g, 'R'));

// let nums = [2, 11, 9, 4, 107, 21, 1];

// nums.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0
//   }
// });

// console.log(nums);

// [1, 2, 4, 9, 11, 21, 107]


// let words = ['arc', 'bat', 'cape', 'ants', 'cap'];

// words.sort(function(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(words);
// [ 'ants', 'arc', 'bat', 'cap', 'cape' ]

// let words = ['go', 'ahead', 'and', 'jump'];

// words.sort(function(a, b) {
//   if (a.length < b.length) {
//     return -1;
//   } else if (a.length > b.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(words);

// let scores = [[2, 2, 2], [20, 20, 20], [1, 2, 2]];

// scores.sort(function(a, b) {
//   let totalA = a.reduce((accum, el) => {return accum * el}, 1);
//   let totalB = b.reduce((accum, el) => {return accum * el}, 1);

//   if (totalA < totalB) {
//     return -1;
//   } else if (totalB > totalA) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(scores);

// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

// scores.sort(function(a, b) {
//   let aScore = a.reduce((accum, el) => accum + el);
//   let bScore = b.reduce((accum, el) => accum + el);

//   if (aScore < bScore) {
//     return -1;
//   } else if (aScore > bScore) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(scores);
// [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];

// let nums = [34, 2, 93, 172, 45, 12, 77, 827, 5, 938, 8, 34, 76];

// nums.sort((a, b) => a - b);

// nums.sort();

// nums.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(nums);
// console.log(typeof nums[0]);

// let words = ['back', 'once', 'again', 'im', 'the', 'renegade', 'master'];

// let reverseSort = words.slice().sort(function(a, b) {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });



// console.log(words);
// console.log(reverseSort);

// let numbers = [4, 2, 5, 1, 3];
// let ordered = numbers.slice().sort((a, b) => a - b);
// console.log(numbers);
// console.log(ordered);


// let words = ['back', 'once', 'again', 'im', 'the', 'renegade', 'master'];

// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].replace(/[a]/g, 'A');
// }

// console.log(words);

// let newArr = [];

// for (let i = 0; i < words.length; i++) {
//   if (words[i].includes('r')) {
//     newArr.push(words[i]);
//   }
// }

// console.log(newArr);

// let letters = 'abcdefghijklmnopqrstuvwxyz';
// let password = 'thegreat1gretzky';

// for (let i = 0; i < password.length; i++) {
//   let passArr = password.split('');
//   if (!letters.includes(passArr[i])) {
//     console.log('Does not include', passArr[i])
//   }
// }

// let numbers = [41, 21, 5, 1, 3];

// numbers.sort((a, b) => a - b);

// console.log(numbers);

// let letters = ['r', 'f', 's', 'q', 'l', 'b', 'd', 'e', 's'];

// letters.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// letters.sort().reverse();

// console.log(letters);

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i -= 1) {
//   console.log(i);
// }
// console.log('Launch!');

// let greeting = 'Aloha!';

// let counter = 1;

// while (counter <=3) {
//   console.log(greeting);
//   counter ++;
// }

// for (let i = 1; i <= 100; i ++) {
//   console.log(i * 2);
// }

// let array = [1, 2, 3, 4];
// let index = 0;

// while (index < array.length) {
//   console.log(array[index]);
//   index ++;
// }

// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] === null) {
//     continue;
//   } else {
//     console.log(cities[i]);
//   }
// }

// for (let i = 0; i < 1 ; i += 1) {
//   console.log("and on");
// }

// let counter = 1;

// while (counter < 40) {
//   console.log(counter);
//   counter += 2;
// }

// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// for (let el of fish) {
//   console.log(el);
//   if (el === 'Nemo') {
//     break;
//   }
// }

// let counter = 0;

// do {
//   console.log('Woooot!');
//   counter -= 1;
// } while (counter > 0);

// let randomNumber = Math.round(Math.random());

// if (randomNumber === 1) {
//   console.log(randomNumber, 'Yes!');
// } else {
//   console.log(randomNumber, 'No!');
// }

// (randomNumber === 0) ? console.log(randomNumber, 'Yes!') : console.log(randomNumber, 'No!');

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(20, 2));

// function quote(str) {
//   console.log(str);
// }
// quote('Always bet on javascript');

// function square(num) {
//   return Math.pow(num, 2);
// }

// console.log(square(3));
// console.log(square(4));

// Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

// function compareByLength(str1, str2) {
//   if (str1.length > str2.length) {
//     return 1;
//   } else if (str1.length < str2.length) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// console.log(compareByLength('patience', 'perseverance')); // -1
// console.log(compareByLength('strength', 'dignity'));      //  1
// console.log(compareByLength('humor', 'grace'));           //  0

// let str = 'Captain Ruby';
// // str = str.replace('Ruby', 'Javascript');

// // str = str.substring(0, str.indexOf('R')) + 'Javascript';

// str = str.split(' ')[0] + ' Javascript';

// console.log(str);

// function repeat(num, str) {
//   let counter = 1;
//   let arr = [];
//   while (counter <= num) {
//     arr.push(str);
//     counter +=1;
//   }
//   let repeated = arr.join('');
//   return repeated;
// }

// function repeat(num, str) {
//   let repeated = '';
//   let counter = 1;

//   while (counter <= num) {
//     repeated += str;
//     counter += 1;
//   }
//   return repeated;
// }

// console.log(repeat(4, 'ha')); // 'hahaha'

// let str = 'A pirate I was meant to be!\nTrim the sails and roam the sea!';
// console.log(str);

// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';

// console.log(string1.toLowerCase() === string2.toLowerCase());

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// console.log(byteSequence.includes('x'));

// function isBlank(str) {
//   if (str === '') {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isBlank(str) {
//   return str.length === 0;
// }
// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // false
// console.log(isBlank(''));     // true

// function isBlank(str) {
//   return str.trim().length === 0;
// }


// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // true
// console.log(isBlank(''));     // true

// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

// let str = 'launch school tech & talk';

// function capIt(str) {
//   let strArr = str.split('');
//   for (let i = 0; i < strArr.length; i++) {
//   if (i === 0) {
//     strArr[0] = strArr[0].toUpperCase();
//   } else if (strArr[i] === ' ') {
//     strArr[i + 1] = strArr[i + 1].toUpperCase();
//   }
//   }
//   return strArr.join('');
// }

// function capIt(str) {
//   let strArr = str.split(' ');
//   let results = [];

//   for (let i = 0; i < strArr.length; i++) {
//     let word = strArr[i];
//     results.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return results;
// }



// console.log(capIt(str));

// function first(arr) {
//   let message = 'array is empty';
//   if (arr.length === 0) {
//     return message;
//   } else {
//     return arr[0];
//   }
// }

// console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
// console.log(first([]));

// function last(arr) {
//   return arr[arr.length - 1];
// }

// console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'

// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

// energy.shift();
// energy.push('geothermal');

// energy = energy.slice(1);
// energy.splice(0, 1, 'yo', 'what up');
// console.log(energy);

// let str = 'Back 1nce Again I\'m the Renegade Master';

// let upper = str.match(/[A-Z]/g)?.length || 0;
// let lower = str.match(/[a-z]/g)?.length || 0;
// let other = str.match(/[^a-z]/gi)?.length || 0;

// let count = {upper, lower, other};
// console.log(count);

// let nums = [1, 32, 4, 21, 47, 3, 4, 9, 687, 98, 1223, 45, 764, 736, 837];

// const  COMPARE_REVERSE = (a, b) => b - a;


// nums.sort(COMPARE_REVERSE);
// console.log(nums);

// let sorted = nums.slice().sort((a, b) => b - a);
// let sorted = [...nums].sort((a, b) => b - a);

// console.log(nums);
// console.log(sorted);

// nums.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// nums.sort((a, b) => a - b);

// nums.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// nums.sort((a, b) => b - a);

// console.log(nums);

// let track = ['back', 'once', 'again', 'im', 'the', 'renegade', 'master', 'd', 'for', 'damager', 'power', 'to', 'the', 'people', 'back', 'once', 'again', 'with', 'the', 'ill', 'behavior' ];

// track.sort();

// track.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   } else {
//     return 0
//   }
// })

// track.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else return 0;
// }
// )

// track.sort().reverse();

// console.log(track);


// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];

// items.sort((a, b) => {
//   if (a.value < b.value) {
//     return -1;
//   } else if (a.value > b.value) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// items.sort((a, b) => {
//   if (a.name > b.name) {
//     return -1;
//   } else if (a.name < b.name) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(items);

// let str = 'B@ck 1nce @g@!n';

// str = str.replace(/[^a-z' ']/gi, '');

// console.log(str);
// let alphaNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

// let letterNums = '34ujey*62Bw{83jk';

// for (let i = 0; i < letterNums.length; i++) {
//   if (!alphaNum.includes(letterNums[i])) {
//     console.log(letterNums[i]);
//   }
// }

// let arr = ['D', '4', 'damager', 'power', 'to', 'the', 'people'];

// console.log(arr.includes('power'));

// let str = 'yomtvraps';

// console.log(str.includes('m'));

// let num = 12.9778765;
// let floored = Math.floor(num);

// console.log(floored);
// console.log(typeof floored);

// num = Number(num.toFixed(2));
// console.log(num);
// console.log(typeof num);

// console.log(2.35.toFixed(1));
// console.log(2.55.toFixed(1));

// toFixed() converts to a string. To fixed will round, but rounding with decimals may not always be accurate because decimals cannot always be represented accurately with floating point numbers.

// let num = '5.432';
// console.log(parseFloat(num).toFixed(2));

// let num = '32.45672';
// console.log(parseFloat(num).toFixed(3));

// let arr1 = [33, [23, 45]];
// let arr2 = [47, 39];
// let arr4 = [384, 327];

// arr3 = arr2.concat(arr1, arr4);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// let arr = ['back'];

// let str = 'hello';

// for (let i = 1; i <= str.length; i++) {
//   arr = arr.concat(str.slice(0, i));
//   // arr.push(str.slice(0, i));
//   console.log(arr);
// }

// let str = 'back once again';
// let arr = ['Im', 'the', 'renegade', 'master'];

// console.log(str.indexOf('hello'));
// console.log(arr.indexOf('Im'));

// let string = 'madam';
// let string2 = 'mister';

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('')
// }

// console.log(isPalindrome(string));
// console.log(isPalindrome(string2));

// let str = "These aren't the droids you're looking for.";
// console.log(str.length);

// function repeat(str) {
//   console.log(str.repeat(3));
// }
// repeat('ha');

// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';

// console.log(string1.toLowerCase() === string2.toLowerCase());

// function isBlank(str) {
//   return str.length === 0;
// }

// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // false
// console.log(isBlank(''));     // true


// let str = 'back once again';
// let arr = Array.from(str);
// console.log(arr);

// let nums = [2, 4, 6];

// let doubled = Array.from(nums, el => el * 2);
// console.log(nums);
// console.log(doubled);

// let str = 'back once again';
// let arr = Array.from(str, el => el.toUpperCase());

// console.log(arr);

let scores = [96, 47, 113, 89, 100, 102];

// let counter = 0;
// for (let el of scores) {
//   if (el >= 100) {
//     counter ++;
//   }
// }
// console.log(counter);

// function highScore(arr) {
//   return arr.filter(el => el >= 100).length;
// }

// // console.log(highScore);

// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// function print(arr) {
//   arr.forEach(row => {
//     row.forEach(word => console.log(word));
//   })
// }

// const print = (arr) => {
//   for (let row of arr) {
//     for (let word of row) {
//       console.log(word);
//     }
//   }
// }

// const print = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }
// }
// print(vocabulary);



// Expected output:
// happy
// cheerful
// merry
// etc...


// let array1 = [2, 6, 4];
// let array2 = [2, 6, 4];

// console.log(array1 === array2);

// let str = 'back once again';
// let arr = ['back', 'once', 'again'];

// console.log(Array.isArray(str));
// console.log(Array.isArray(arr));

// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];

// // function contains(city, arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (city === arr[i]) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }

// function contains(city, arr) {
//   return arr.indexOf(city) >= 0;
// }

// console.log(contains('Barcelona', destinations)); // true
// console.log(contains('Nashville', destinations)); // false


// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// passcode = passcode.join('-');
// console.log(passcode);

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];


// while (groceryList.length > 0) {
//   console.log(groceryList[0]);
//   groceryList.shift();
// } 

// console.log(groceryList);

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

// groceryList; // []

// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

// console.log(student['courses']);
// console.log(student.courses);

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };

// console.log(jane.location.country);
// console.log(jane['location']['country']);

// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// fido.age = 10;
// fido['favorite food'] = 'treatsies';
// // Add property 'age'.
// // Add property 'favorite food'.
// console.log(fido);
// console.log(fido['favorite food']);


// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet: function (name) {
//     console.log('Hej, ' + name);
//   }
// };



// // console.log(jane);
// (jane.greet('Bobby')); // Hej, Bobby!

// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // ?
// console.log(prefix);

// let ocean = {};
// let prefix = 'Indian';

// ocean[prefix] = 'Pacific';

// console.log(ocean); // ?
// console.log(prefix);

// let obj = {
//   num: 42,
//   'property name': 'string value',
//   true: false,
//   fun: function() {
//     console.log('Harr Harr!');
//   },
// };

// for (let prop in obj) {
//   if (prop === 'true') {
//     console.log("It's true!");
//   }
// }

// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// // let keys = Object.keys(vehicle);
// // console.log(keys);

// let keys = [];
// for (let k in vehicle) {
//   keys.unshift(k);
// }
// console.log(keys);

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let nestedPerson = Object.entries(person);
// console.log(nestedPerson);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// let obj = {};

// for (let i = 0; i < nestedArray.length; i++) {
//   obj[nestedArray[i][0]] = nestedArray[i][1];
// }
// console.log(obj);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// let obj = Object.fromEntries(nestedArray);
// console.log(obj);

// let arr = [['back', 'once'], ['again', 'im']];
// let obj = Object.fromEntries(arr);
// console.log(obj);


// Write a function clone that takes an object as argument and returns a shallow copy of that argument. Shallow copy means that it returns a new object that has the same key/value pairs, but that you don't need to worry about cloning the values as well. The code below demonstrates the expected behaviour.


// function clone(obj) {
//   return Object.assign({}, obj);
// }

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// // let clonedPerson = clone(person);
// // person.age = 34;
// // clonedPerson.color = 'blue';

// // console.log(person.age);       // 34
// // console.log(clonedPerson.age); // 33
// // console.log(clonedPerson.color);
// // console.log(person.color);

// let person2 = {...person};
// // console.log(person2);
// person2.age = 44;
// console.log(person.age);
// console.log(person2.age);

// replace all duplicate spaces

// let str = 'back    once    again   ';
// str = str.replace(/\s+/g, ' ');
// console.log(str);
// console.log(str.endsWith(' '));

// let avg = 80;

// switch (true) {
//   case avg >= 90 :
//     return console.log('A');
//   case avg >= 80 :
//     return console.log('B');
//   case avg >= 70 :
//   return console.log('C');
// }

// let string = 'back once again';
// const VOWELS = 'aeiou';

// let strArr = Array.from(string, el => {
  
//     return el.toUpperCase();
// })

// let strArr = Array.from(string, char => {
//   if (VOWELS.includes(char)) {
//     return char.toUpperCase();
//   } else {
//     return char;
//   }
// })

// console.log(strArr);

// let nums = 123456;

// let doubled = Array.from(String(nums), digit => digit * 2);
// console.log(doubled);

// let arr = [['lt', 21], ['rivers', 17], ['seau', 55], ['jackson', 83]];

// console.log(arr.flat().some(playerInfo => playerInfo === 'lt'));

// let chargersObj = Object.fromEntries(arr);
// // console.log(chargersObj);

// let duplicate = Object.assign({}, chargersObj);
// duplicate['sproles'] = 32;

// let billsObj = {'allen' : 17, 'diggs' : 80};

// Object.assign(chargersObj, billsObj);

// // console.log(duplicate);
// // console.log(chargersObj);
// // console.log(billsObj);

// let all = Object.assign(billsObj, duplicate, chargersObj);
// console.log(all);

// create a shallow copy of an array with Object.assign

// let obj = {'rent' : 525, 'electricity' : 20};

// let duplicate = Object.assign({}, obj);
// console.log(duplicate);
// duplicate['gas'] = 60;
// console.log(duplicate);
// console.log(obj);

// let grade = 50;

// function letterGrade(num) {

// switch (true) {
//   case grade >= 90 :
//     return 'A';
//   case grade >= 80 :
//     return 'B';
//   case grade >= 70 :
//     return 'C';
//   case grade >= 60 :
//     return 'D';
//   default :
//     return 'F';
// }
// }

// console.log(letterGrade(grade));

// let bike = 'yz';

// function manufacturer(moto) {
//   switch (moto) {
//     case 'kx' :
//       return 'kawasaki';
//     case 'rm' :
//       return 'suzuki';
//     case 'cr' :
//       return 'honda';
//     case 'yz' :
//       return 'yamaha';
//     default :
//       return 'unknown';
//   }
// }

// console.log(manufacturer(bike));

// let arr = [2, 4, 6, 8, 10, 12, 456];

// console.log(arr.some(el => el > 20));

// let arr = ['back', 'once', 'again', 'im', 'the', 'renegade', 'master'];

// console.log(arr.some(word => word.length >= 8))

// let currentYear = new Date().getFullYear();

// let currentYear = new Date().getFullYear();

// let currentDay = new Date().getDay();

// console.log(currentYear);
// console.log(currentDay);

// let str = 'back once again';
// let arr = Array.from(str);
// console.log(arr);

// let str = '1234';
// // console.log(Array.from(str));

// let arr = [['two', 2], ['three', 3]];
// console.log(Object.fromEntries(arr));

// let obj = {five : 5};
// let duplicate = Object.assign({}, obj);
// console.log(duplicate);
// duplicate['six'] = 6;
// console.log(duplicate);
// console.log(obj);

// let grade = 77;

// switch (true) {
//   case grade >= 90 :
//     return console.log('A');
//   case grade < 90 :
//     return console.log('Not an A');
// }

// let arr = [2, 5, 7];
// let newArr = Array.from(arr, el => el * 2);
// let newerArr = arr.map( el => el * 3);
// console.log(arr);
// console.log(newArr);
// console.log(newerArr);

// let arr = [6, 'word', undefined, 3];

// console.log(arr.some(el => el === undefined));
// console.log(arr.some(el => el > 6));

// let arr = [2, 4, 6, 8, true];

// console.log(arr.some(el => typeof el === 'boolean'));

// let str = 'back once again';

// let strArr = Array.from((str));

// let nums = [2, 4, 6];

// console.log(Array.from(nums, el => el * 2));

// console.log(strArr);

let str = 'back once again?';
let regex = /\?/;

let regexData = (str.match(regex));

console.log(regexData);