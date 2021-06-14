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

// let scores = [96, 47, 113, 89, 100, 102];

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

// let str = 'back once again?';
// let regex = /\?/;

// let regexData = (str.match(regex));

// console.log(regexData);

// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// function age() {
//   let ranNum = Math.floor(Math.random() * 100) + 20;

//   console.log(ranNum);
// }

// age();

// let READLINE = require('readline-sync');

// let num1 = READLINE.question('number 1: ');
// let num2 = READLINE.question('number 2: ');
// let num3 = READLINE.question('number 3: ');

// let numArr = [num1, num2];

// if (numArr.includes(num3)) {
//   console.log('it includes ' + num3);
// } else {
//   console.log('not included');
// }

// let arr = [2, 3, [4, 5], [3, [10, 12, [30, 40]]]];

// console.log(arr.flat(3));

// let arr = [1, 2, [3, 4], 5];

// let flatArr = arr.reduce((accum, el) => {
//   return accum.concat(el)
// }, []);

// console.log(arr);
// console.log(flatArr);


// let str = 'back once again';

// console.log(str.slice(-5, -1));

// console.log(str.slice(str.indexOf('o'), -5))

// function revStr(str) {
//   let arr = [];
//   for (let i = str.length; i >= 0; i --) {
//     arr.push(str.slice(i, -1));
//   }
//   return arr.join('');
// }

// console.log(revStr(str));

// let str = 'Back once again';

// console.log(str.slice(-7, -3));

// let password = 'heHie763*jd$kD';
// let specialChars = '!@#$%^&*()';
// let regex = /[^a-z0-9]/gi;

// for (let i = 0; i < password.length; i++) {
//   if (specialChars.includes(password[i])) {
//     console.log(password[i]);
//   }
// }

// let num = '456.75';
// console.log(parseInt(num, 10));

// let num = 4532.65677;
// console.log(Number(num.toFixed(3)));

// let num1 = 10;
// let num2 = 5;

// function add(num1, num2) {
//   return num1 + num2
// }
// const sub = (num1, num2) => {
//   return num1 - num2;
// };

// const mult = function(num1, num2) {
//   return num1 * num2;
// }

// console.log(add(2, 2), sub(5, 5), mult(6, 4),)

// let neg = -10;
// let mult = 2;

// console.log(neg * mult);
// console.log(Math.abs(neg * mult));

// let num = 2;
// if (num) {
//   console.log("valid number");
// } else {
//   console.log("error!");
// }
// let num = '12.34.56';
// let num2 = '12.99hello'
// console.log(parseInt(num2));
// console.log(Number(num2))

// let num2 = 73.88
// let num = '35.68';
// let rounded = Number(parseFloat(num).toFixed(1));

// console.log(rounded);

// let arr = [1, 2, 3];
// console.log(arr.toString());

// let num = 43;
// let num2 = num.toString();
// console.log(num2)
// let num3 = String(num);
// console.log(num3);

// let a = 1;           // first level variable

// function foo() {     // second level
//   let b = 2;

//   function bar() {   // third level
//     let c = 3;
//     console.log(a);  // => 1
//     console.log(b);  // => 2
//     console.log(c);  // => 3
//   }

//   bar();

//   console.log(a);    // => 1
//   console.log(b);    // => 2
//   console.log(c);    // => ReferenceError
// }

// foo();

// let myName = "naveed";
// function cap(name) {
//   myame = name.toUpperCase();
// }


// cap(myName);
// console.log(myName); // => 'naveed'

// let city = 'Detroit';

// function changeCity(cityName) {
//   city = cityName;
// }

// changeCity('Cleveland');
// console.log(city);

// let myName = 'habibi';

// function capName(name) {
//   myName = name.toUpperCase();
// }

// capName(myName);
// console.log(myName);

// function cap(name) {
//   name.toUpperCase();
// }

// let myName = "naveed";
// cap(myName);
// console.log(myName); // => 'naveed'

// let name = 'habibi';

// name.toUpperCase();
// console.log(name);

// const MESSAGES = require('./filename.json');
// const MESSAGES = require('./filename.json');
// const MESSAGES = require('./filename.json');
// const READLINE = require('readline-sync');
// const MESSAGES = require('./filename.json');
// const READLINE = require('readline-sync');
// const MESSAGES = require('./filename.json');


// console.log(typeof true);

// let num = 6;
// let str = 'six';
// let str2 = '6'

// console.log(num == str);
// console.log(num == str2);

// let total = num + str;
// console.log(total);
// console.log(typeof total);

// const READLINE = require('readline-sync');

// let num = READLINE.question('enter a num');

// console.log(typeof num);

// let str = 'abc';
// str.padEnd(10);
// console.log(str);
// console.log(str.length)
// str = str.padEnd('10');
// console.log(str.length);
// console.log(undefined.length);

// console.log(parseInt('+12.7'));
// console.log(parseInt('-12.7'));
// console.log(Number('-12'))

// let num1 = '+12';
// let num2 = '-12';

// console.log(Number(num1));
// console.log(Number(num2));
// console.log(parseInt(num1));
// console.log(parseInt(num2))

// console.log(Number(null));\

// function logElements(array) {
//   array.forEach(function(element) {
//     console.log(element);
//   });
// }

// logElements([1, 2, 3]);

// let name = 'joe';

// function changeName(word) {
//   return word = 'jim';
// }

// console.log(changeName(name));
// console.log(name);

// let name = 'joe';

// function changeName(newName) {
//   return name = newName;
// }

// changeName('jim');
// console.log(name);

// let str = 'hello';

// function upper(word) {
//   return str = word.toUpperCase();
// }

// console.log(upper(str));
// console.log(str);

// let nums = [2, 4, 6];
// let newNums = [8, 10];

// function combine(arr1, arr2) {
//   arr1.push(arr2);
//   console.log('arr here', arr1)
//   return arr1;
// }

// function takeOffLast(arr) {
//   debugger;
//   arr.pop();
//   return arr;
// }

// // console.log(combine(nums, newNums));
// // console.log(nums);
// console.log(takeOffLast(combine(nums, newNums)));
// console.log(nums);

// console.log(takeOffLast(nums))
// console.log(nums)

// let nums = [2, 4, 6];

// function popIt(arr) {
//   arr.pop();
// }

// popIt(nums);
// console.log(nums)
;
// let newerNums = (combine(nums, newNums));

// console.log(newerNums);


// combine(nums, newNums)


// console.log(nums);

// nums = nums.concat(newNums);
// console.log(nums);




/* Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

Here are some examples for your reference: */

/* let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 } */

// PROBLEM: given
  // input - object and optional array of key words)
  // output a new array that is not mutated
// EXAMPLES: given
// DATA STRUCTURES: object, array
// ALGORITHM:
  // create a function that takes two arguments, an object and an optional array of keys
  // create a newObj that is an empty object
  // create an array of the object entries
  // 
  // check to see if an array is passed as argument
    // if not, iterate over object.entries and assign to the new variable each subarray [0] is key [1] is value
  // if the array is passed
    // assign to the object the keywords passed
      // iterate over the passed array
      // use this as a keyword to get to the value of the passed object
      // use assignemnt to send this to newObj
  // return new obj


// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };


// function copyObj(obj, arr) {
//   let copied = {};
//   let keyValuePairs = Object.entries(obj);
  
//   if (!arr) {
//     keyValuePairs.forEach((pair) => {
//       copied[pair[0]] = pair[1];
//     })
//   } else {
//     arr.forEach(key => {
//       copied[key] = obj[key];
//     })
//   }
//   return copied;
// }


// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 } */

// // console.log(objToCopy);


// 25
// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

// algorithm
//create a function that takes an array as an argument
// set a results array that is empty
// set a total variable equal to zero
// iterate over passed array, on each iteration push to the results the total that is += to current value

// const runningTotal = (arr) => {
//   let result = [];
//   let total = 0;

//   arr.forEach(num => {
//     total += num;
//     result.push(total);
//   })
//   return result;
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // [] 

/* Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters. */

// PROBLEM
  // punctuation is counted in the length of the word
  // empty string return empty array, can handle
// EXAMPLES : given
// DATA STRUCTURES: string, object, array (to split)
// ALGORITHM:
  // create an object that takes a string as an argument
  // creaate an empty results object
  // handle empty string edge case, return empty object
  // create a words array, split at the space
  // iterate over the array
  // on each iteration
    // check to see if the length prop of word exists as a key in the object
      // if not create it and set it equal to one (value)
    // if it does exist += 1 the value
  // return the object

// function wordSizes(str) {
//   let result = {};
//   let wordArray = str.split(' ');

//   if (str === '') return result;

//   wordArray.forEach(word => {
//     if (!result[word.length]) {
//       result[word.length] = 1;
//     } else {
//       result[word.length] += 1;
//     }
//   })
//   return result;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {} 

// 30
/* // Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays. */

// mutate original arrays, should it be sorted?
// algorithm
// create a function that takes two arrays as arguments
// create an empty results array,
// set this equal to the concatenation of the two passed arrays, put all values in one
// map this to a new array
  // check if the value does not exist in the results (on each iteration) if it doesn't exist send it
// return


// const union = function(arr1, arr2) {
//   let joined = arr1.concat(arr2).sort((a, b) => a - b);
//   let result = [];

//   joined.map(num => {
//     if (!result.includes(num)) {
//       result.push(num);
//     }
//   })
//   return result;
// }

//  console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// let a = 2;
// let b = Math.floor(Math.random() * 2);
// a *= b;
// debugger;

// if (a = 2) {
//   console.log('The value of `a` is two.');
// } else {
//   console.log('The value of `a` is NOT two.');
// }

// 123 <= 'a';
// debugger;


// function foo1(a) {
//   return 2 * a;
// }

// let foo2 = function(a) {
//   return 2 * a;
// };

// const foo3 = a => 2 * a;

// // create a random integer between 0 and 9
// let randomNumber = Math.floor(10 * Math.random());

// console.log(foo1(randomNumber));
// console.log(foo2(randomNumber));
// console.log(foo3(randomNumber));

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// console.log(numbers)  // what will this line return?

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty('Herman'));


// let munstersDescription = "the Munsters are CREEPY and Spooky.";

// function changeCase(str) {
//   return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }

// let changed = changeCase(munstersDescription);
// console.log(changed);
// console.log(munstersDescription);
// => The munsters are creepy and spooky.

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges);

// console.log(ages);

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.match('Dino') !== null)
// console.log(str2.match('Dino') !== null)


// flintstones.unshift('Dino');
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones = flintstones.concat(["Dino"]);
// console.log(flintstones);

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino", "Hoppy");
// console.log(flintstones);


// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// let advice2 = advice.slice(0, advice.indexOf('house'));

// console.log(advice);
// console.log(advice2);

// Expected return value:
// => 'Few things in life are as important as '

// let advice = "Few things in life are as important as house training your important pet dinosaur.";

// advice = advice.replace('important', 'urgent');

// console.log(advice);


// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.



// let numbers = [1, 2, 3, 4, 5];
// // numbers.reverse();

// // let reversed = numbers.slice().reverse();

// let reversed = [numbers[4], numbers[3], numbers[2], numbers[1], numbers[0]];
// console.log(reversed);
// console.log(numbers);



// numbers = [1, 2, 3, 4, 5];

// // let reversed = [].concat(numbers).sort((a, b) => b - a);
// // console.log(numbers); 
// // console.log(reversed);

// let reversed = [...numbers].sort((a, b) => b - a)

// console.log(numbers);
// console.log(reversed);

// let reversed = [];

// numbers.forEach(num => reversed.unshift(num));

// console.log(numbers);
// console.log(reversed);

// Given a number and an array, determine whether the number is included in the array.

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// // console.log(numbers.includes(number2))
// // console.log(numbers.includes(number1))
// console.log(numbers.indexOf(number1) > -1)
// console.log(numbers.indexOf(number2) > -1)

// let famousWords = "seven years ago...";

// console.log('Four score and '.concat(famousWords));
// console.log('Four score and ' + famousWords);

// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5]

// let nums = [1, 2, 3, 4, 5];

// nums.splice(1, 1);

// console.log(nums);

// let arr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// arr2 = [].concat(arr);

// arr[2][0] = 'BOB';

// console.log(arr)
// console.log(arr2)

// arr2 = arr.flat();

// console.log(arr2)

// let arr3 = [];

// arr.forEach(el => {
//   arr3 = arr3.concat(el);
// })

// console.log(arr3)

// let arr4 = arr.reduce((accum, el) => {
//   return accum = accum.concat(el);
// }, [])

// console.log(arr);
// console.log(arr4);
// arr[2][[1][0]] = 'BOB'

// console.log(arr);
// console.log(arr4)


// arr[2][1] = ['SALLY']

// console.log(arr);
// console.log(arr4)

// let arr1 = [];

// arr1 = arr1.concat(['Fred', 'Wilma');

// console.log(arr1)

// let arr = [];
// // let names = ['joe', 'sue']

// // arr = arr.concat('mike', names);

// // console.log(arr)

// arr = arr.concat('Joe');
// console.log(arr)

// let arr = ['joe', 'john', [['bob', 'bill'], ['mike', 'matt']]];
// let arr2 = [].concat(arr);

// // arr[2][0][0] = 'Bob'

// // console.log(arr);
// // console.log(arr2)
// // console.log(arr2)

// let arr3 = arr.reduce((accum, el) => {
//   return accum = accum.concat(el);
// }, [])

// // console.log(arr3);
// // arr3[2][0] = 'BOB';

// arr[2][0][1] = 'JOHN'

// console.log(arr3);
// console.log(arr);

// let names = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// let names2 = names.reduce((accum, el) => {
//   return accum = accum.concat(el);
// }, []);

// names[2][0] = 'BARNEY';

// console.log(names);
// console.log(names2);
// // [ 'Fred', 'Wilma', [ 'BARNEY', 'Betty' ], [ 'Bambam', 'Pebbles' ] ]
// // [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]




// // note how names3 is nested deeper by one level than the previous example
// let names3 = ["Fred", "Wilma", [["Barney", "Betty"], ["Bambam", "Pebbles"]]];

// let names4 = names3.reduce((accum, el) => {
//   return accum = accum.concat(el);
// }, []);

// names4[2][0] = 'BARNEY';

// console.log(names3); // [ 'Fred', 'Wilma', [ [ 'BARNEY', 'Betty' ], [ 'Bambam', 'Pebbles' ] ] ]
// console.log(names4); // [ 'Fred', 'Wilma', [ 'BARNEY', 'Betty' ], [ 'Bambam', 'Pebbles' ] ]

// [ 'Fred', 'Wilma', [ 'BARNEY', 'Betty' ], [ 'Bambam', 'Pebbles' ] ]

// let advice = "Few things in life are as important as house training your important pet dinosaur.";

// let newAdvice = advice.split('important').join('urgent');

// console.log(newAdvice)

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// // [ 'Barney', 2 ]

// let keyVal = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').flat();

// console.log(keyVal);

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let title = "Flintstone Family Members";

// // total lenght has to be 40 characters, middle spot is at 20 
// // figure out the length of the string, divide by 2 to see what each half of the string is
// // can pad start 20 plus the second half of the string

// const MIDDLE = 20;
// const HALF_TITLE_LENGTH = title.length / 2;

// console.log(title.padStart((MIDDLE + HALF_TITLE_LENGTH), ' '))

// let padding = Math.floor((40 - title.length) / 2);

// console.log(title.padStart(padding + title.length));

// Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log(statement1.split('').filter(char => char === 't').length);
// console.log(statement2.split('').filter(char => char === 't').length);

// let numbers = [1, 2, 3, 4];

// // numbers.length = 0;

// // while (numbers.length > 0) {
// //   numbers.pop();
// // }

// // numbers = [];

// numbers.splice(0, numbers.length)

// console.log(numbers);

// console.log([1, 2, 3] + [4, 5]); // '1,2,34,5'

// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1); // 'hello there'

// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1); // [{first : 42}, ...]

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid(color) {
//   return color === 'blue' || color === 'green';
// }

// const isColorValid = (color) => color === 'blue' || color === 'green';


// function isColorValid(color) {
//   return ['blue', 'green'].includes(color);
// }

// let phrase = 'The Flintstones Rock!';

// const printAndIndent = (str) => {
//   let padding = 0;

//   while (padding <= 9) {
//     console.log(phrase.padStart((str.length + padding), ' '));
//     padding += 1;
//   }
// }

// printAndIndent(phrase);

// let munstersDescription = "The Munsters are creepy and spooky.";

// // `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// function replace(str) {
//   return str.split('').map(char => {
//     if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
//       return char.toLowerCase();
//     }
//     else {
//       return char.toUpperCase();
//     }
//   }).join('')
// }

// console.log(replace(munstersDescription));

// console.log('a'.charCodeAt())
// console.log('z'.charCodeAt())
// console.log('A'.charCodeAt())
// console.log('Z'.charCodeAt())


// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

//Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

// Bonus: What is the purpose of number % divisor === 0 in that code?

// let num1 = 0.3;
// let num2 = 0.6;

// let add = num1 + num2;

// console.log(add);

// let nanArray = [NaN];

// console.log(nanArray[0] === NaN);

// console.log(Number.isNaN(nanArray[0]));

// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);

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

// console.log(messWithDemographics(munsters));

// console.log(munsters)


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

// let munsters = {
//   Herman : 'dad',
//   Lily : 'wife',
//   Eddie : 'son'
// }

// let same = munsters;

// function messWithIt(obj) {
//   let vals = Object.values(obj);
//   for (let i = 0; i < vals.length; i ++) {
//     vals[i] = 'Who?'
//   }
//   return vals;
// }



// // console.log(messAgain(same));
// console.log(munsters);
// console.log(same);









// CHANGES SEEN IN ALL PLACES, PASS BY REFERENCE
// let simpsons = {
//   Homer : 40,
//   Marge : 38
// };

// let same = simpsons;

// function change(obj) {
//   return obj.Homer = 444;
// }

// console.log(change(same));

// console.log(simpsons);
// console.log(same);


// NOT SEEN IN EITHER PLACE, WHY???? DOES OBJECT VALUES STORE PRIMITIVE VALUES? I'D SAY IT'S ARRAY OF THE VALUES, IN THIS CASE THE VALUES ARE PRIMITIVES
// let simpsons = {
//   Homer : 40,
//   Marge : 38
// };

// let same = simpsons;

// function change(obj) {
//   let vals = Object.values(obj);
//   vals[0] = 444;
//   return vals;
// }

// console.log(change(same));

// console.log(simpsons);
// console.log(same);


// WHAT ABOUT WHEN THE VALUES ARE OBJECTS THEMSELVES: - the reference is copied this is pass by value.
// let simpsons = {
//   Homer : {age : 40},
//   Marge : {age : 38}
// };

// let same = simpsons;

// function change(obj) {
//   let vals = Object.values(obj);
//   vals[0].age = 444;
//   return vals;
// }

// console.log(change(same));

// console.log(simpsons);
// console.log(same);


// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }


// console.log((rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")));

// // rock, paper, paper, paper


// function foo(param = "no") {
//   return "yes";
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }

// console.log(bar(foo()));

// //no


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

// let object = { first: [1] };

// let numArray = object["first"]; // [1]
// let object = { first: [1], second : [2] };
// // let numArray = object["first"].concat();

// let numArray = Object.values(object);

// numArray.push(2);

// // numArray.push(2);

// console.log(numArray); //  => "[1, 2]"

// console.log(object); // { first : [1, 2]}

// function messWithVars(one, two, three) { // REASSIGNMENT ALONE IS NOT DESTRUCTIVE!!!!
//   one = two;
//   two = three;
//   three = one; 
//   debugger;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

//2
//re-assigning a parameter variable within a function doesn't affect the variable outside the function.??? IS THAT WHAT IS HAPPENING HERE?
// function messWithVars(one, two, three) {  
//   one = one.push(["two"]);
//   two = two.push(["three"]);
//   three = three.push(["one"]);
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`); 
// console.log(`three is: ${three}`);

// 3

// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // two
// console.log(`two is: ${two}`); // three
// console.log(`three is: ${three}`); // one

// function messWithVars(one, two) {
//   one = two;
//   one.splice(0, 1, "five"); // within function I'm saying both are 5
// }

// let one = ["one"];
// let two = ["two"];

// messWithVars(one, two);

// console.log(`one is: ${one}`); 
// console.log(`two is: ${two}`);

// function messWithVars(one, two) {
//   one = ["two"];
//   one.splice(0, 1, "five");
// }

// let one = ["one"];
// let two = ["two"];

// messWithVars(one, two);

// console.log(`one is: ${one}`); 
// console.log(`two is: ${two}`);

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       break;
//     }
//   }

//   return true;
// }

// console.log([1, 2, 3].filter(num => 'hi'));

// console.log([1, 2, 3].map(num => {
//   num * num;
// }));

// console.log([1, 2, 3].map(num => num * num));

// console.log(['ant', 'bear', 'caterpillar'].pop().length);

// console.log([1, 2, 3].every(num => {
//   return num = num * 2;
// }));

// let a = 5;
// let b = 10;
// let c = 15;

// function change() {
//   a = 55;
//   debugger;
//   // exec a ==> 55
// }

// change();
// console.log(a) // ==> 55

// let b = 6

// function change2(num) {
//   num = 66;
// }

// change2(b);
// console.log(b); // ==> 6

// let arr = [2, 3];

// function changeArr() {
//   arr = [22, 33];
// }

// changeArr();
// console.log(arr);

// let arr2 = [4, 5];

// function changeArr2(numArr) {
//   numArr = [44, 55];
// }

// changeArr2(arr2);
// console.log(arr2); // ==> [4, 5]





// 'This code demonstrates two things. The first is that inner scope can access outer scope variables. The second, and less intuitive, concept is that you can change variables from an inner scope and have that change affect the outer scope. '(lesson 2, 21) So function can change outer scoped variables with regular assignment... BUT only when they are not passed as arguments. If the variable were passed as an argument it would not be reassigned outside of the function becasue it would act as pass by value. When variables are passed as arguments the behavior of pass by value/pass by reference is determined by whether or not mutation occurs. Simple assignment doesn't mutate so the effect (when and variable argument is provided) is that it does not affect the variable outside of the function like it does here.

// function change2(varHere) {
//   varHere = 100;
//   debugger;
//   // exec varHere ==> 100
// }
// This code displays this, here again we have assignment but it does NOT take affect outside of the variable. The reason is that the variable is passed as an argument, so the change is only local. Even though be is passed to the function, it is not reassigned.
// THIS IS A SUBTLE BUT IMPORTANT DISTINCTION... GLOBAL VARIABLES BOTH CAN AND CANNOT BE REASSIGNED WITHIN A FUNCTION... it depends whether or not they are passed as arguments. In the first example since the variable is global it can be accessed anywhere, it is then accessed and reassigned and the effect is global. In the second variable, what happens is that the global variable is passed by value, so whatever happens to it is limited to the scope of the function. It's like the function creates a local scope for the function and when the function is done it goes away.

// function change3(c) {
//   c = 155;
//   debugger;
//   // exec c ==> 155
// }
// Variable shadowing can make this a little more confusing as well. This example shows that. At first glance it looks very similar to the first function, c is getting reassigned just as a did. However you can see that the parameter passed to it 'c' shadows the global variable 'c'. In reality this operates like the second function. Since 'c' shadows the outer scoped global variable the function only uses the local 'c' not the global 'c'. The global 'c' is blocked by shadowing. Therefore 'c' is not reassigned outside of the function. It does equal 155 within the function, so the local c = 155

// change();
// change2(b);
// change3(c);

// console.log(a); // 55
// console.log(b); // 10
// console.log(c); // 15


// function messWithVars(one, two) {
//   // here local and global variables point to same object
//   one = two; // here local variable one points to local variable two (which shares the same memory as global two)
//   one.splice(0, 1, "five"); // here local variable on is spliced, this points to same spot in memory as global variable two
// }

// let one = ["one"];
// let two = ["two"];

// messWithVars(one, two);

// console.log(`one is: ${one}`); //one
// console.log(`two is: ${two}`); // five

// function messWithVars(one, two) {
//   // here both local variables point to the same as their respective global variables
//   one = ["two"]; // here local variable one is reassigned to this array, reassignment is not mutative so no affect on global variables
//   one.splice(0, 1, "five"); // here local variable one is spliced, only change within function,  one was reassigned and didn't point to global variable
// }

// let one = ["one"];
// let two = ["two"];

// messWithVars(one, two);

// console.log(`one is: ${one}`);  //1
// console.log(`two is: ${two}`); //2


// console.log('abcdefghi'.slice(-4, -2)); // => 'abcdefghi'

// let arr = [2, 3, 4];
// let arr2 = arr.slice();
// console.log(arr === arr2);

// let arr = [2, 4, ['six', 'eight'], {foo : 'bar'}];
// let shallow = [...arr];

// shallow.push(111111111);

// console.log(arr);
// console.log(shallow);


// let obj = {Axl : 'vocals', Slash : 'guitar', Duff : 'bass'};

// console.log(Object.values(obj).includes('bass'));

// let arr = ['back', 'once', 'again'];
// arr['title'] = 'renegade master';

// console.log(arr);
// console.log(Object.entries(arr));
// console.log(arr.length);

// let arr = ['back', 'Once', 'Again'];
// console.log(arr.join())

// let numbers = [1, 2, 3, 4];
// numbers[0] = numbers[0] + 1;  // => 2
// // numbers;                      // => [ 2, 2, 3, 4 ]
// numbers[1] += 10;
// numbers[2] += 100;

// console.log(numbers)

// for (let i = 0; i < numbers.length; i ++) {
//   numbers[i] = numbers[i] + 10;
// }

// numbers.forEach((el, indx) => {
//   el[indx] = el[indx] + 10;
// })

// console.log(numbers);
// function increase(arr) {
//   arr.forEach(el => {
//     el += 10;
//   })
// }

// increase(numbers);
// console.log(numbers);

// let gnr = {axl : 'vocals', slash : 'guitar'};

// function changeIt(gnr) {
//   gnr = {axl : 'singer', duff : 'bass'}; // local variable is reassigned, global variable stays the same
//   gnr.axl = 'lead singer';
//   return gnr;
// }

// console.log(changeIt(gnr));

// console.log(gnr);

// let ledZep = ['Jimmy Page', 'Robert Plant'];

// function changeIt(ledZep) {
//  ledZep = ['robert plant', 'jimmy page'];
//  ledZep.push('other band members');
//  console.log(ledZep)
// }

// changeIt(ledZep);

// console.log(ledZep);

// let str = 'bubba';
// str = 'B' + str.slice(1)
// console.log(str)

// let answer = 42; // primitive value

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer); // primitive value is passed, but cannot be changed, pass by value

// console.log(answer - 8);

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) { // passing an Object here
//   Object.values(demoObject).forEach(familyMember => { // the values are actually another object, so a pointer
//     familyMember["age"] += 42; // this is a destructive reassignment becasue of the reference so both are changed
//     familyMember["gender"] = "other";
//   });
// }

// messWithDemographics(munsters);

// console.log(munsters);


// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) { // passing an Object here
//   Object.values(demoObject).forEach(familyMember => { // the values are actually another object, so a pointer
//     familyMember['gender'] = 42; // this is a destructive reassignment becasue of the reference so both are changed
//     // familyMember["gender"] = "other";
//   });
// }

// messWithDemographics(munsters);

// console.log(munsters);


// let munsters = {
//   Herman: [32],
//   Lily: [30],
//   Grandpa: [402],
//   Eddie: [10],
//   Marilyn: [23]
// };

// function messWithDemographics(demoObject) {
//   // Object.values(demoObject).forEach(familyMember => {
//   //   familyMember["age"] += 42;
//   //   familyMember["gender"] = "other";
//   // });
//   // let vals = Object.values(demoObject);
//   // vals[0]['age'] = 300;
//   let vals = Object.values(demoObject);
//   vals.forEach(age => age[0] += 42);
//   return vals;
// }


// console.log(messWithDemographics(munsters));

// console.log(munsters);
// let str = 'One potato, two potato, three potato, four'.split(',');

// console.log(str);

// let str = 'back once again';
// console.log(str.charCodeAt(2));
// console.log('c'.charCodeAt())
// console.log(str[2].charCodeAt());

// let sentence = 'back o\\nce again'

// console.log(sentence)

// console.log(String.fromCharCode(97, 98, 99))

// let num = 6;

// function changeNum() {
//   num = 100;
// }

// changeNum(num)

// console.log(num)

// let arr = [2, 4, 6];
// // let arr2 = [8, 10, 12];

// // function combineArr(array1, array2) {
// //   return array1 = array1.concat(array2);
// // }

// function combineArr(arr, arr2) {
//   return arr.splice(0, arr2);
// }

// console.log(combineArr(arr, arr2));

// console.log(arr);

// let arr = [2, 4, 6];
// let arr2 = [8, 10, 12]

// function spliceIt(array1, array2) {
//   array1 = array2;
//   array1.splice(1, 1, 100);
// }

// spliceIt(arr, arr2);

// console.log(arr);
// console.log(arr2);

// function spliceIt() {
//   arr = arr2;
//   arr.splice(3, 0, 100);
// }

// spliceIt();

// console.log(arr);
// console.log(arr2);

// let arr = [2, 4, 6];
// let arr2 = [8, 10, 12]

// function spliceIt(array1, array2) {
//   array1 = array2;
//   array1.splice(1, 1, 100);
// }

// spliceIt(arr, arr2);

// console.log(arr);
// console.log(arr2);

// let arr = [2, 4, 6];
// let arr2 = [8, 10, 12]

// function spliceIt(array, array2) {
//   array = array2;
//   array.splice(1, 1, 100);
// }

// spliceIt(arr, arr2);

// console.log(arr);
// console.log(arr2);

// let arr = [2, 4, 6];
// let arr2 = [8, 10, 12];

// function allSpliced() {
//   arr = arr2;
//   arr.splice(1, 1, 100);
// }

// allSpliced();

// console.log(arr);
// console.log(arr2);


// let arr = [2, 4, 6];
// let arr2 = [8, 10, 12];

// function moreSplice(array, array2) {
//   array[0] = array2;
//   array[0].splice(1, 1, 100);
// }

// moreSplice(arr, arr2);

// console.log(arr);
// console.log(arr2)

// let arr = [2, 4, 6];
// let arr2 = [8, 10, 12];

// function moreSplice(array, array2) {
//   array[0] = array2;
//   array[0].splice(1, 1, 100);
// }

// moreSplice(arr, arr2);

// console.log(arr);
// console.log(arr2)

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// let counter = 0;

// while (counter < alphabet.length) {
//   alphabet[counter] = alphabet[counter].toUpperCase();
//   counter += 1;
// }

// console.log(alphabet);

// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// let keys = Object.keys(numberOfPets);
// let counter = 0;

// while (counter < keys.length) {
//   let pet = keys[counter];
//   let number = numberOfPets[pet];

//   console.log(`I have ${number} ${pet}`);

//   counter += 1;
// }

// for (let key in numberOfPets) {
//   let number = numberOfPets[key];

//   console.log(`I have ${number} ${key}`);
// }

// for (let key in numberOfPets) {
//   numberOfPets[key] += 1;
// }

// console.log(numberOfPets);

// while (true) {
//   let number = Math.floor(10 * Math.random());
//   if (number === 5) {
//     console.log('Exiting...');
//     break;
//   }

//   console.log(number);
// }

// // find all substrings of a word
// // example 'halo' ==> [halo, hal, ha, alo, al, lo]

// // HIGH LEVEL
// // iterate over the string // while the string length >= 2
// // push the substrings over
//   // set a slice index = str.length (this will be the second argument in slice)
//   // while this is >= 2 // this is a nested iteration
//   // push the substring over
//   // decrease the slice index
// // at this point remove the first letter from the string by reassigning the value
//   // begin the iteration again
// // return the results

// // MORE DETAIL
// // create a function that takes a string as an argument
// // create an empty array to store the results
// // no need to create a copy of the string - pass by value, can't be altered within function and change be seen outside
// // set an outer level iteration, while the length of the string >= 2
// // create a sliceIndex variable set it to the length of the string
//   // on each iteration this will be used to determine what section to push over
// // create a nested iteration, while the slice index >= 2
//   // push the subsrting over using .slice(0, subStringIndex)
//   // decrease the slice index
//   // reassign the string variable to itself with the first value removed - this happens outside of the nested iteration, within the first iteration
//     // can do this using str = str.split('').shift().join('') NOPE - THIS DOESN'T WORK
//     // cannot use this .shift() returns the removed element
//     // INSTEAD DO THIS:
//     // create a stringArray variable instead - split to create it and then call shift
//     // set string = to joining this string Array variable
// // after iterations are complete return value

// let word = 'halo';

// function substrings(str) {
//   let results = [];

//   while (str.length >= 2) {
//     let sliceIndex = str.length;

//     while (sliceIndex >= 2) {
//       results.push(str.slice(0, sliceIndex));
//       sliceIndex -= 1;
//     }
//     strArr = str.split('');
//     strArr.shift();
//     str = strArr.join('');
//   }
//   return results;
// }

// console.log(substrings(word));
// console.log(word);

// console.log(word.split('').shift())

// function isPalindrome(word) {
//   return word === word.split('').reverse().join('');
// }


// To check if all substrings are palindromes
// create a function that takes a word as an argument
// set a results array
// set an all substrings variable to the results of the substrings function - this will be an array of substrings
// iterate over the array of substrings
// on each element, call the isPalindrome function
  // if it's true push the element over to results
// after iteration return results

// function allPalindromes(wordToCheck) {
//   let results = [];
//   let allSubstrings = substrings(wordToCheck);

//   allSubstrings.forEach(substr => {
//     if (isPalindrome(substr)) {
//       results.push(substr);
//     }
//   })
//   return results;
// }

// console.log(allPalindromes("supercalifragilisticexpialidocious"))
// console.log(allPalindromes("abcddcbA"))
// console.log(allPalindromes("palindrome"))
// console.log(allPalindromes(""))


// find all substrings of a word
// example 'halo' ==> [halo, hal, ha, alo, al, lo]

// HIGH LEVEL
// iterate over the string // while the string length >= 2
// push the substrings over
  // set a slice index = str.length (this will be the second argument in slice)
  // while this is >= 2 // this is a nested iteration
  // push the substring over
  // decrease the slice index
// at this point remove the first letter from the string by reassigning the value
  // begin the iteration again
// return the results

// MORE DETAIL
// create a function that takes a string as an argument
// create an empty array to store the results
// no need to create a copy of the string - pass by value, can't be altered within function and change be seen outside
// set an outer level iteration, while the length of the string >= 2
// create a sliceIndex variable set it to the length of the string
  // on each iteration this will be used to determine what section to push over
// create a nested iteration, while the slice index >= 2
  // push the subsrting over using .slice(0, subStringIndex)
  // decrease the slice index
  // reassign the string variable to itself with the first value removed - this happens outside of the nested iteration, within the first iteration
    // can do this using str = str.split('').shift().join('') NOPE - THIS DOESN'T WORK
    // cannot use this .shift() returns the removed element
    // INSTEAD DO THIS:
    // create a stringArray variable instead - split to create it and then call shift
    // set string = to joining this string Array variable
// after iterations are complete return value

// let word = 'halo';

// function substrings(str) {
//   let results = [];

//   while (str.length >= 2) {
//     let sliceIndex = str.length;

//     while (sliceIndex >= 2) {
//       results.push(str.slice(0, sliceIndex));
//       sliceIndex -= 1;
//     }
//     strArr = str.split('');
//     strArr.shift();
//     str = strArr.join('');
//   }
//   return results;
// }

// console.log(substrings(word));

// let fruits = ['apple', 'banana', 'pear'];

// let counter = 0;
// // let results = [];

// while (counter < fruits.length) {
  
//   fruits[counter] = fruits[counter] + 's'

//   counter += 1;
// }

// console.log(fruits);
// console.log(results);

// const VOWELS = 'aeiouAEIOU';

// function selectVowels(str) {
//   let results = [];

//   for (let i = 0; i < str.length; i ++) {
//     if (VOWELS.includes(str[i])) {
//       results.push(str[i]);
//     }
//   }
//   return results;
// }

// console.log(selectVowels('back once again'));

// select key value pairs where value is fruit, this is returned as an object
// create a select fruits function where an object is passed
// create an empty results object
// create an array of key value pairs with Object.entries
  // no need to create a copy of the object, the entries is a copy of values, not of references
// iterate over the array of pairs
// create an if conditional, if the 1st element on each iteration equals 'fruit'
  // assign the pair to the results using bracket notation
// return the results

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// // let changeThis = produce;

// // changeThis['apple'] = 'computer';

// // console.log(produce);
// // console.log(changeThis);

// // let keys = Object.keys(produce);

// // keys[0] = 'whaaaat???';

// // console.log(keys);
// // console.log(produce);

// let values = Object.values(produce);

// values[0] = 'saaaay whaaaat???';

// console.log(values);
// console.log(produce);



// let pairs = Object.entries(produce);

// pairs[0][1] = 'CHANGED!!!!';

// console.log(pairs);
// console.log(produce);

//  first way
// function selectFruit(obj) {
//   let results = {};
//   let keyValuePairs = Object.entries(obj);

//   for (let i = 0; i < keyValuePairs.length; i ++) {
//     if (keyValuePairs[i][1] === 'Fruit') {
//       results[keyValuePairs[i][0]] = keyValuePairs[i][1];
//     }
//   }
//   return results;
// }

// refactor

// function selectFruit(obj) {
//   let results = {};
//   let keyValuePairs = Object.entries(obj);

//   keyValuePairs.forEach(pair => {
//     if (pair[1] === 'Fruit') {
//       results[pair[0]] = pair[1];
//     }
//   })
//   return results;
// }

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }


// let nums = [2, 4, 6, 8];

// function doubleNums(arr) {
//   for (let i = 0; i < arr.length; i ++) {
//     arr[i] = arr[i] * 2;
//   }
//   return arr;
// }

// console.log(doubleNums(nums));

// console.log(nums);

// let myNumbers = [1, 4, 3, 7, 2, 6];

// Try coding a solution that doubles the numbers that have odd indices:

// create a function that takes an array as an argument
// create a results array
// iterate over the passed array with a for loop, need to access index value
// check the value of the index, if odd
  // push the number * 2 to the array
  // else just push the number
// return results

// function doubleOddNumbers(arr) {
//   let results = [];
//   let indx = 0;

//   while (indx < arr.length) {
//     if (indx % 2 === 1) {
//       results.push(arr[indx] * 2);
//     } else {
//       results.push(arr[indx]);
//     }
//     indx += 1;
//   }
//   return results;
// }

// function doubleOddNumbers(arr) {
//   let results = [];

//   for (let i = 0; i < arr.length; i ++) {
//     if (i % 2 === 1) {
//       results.push(arr[i] * 2);
//     } else {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// let doubleTrouble = (doubleOddNumbers(myNumbers));
// console.log(doubleTrouble);
// console.log(myNumbers);
// myNumbers[0] = 11111;
// console.log(doubleTrouble);
// console.log(myNumbers);


// function doubleNumsWithOddIndices(numbers) {
//   let doubledNums = [];

//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNumber = numbers[counter];

//     if (counter % 2 === 1) {
//       doubledNums.push(currentNumber * 2);
//     } else {
//       doubledNums.push(currentNumber);
//     }
//   }

//   return doubledNums;
// }

// let doubled = (doubleNumsWithOddIndices(myNumbers));
// doubled[2] = 344334433443;
// console.log(myNumbers);
// console.log(doubled);


// let myNumbers = [1, 4, 3, 4, 2, 3];


// function double(arr) {
//   let results = [];

//   for (let i = 0; i < arr.length; i ++) {
//     results.push(arr[i] * 2);
//   }

//   results[0] = 9999;

//   return results;
// }

// let doubled = double(myNumbers);
// console.log(doubled);
// console.log(myNumbers);

// // doubled[0] = 999;

// console.log(doubled);
// console.log(myNumbers);


// let myNumbers = [1, 4, 3, 7, 2, 6];

// function multiply(arr, num) {
//   let results = [];

//   arr.forEach(el => results.push(el * num));

//   return results;
// }


// let multiplied = multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]

// console.log(multiplied);
// console.log(myNumbers)

// let nums = [[2], 4, 6];

// function changeIt(arr) {
//   let results = [];
//   results.push(arr[0]);
//   results.push(arr[1]);
//   results[0] = 555;
//   results[1] = 888;
//   return results;
// }

// let changed = changeIt(nums);
// console.log(changed)
// console.log(nums);

// let numbers = [[2], [4], [6]];

// function double(arr) {
//   let results = [];

//   for (let i = 0; i < arr.length; i ++) {
//     results.push(arr[i][0] * 2) 
//   }
//   return results;
// }

// let doubled = double(numbers);
// console.log(doubled);
// console.log(numbers);

// let nums = [2, 4, 6, 8];

// let filtered = nums.filter((num, indx) => {
//   if (indx % 2 === 0) {
//     return num;
//   }
// })

// console.log(filtered);

// let mapped = nums.map((num, indx) => {
//   if (indx % 2 === 0) {
//     return num * 100;
//   } else {
//     return num;
//   }
// })

// console.log(mapped)

// nums.forEach((num, indx) => {
//   console.log(num * indx);
// })

// let str = 'back once again';

// let results = [];

// str.split('').forEach((char, indx) => {
//   if (indx % 2 === 0) {
//     results.push(char.toUpperCase());
//   } else {
//     results.push(char);
//   }
// })

// console.log(results.join(''))
// console.log(str)

// let gnr = {vocals : 'axl', guitar : 'slash', bass : 'duff', drums : 'steven'};

// // Object.keys(gnr).forEach(key => gnr[key] = gnr[key].toUpperCase());


// console.log(gnr)

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };


// let keyVals = Object.entries(produce);

// keyVals.forEach(pair => {
//   let [type, category] = pair;
//   // console.log(`this is the type : ${type}`);
//   // console.log(category)

//   let first = pair[0];
//   let sec = pair[1];

//   console.log(`first: ${first}, second: ${sec}`)
// })

// let produceKeyValues = Object.entries(produce);
// // produceKeyValues contains:
// //   [['apple', 'Fruit'],
// //    ['carrot', 'Vegetable'],
// //    ['pear', 'Fruit'],
// //    ['broccoli', 'Vegetable']]

// produceKeyValues.forEach(keyValue => {
//   let [ key, value ] = keyValue;

//   console.log(`${key} is a ${value}`);
// });
// logs:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable

// let arr = [['back'], ['once'], ['again']];

// let arr2 = ['back', 'once', 'again'];

// let arr3 = [1, 2, 3];

// // arr2.forEach((num, indx) => arr2[indx] = num * 2);

// // arr.forEach(el => el[0] = el[0].toUpperCase());

// arr2.forEach((_, indx) => arr2[indx] = arr2[indx].toUpperCase())

// // arr3.forEach((num, indx))

// console.log(arr2);

// console.log([1, 2, 3].filter(num => num - 1))

// The question now is whether we can effectively use filter to select certain key-value pairs from an object. Let's say we want to select the key-value pairs from our produce object where the value is Vegetable. Let's give it a shot with Array.prototype.filter.

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let vegPairs = Object.entries(produce).filter(pair => pair[1] === 'Vegetable');

// console.log(vegPairs);

// That sort of works, but the return value isn't ideal: it returns an array, not an object as we want. Maybe we can convert the array to an object using forEach:

// let vegObj = {};

// vegPairs.forEach(arr => {
//   vegObj[arr[0]] = arr[1] 
// });

// console.log(vegObj);

// let vegObj = {};

// Object.entries(produce).forEach(pair => {
//   let [type, category] = pair;
//   if (category === 'Vegetable') {
//     vegObj[type] = category;
//   }
//   }
// )

// console.log(vegObj);

// new strng with just vowels

// let str = "What's up, Doc?";

// // let vowelStr = str.split('').filter(char => 'aeiou'.includes(char.toLowerCase())).join('');

// // console.log(vowelStr);

// // We can also use this technique with map. Let's duplicate every character in a string and return the result:

// let dupe = str.split('').map(char => char + char).join('');

// console.log(dupe)

// let arr = ['back', 'once', 'again'];

// console.log(arr.some(word => word[0] === 'B'));

// let animals = { a: 'ant', b: 'bear', c: 'cat' };

// console.log(Object.values(animals).some(word => word.length > 3))

// console.log(Object.values(animals).every(word => word.charCodeAt(0) >= 98));

// console.log(Object.values(animals).every(word => word.length >= 3))

// let obj = { vocals: 'Axl'};

// console.log(obj.hasOwnProperty('vocals'));
// console.log(obj.hasOwnProperty('hasOwnProperty'))

// let arr = [2, 4, 6];

// arr['foo'] = 'bar';
// arr[-6] = 'negSix';

// console.log(arr);

// console.log(Object.keys(arr))

// let arr = [];

// let arr2 = [];
// arr2.length = 5;

// let arr3 = [];
// arr3['foo'] = 'bar';

// console.log(Object.keys(arr2).length);
// console.log(Object.keys(arr3).length);

// // What is the return value of the filter method call below? Why?
// [1, 2, 3].filter(num => 'hi');
// // [1, 2, 3]

// What is the return value of map in the following code? Why?

// [1, 2, 3].map(num => {
//   num * num;
// }); 
// [undefined, undefined, undefined]

// [1, 2, 3].map(num => num * num);
// [1, 4, 9] because of implicit return

// ['ant', 'bear', 'caterpillar'].pop().length;
// 11 becasue .pop returns the removed element, .length is called on the removed element which is a string

// What is the callback's return value in the following code? Also, what is the return value of every in this code?

// [1, 2, 3].every(num => {
//   return num = num * 2;
// });
// [2, 4, 6]
// // true

// let arr = [1, 2, 3, 4, 5]
// arr.fill(1, 1, 5);

// console.log(arr)

// What is the return value of map in the following code? Why?

// ['ant', 'bear'].map(elem => {
//   if (elem.length > 3) {
//     return elem;
//   }
// });

// [undefined, 'bear'];

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// PROBLEM: // Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:
  // input: an array
  // output: an object
  // questions/clarification
    // can the original array be modified? - I'll say no
    // the order of the keys in the array is the same as the order of the elements in the array
    // can I assume only an array will be passed as the argument to the function - yes

// EXAMPLES/TEST CASES:
  // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// DATA STRUCTURES
  // an initial array
  // a result object
  // strings within the array, strings as the keys
  // numbers as the values of the keys

// HIGH LEVEL ALGORITHM
  // have to take the string - each element and set it as a key
  // have to be able to access the index of each element of the array
  // take the element name and assign it in an object as the key
  // take the corresponding index and assign it as a value
  // can do this action with iteration

// ALGORITHM
  // create a function that takes an array as an argument
  // create an empty results object
  // call Object.entries on the passed array, this will give an array of subarrays containing key value pairs (the length of the index is the key in this case)
    // Object.entries returns a new array, these values are not linked to original values since they are not nested
  // call forEach() on this array,
    // on each iteration use array destructuring assignment to set variables for key and value (index / name)
    // within same iteration use bracket notation to assign this pair to the object
      // use Number() to turn the indx number from a string to a number
  // return the object

// function makeObj(arr) {
//   let results = {};

//   Object.entries(arr).forEach(pair => {
//     let [indx, name] = pair;
//     results[name] = Number(indx);
//   })

//   return results;
// }

// let flintstonesObj = makeObj(flintstones);

// console.log(flintstonesObj);

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// PROBLEM: Add up all of the ages from the Munster family object:
  // input an object with values as a number
  // output a single number
  // assumptions - do not modify the original object
  // assumptions - only an object will be passed to the function
  // assumptions - if two numbers are equally small just return one

// EXAMPLES: given

// DATA STRUCTURES:
  // object and numbers
  // an array of numbers used to isolate the values we need

// ALGORITHM:
  // create a function that takes an object as an argument
  // call Object.values to create an array of the numbers we need
  // call .reduce() on this array, set the accumulator to zero and on each iteration add the value to the accumulator
  // return the value from .reduce

// CODE

// function addItUp(obj) {
//   return Object.values(obj).reduce((accum, el) => accum += el, 0);
// }

// let totalAge = addItUp(ages);

// console.log(totalAge);

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// PROBLEM Pick out the minimum age from our current Munster family object:
  // input - an object
  // output a number
  // assumptions - assume only an object is passed to function

// EXAMPLES: given

// DATA STRUCTURES:
  // an object, an array to isolate the numbers, numbers

// ALGORITHM:
  // use Object.values to make an array of the numbers
  // sort this array in ascending order
  // return the first (zero indexed) element in the array, this will be the smallest number

// function smallest(obj) {
  
//   let sorted = Object.values(obj).sort((a, b) => {
//     if (a < b) {
//       return - 1;
//     } else if (a > b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   })

//   return sorted[0];
// }

// let lowestAge = smallest(ages);
// console.log(lowestAge)


// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// ALTERNATIVE WAY

// use Object.values to create an array of the numbers
// set a lowest age variable equal to the first element of the array
// iterate over the array
  // on each iteration check to see if the current value is less than the lowest age variable
  // if so reassign the lowest age variable
// return the lowest age after all iterations

// function lowest(obj) {
//   let ages = Object.values(obj);
//   let lowestAge = ages[0];

//   ages.forEach(age => {
//     if (age < lowestAge) {
//       lowestAge = age;
//     }
//   })
//   return lowestAge;
// }

// console.log(lowest(ages));


// ALTERNATIVE WITH SPREAD SYNTAX

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let agesOnly = Object.values(ages);
// let lowest = Math.min(...agesOnly)
// console.log(lowest);

// PROBLEM: Create an object that expresses the frequency with which each letter occurs in this string:
  // input: string
  // output and object with numbers as the values, letters as the keys
  // note: capitalization is separate from lower case, different values
  // a string is passed to function - immutable
  // spaces don't count, have to discard these

// EXAMPLES: { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// DATA STRUCTURES
  // string, object, numbers, arrays to use array methods

// ALGORITHM

// create a function that takes a string as an argument
// create an empty results object
// split the string at the character level to get an array of characters
// use forEach to iterate over the array
  // on each iteration
  // char === ' ' continue
  // check to see if the char already is a value in the object
    // if not use variable assignment to set it = 1
    // if it does exist += 1
// return result object

// let statement = "The Flintstones Rock";


// function countChars(str) {
//   let results = {};

//   str.split('').forEach(char => {
//     if (char === ' ') {
//       return;
//     } else if (!Object.keys(results).includes(char)) {
//       results[char] = 1;
//     } else {
//       results[char] += 1;
//     }
//   })
//   return results;
// }

// let counted = countChars(statement);

// console.log(counted);


// let statement = "The Flintstones Rock";

// function countChars(str) {
//   let results = {};
//   charArr = str.split('').filter(char => char !== ' ');


//   charArr.forEach(char => {
//     results[char] = results[char] || 0;
//     results[char] += 1;
//   })
//   return results;
// }

// console.log(countChars(statement))

// let statement = "The Flintstones Rock";

// function countingChars(str) {
//   let result = {};
//   let charArr = str.split('').filter(el => el !== ' ');

//   charArr.forEach(char => {
//     result[char] = result[char] || 0;
//     result[char] += 1;
//   })
//   return result;
// }

// console.log(countingChars(statement))

// let statement = "The Flintstones Rock";

// const countChars = function (str) {
//   let result = {};

//   for (let i = 0; i < str.length; i ++) {
//     if (str[i] === ' ') {
//       continue;
//     }
//     result[str[i]] = result[str[i]] || 0;
//     result[str[i]] += 1;
//   }
//   return result;
// }

// console.log(countChars(statement))

// let obj = {vocal : 'Axl', bass : undefined};

// console.log(obj['guitar']);
// console.log(obj.bass)

// let obj = {first : 1, second : [2]};

// let vals = Object.values(obj);

// vals[1].push(555);

// console.log(obj);
// console.log(vals);

// Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   // greet : (name) => {
//   //   console.log(`Hej, ${name}!`)
//   // }
//   greet : function (name) {
//     console.log(`Hej, ${name}!`)
//   }
// };

// // // jane.greet('Bobby'); // Hej, Bobby!

// jane.greet('Billy')




// PROBLEM: Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.
  // input: an object with keys that have a value as an object
  // output: an array that contains other nested values
  // should the two structures be linked by references - no
  // note capitalization scheme - something happens to every value
  // can assume that the argument passed will always be an object

// EXAMPLES / TEST CASES The return value should look like this:
  // [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// DATA STRUCTURES
  // objects, arrays, strings

// ALGORITHM
  // create a function that takes an object as an argument
    // create helper function to test and show an error message if argument passed is not an object
  // create an empty results array
  // use object.values to isolate the nested objects, these are the references
  // iterate over the array of objects
    // conditional logic to check for type
    // if fruit
      // create an empty array (this will be sent to results eventually)
      // create a nested iteration to iterate over colors
        // on each iteration send to the created empty array a slice and concatenation of the primitive color with correct capitalziation
        // push this to the results array
    // if vegetable
      // push tot he results array the all caps of the size, is a primitive value
  // return results array

// CODE WITH INTENT

// let val = null;
// let arr = [2, 3, 9];
// let str = 'back once again'

// let produce = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// function isAnObject(item) {
//   return typeof item === 'object' && !Array.isArray(item) && item !== null;
// }

// function makeColorAndSizeArray(obj) {
//   if (!isAnObject(obj)) {
//     console.log('That\'s not an object! Please pass an object as an argument!');
    
//   }

//   let results = [];
//   let nestedObjectsArray = Object.values(obj);

//   nestedObjectsArray.forEach(nestedObj => {
//     if (nestedObj.type === 'fruit') {
//       let colorArray = [];
//       nestedObj.colors.forEach(color => {
//         colorArray.push(color[0].toUpperCase() + color.slice(1));
//       })
//       results.push(colorArray);
//     } else {
//       results.push(nestedObj.size.toUpperCase());
//     }
//   })
//   return results;
// }


// console.log(makeColorAndSizeArray(produce))
// console.log(makeColorAndSizeArray(val))
// console.log(makeColorAndSizeArray(arr))
// console.log(makeColorAndSizeArray(str))

// let arr = [2, 11, 9, 4, 107, 21, 1];

// arr.sort((a, b) => a - b)
// console.log(arr)
// [1, 2, 4, 9, 11, 21, 107]

// console.log(['arc', 'bat', 'cape', 'ants', 'cap'].sort());

// let arr = [2, 11, 9, 4, 107, 21, 1] // sorted result: [ 1, 2, 4, 9, 11, 21, 107 ]

// arr.sort(function (a, b) {
//   if (a < b) {
//     debugger
//     return -1
//   } else if (a > b) {
//     debugger
//     return 1;
//   } else {
//     debugger;
//     return 0;
//   }
// })

// console.log(arr);

// arr.sort(function (a, b) {
//   return b - a;
// })

// console.log(arr)

// let words = ['go', 'ahead', 'and', 'jump'];

// words.sort((a, b) => {
//   if (a.length < b.length) {
//     return -1;
//   } else if (a.length > b.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(words);

// let nums = [342, 128, 9, 87, 6, 8326];

// nums.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(nums)


// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];

// each subarray is an element that can be compared with .sort
// we want to compare the total of each subarray, so need to calcualte this, a total, b total

// scores.sort((a, b) => {
//   let aTotal = a.reduce((accum, el) => accum += el, 0);
//   let bTotal = b.reduce((accum, el) => accum += el, 0);

//   return aTotal - bTotal;
// })

// console.log(scores);

// scores.forEach(subArr => subArr.sort((a, b) => a - b));

// console.log(scores)

// sort this in descending order:

// let wordArr = ['back', 'once', 'again'];

// // this doesn't work like it would for numbers, have to deliberately do this

// wordArr.sort((a, b) => b - a);
// console.log(wordArr); // [ 'back', 'once', 'again' ]

// // like this:

// wordArr.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   } else {
//     return 0;
//   }
// })

// console.log(wordArr); // [ 'once', 'back', 'again' ]


// let nestedWordArr = [['back'], ['once'], ['again']];
// // sort to produce [['again'], ['back'], ['once']]

// nestedWordArr.sort((a, b) => {
//   let aWord = a[0];
//   let bWord = b[0];

//   if (aWord < bWord) {
//     return -1;
//   } else if (aWord > bWord) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(nestedWordArr); //[ [ 'again' ], [ 'back' ], [ 'once' ] ]

// let arr = [{ a: 'ant' }, { b: 'bear' }];

// console.log(arr[0].a);

// let arr = [{ a: 'ant' }, { b: 'bear' }];

// arr[0]['c'] = 'cat';

// console.log(arr);

// let a = [1, 3];
// let b = [2];
// let arr = [a, b];
// arr // => [ [ 1, 3 ], [ 2 ] ]

// arr[0][0] = 100;
// console.log(arr);
// console.log(a)

// let arr = [['a'], ['b'], ['c']];
// let copyOfArr = arr.slice();

// copyOfArr[1].push('d');
// copyOfArr.push('only in the copy')

// console.log(arr);
// console.log(copyOfArr);

// let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
// let copyOfArr = [...arr];

// copyOfArr[1].d = 'qux';
// arr.push({e : 'edu'})

// console.log(arr);
// console.log(copyOfArr);

// let obj1 = { a: 'foo' };
// let obj2 = { b: ['bar'] };
// let obj3 = { c: 'crux'};

// Object.assign(obj1, obj2, obj3);

// console.log(obj1);

// obj2.b[0] = 'whaaaat???';

// console.log(obj2);
// console.log(obj1)

// let gnr = {vocals : 'axl', guitar: 'slash'}
// let ledZep = {drums : 'bonham', bass : 'some guy'}

// Object.assign(gnr, ledZep);

// console.log(gnr);
// console.log(ledZep)

// let chargers = {
//   qb : 'Rivers',
//   rbs : ['LT', 'Sproles'],
//   wrs: ['Vincent Jackson', 'Malcom Floyd']
// }


// let shallowCopy = Object.assign({}, chargers);
// let stringifiedObj = JSON.stringify(chargers);
// let deepCopy = JSON.parse(stringifiedObj);

// chargers['rbs'][0] = 'LaDanian Tomlinson';


// console.log(chargers);
// console.log(shallowCopy);
// console.log(deepCopy);

// let arr = [2, 4, 6, [8, 10, 12]];

// Object.freeze(arr[3]);

// arr.push(22222);

// // arr[3].push(100)

// console.log(Object.isFrozen(arr[3]))
// console.log(arr);

// "use strict";

// let wordArr = ['back', 'once', 'again'];

// console.log(wordArr.slice().sort());
// // [ 'again', 'back', 'once' ]

// let nestedWordArr = [['back'], ['once'], ['again']];

// console.log(nestedWordArr.flat().sort().map(toUpper));
// // [ [ 'again' ], [ 'back' ], [ 'once' ] ]

// function toNested(ele) {
//   return [ele];
// }

// function toUpper(ele) {
//   return ele.toUpperCase();
// }



// console.log(nestedWordArr.flat().sort().map(toUpper));
// // [ 'AGAIN', 'BACK', 'ONCE' ]

// function toUpper(ele) {
//   return ele.toUpperCase();
// }

// [[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined

// what is happening
// for each is used for just iteration will iterate over all the elements
// on each element the call back is performed
// in this case on each iteration the value is logged - this is actually itself a method
// for each returns undefined


// console.log([[1, 2], [3, 4]].map(arr => (arr[0])));
// 1
// 3
// => [undefined, undefined]

// what is happening
// map iterates over the outer array,
// call back executes on each subarray
// element 0 is referenced,
// method call console.logs that element
// console.log returns undefined, that is used by map

// console.log([[1, 2], [3, 4]].map(arr => {
//   console.log(arr[0]);
//   return arr[0];
// }));

// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//   return arr.map(num => {
//     if (num > 5) {
//       return console.log(num);
//     }
//   });
// });

// console.log(myArr);

// [[1, 2], [3, 4]].map(arr => {
//   return arr.map(num => num * 2);
// });
// console.log(2 === 2)


// PROBLEM: How would you order the following array of number strings by descending numeric value (largest number value to smallest)?
  // input: an array
  // output: a sorted array
  // question sort in place or return new array? - return new array
  // note they are strings
// EXAMPLES/TEST CASES: GIVEN
// DATA STRUCTURES: an array of strings (also numbers when converting to sort)
// ALGORITHM
  // create a shallow copy of the array to sort so not to mutate the original
    // set a variable equal to this array using spread syntax
  // call .sort()
    // provide a callback function
    // declare aVariable = to Number(a)
    // do the same with a b variable
    // use the expanded syntax to sort in descending order according to variables
      // careful with order of 1, -1 we want descending order

// let arr = ['10', '11', '9', '7', '8'];

// let sortedArr = [...arr].sort((a, b) => {
//   let aNum = Number(a);
//   let bNum = Number(b);

//   if (aNum < bNum) {
//     return 1;
//   } else if (aNum > bNum) {
//     return -1;
//   } else {
//     return 0;
//   }
// })

// console.log(arr);
// console.log(sortedArr);


// PROBLEM: How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?
// EXAMPLES: given
// DATA STRUCTURES: an array with nested objects
// ALGORTIHM
  // create a deep copy to not modify original
  // call .sort()
    // declare an aVariable equal to Number( a.[published])
    // do same with b variable
    // sort using expanded syntax

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// let stringified = JSON.stringify(books);
// let deepCopyBooks = JSON.parse(stringified);

// deepCopyBooks.sort((a, b) => {
//   let aYear = Number(a.published);
//   let bYear = Number(b.published);

//   if (aYear < bYear) {
//     return -1;
//   } else if (aYear > bYear) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(books);
// console.log(deepCopyBooks);


// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];


// console.log(arr2[1]['third'][0])

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// console.log(arr3[2]['third'][0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// console.log(obj1.b['1'])

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

// console.log(Object.keys(obj2.third)[0])

// let arr1 = [1, [2, 3], 4];

// arr1[1][1] = 4444
// console.log(arr1)

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

// arr2[2] = 4444;
// console.log(arr2)

// let obj1 = { first: [1, 2, [3]] };

// obj1['first'][2][0] = 4444;
// // console.log(obj1)
// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

// obj2['a']['a'][2] = 4444;

// console.log(obj2)

// PROBLEM: Compute and display the total age of the male members of the family.
  // INPUT: an object
  // OUTPUT: a number

// EXAMPLES/TEST CASES: given

// DATA STRUCTURES: object, number, possibly arrays to use array methods

// ALGORITHM:

// create a helper function that takes an object as an argument
  // purpose is to get the nested object for each family member
  // call object.entries on the passed object
  // create an empty results array
  // iteratate over the object.entries with for each
  // push the index1 element to the results array
  // return results

// create a function that takes an array as an argument
  // the results from the helper function will be passed
  // this will be an array with a nested array of age / gender
  // iterate over this with .reduce()
    // set a conditional to check for gender
    // if male += reduce the age


// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// function makeArray(obj) {
//   let results = [];
//   let firstLevelArr = Object.entries(obj);

//   firstLevelArr.forEach(familyMember => {
//     results.push(Object.values(familyMember[1]));
//   })
//   return results;
// }


// let totalAge = makeArray(munsters).reduce((accum, el) => {
//   if (el[1] === 'male') {
//     return accum += el[0];
//   }
//   return accum;
// }, 0)

// console.log(totalAge);

// let totalAge = Object.entries(munsters).reduce((accum, el) => {
//   el.forEach(familyMember => {
//     if (familyMember.gender === 'male') {
//       return accum += familyMember.age;
//     }
//   })
//   return accum;
// }, 0)

// console.log(totalAge);


// One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

// PROBLEM: Given this previously seen family object, print the name, age, and gender of each family member:
  // OUTPUT: print to the console a string
  // INPUT: an object
// EXAMPLES: (Name) is a (age)-year-old (male or female).
// DATA STRUCTURES: an object, strings, possibly arrays if needed for iteration methods
// ALGORITHM
  // create an object.entries variable to store the data in a nested array
  // use .forEach to iterate over each entry
  // on each iteration print the name [0] index
  // on each iteration print the data [1]['age], [1]['gender']

// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// Object.entries(munsters).forEach(nestedArr => {
//   console.log(`${nestedArr[0][0].toUpperCase()}${nestedArr[0].slice(1)} is a ${nestedArr[1]['age']}-year-old ${nestedArr[1]['gender']}`)
// })

// let a = 2;
// let b = [5, 8];
// let arr = [a, b]; // [2, [5, 8]] note 2 is not linked to a, the primitive was put in here

// arr[0] += 2; // [4, [5, 8]] a is still 2, b remains unchanged [5, 8]
// arr[1][0] -= a; // [4, [3, 8]] a is still 2, b is changed is now [3, 8]

// // a 2
// // b [3, 8]
// // arr [4, [3, 8]]

// console.log(a);
// console.log(b);
// console.log(arr);



// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(nestedArr => {
//   nestedArr.forEach(word => {
//     word.split('').forEach(char => {
//       if ('aeiou'.includes(char)) {
//         console.log(char)
//       }
//     })
//   })
// })


// Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// let newArr = arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     return subArr.slice().sort();
//   } else {
//     return subArr.slice().sort((a, b) => a - b);
//   }
// })

// console.log(arr)
// console.log(newArr)

// let arr = [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
//   return element1.forEach(element2 => {
//     return element2.filter(element3 => {
//       return element3.length > 0;
//     });
//   });
// });

// console.log(arr)
// => [ undefined, undefined ]

// let arr = [[1], [2], [3]];

// for (let i = 0; i < arr.length; i ++) {
//   console.log(arr.filter(el => el.length > 0));
// }


// [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
//   console.log(element1)
//   return element1.forEach(element2 => {
//     console.log(element2)
//     return element2.filter(element3 => {
//       console.log(element3)
//       return element3.length > 0;
//     });
//   });
// });

// let num = 6;

// console.log(num.length)

// // console.log('a'.length)

// // => [ undefined, undefined ]

// // console.log(undefined > 1

// // console.log(Number(undefined))
// // console.log(undefined > 0)

// console.log('a'.length)



// Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

// make a deep copy of the array since it contains nested subarrays
// call .map on the copy
// create an a var and a b var
// check the type of and sort syntax based off of that

// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];


// let newArr = arr.map(subArr => {
//   let copy = subArr.slice();

//   if (typeof copy[0] === 'string') {
//     return copy.sort();
//   } else {
//     return copy.sort((a, b) => a - b)
//   }
// })

// console.log(arr);
// console.log(newArr)

// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// let newArr = arr.map(subArr => {
//   let copy = subArr.slice();

//     copy.sort((a, b) => {
//       if (a < b) {
//         return 1;
//       } else if (a > b) {
//         return -1;
//       } else {
//         return 0;
//       }
//     })
//   return copy;
// })

// console.log(arr);
// console.log(newArr)

// PROBLEM Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.
  // INPUT: array with elements that are object - careful reference pointers
  // OUTPUT: a new array identical, but with each number + 1
  // do not modify original array - deep copy needed (or can slice on each iteration)
// EXAMPLES: given
// DATA STRUCTURES; array, object, numbers
// ALGORITHM:
  // call .map on array
    // will iterate over each element
    // call object.entries to get key value pairs - this returns a new array not a reference
      // do a nested iteration on this new array, increment the value by one
    // return object.fromEntries on the incremented array
    // this all happens on each iteration to change each object


// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let newArr = arr.map(obj => {
//   let objArr = Object.entries(obj);
//   objArr.forEach(pairs => {
//     pairs[1] += 1;
//   })
//   return Object.fromEntries(objArr);  
// })

// console.log(arr);
// console.log(newArr);


// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

// can do this by setting an empty array for the subarrays
// use .map to iterate over every element
  // this will arrive to each nested object
  // for each nested object have to recreate it and increment value by 1
  // can create a copy of each nested object using Object.assign
  // now can iterate over the copied object and +1 the value - this is a nested iteration
  // return this

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let newArr = arr.map(el => {
//   let objCopy = Object.assign({}, el);

//   for (let key in objCopy) {
//     objCopy[key] += 1;
//   }

//   return objCopy;
// })

// console.log(arr);
// console.log(newArr);


// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let newArr = arr.map(obj => {
//   let newObj = {};

//   for (let key in obj) {
//     newObj[key] = obj[key] + 1;
//   }

//   return newObj;
// })

// console.log(arr);
// console.log(newArr);

// PROBLEM:  Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.
  // input, array with nested arrays
  // output, a filtered array
  // assumptions - do not modify original array - return a separate copy
  // if there are no numbers that are a multiple of three return an empty subarray? - yes

// EXAMPLES/TEST CASES: given

// DATA STRUCTURES: array of nested arrays that have numbers as elements

// ALGORITHM
  // call .map on the array - we want to map each subarray
  // on each iteration of map we can filter, call .filter on each element of outer array
  // note that .filter will return new array for each subarray, they won't be linked by a reference pointer
    // for filter do remainder 3 === 0
    // return this for the nested iteration
  // return each element in map

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let newArr = arr.map(subArr => {
//   return subArr.filter(num => num % 3 === 0);
// })

// console.log(arr);
// console.log(newArr);

// PROBLEM: Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
  // input: array of nested arrays of numbers
  // output: a sorted array based off of sum of odd numbers of nested arrays
  // note: the numbers are not sorted, just the subarrays based off of the sum
  // question: modify existing array? - no
// EXAMPLES/TEST CASES: given
// DATA STRUCTURES: arrays and numbers
// ALGORITHM
  // create a variable = to arr and call sort on this variable
  // use expanded syntax with a, b
  // within the code block create
    // oddSum variables = to .slice of a, b parameters of .sort
    // on each oddSum variable call .reduce
    // set the accum = to the total of each odd element
  // do the actual sort ON the oddSum variables - these are actually the reduced value of sum of odd nums

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// let oddlySorted = arr.slice().sort((a, b) => {
//   let oddSumA = a.reduce((accum, el) => {
//     if (el % 2 === 1) {
//       accum += el;
//     }
//     return accum;
//   }, 0)
//   let oddSumB = b.reduce((accum, el) => {
//     if (el % 2 === 1) {
//       accum += el;
//     }
//     return accum;
//   }, 0)
//   return oddSumA - oddSumB;
// })

// console.log(arr);
// console.log(oddlySorted);

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

// PROBLEM: Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.
  // input object
  // output array
  // modify original object - no
// EXAMPLES/TEST CASES: GIVEN
// DATA STRUCTURES: an object with nested objects, array that includes some nested arrays
// ALGORITHM:
  // set an empty results array
  // only need the values (which are objects) of the outer object
    // set a nestedObjects variable = Object.values, this will be an array of objects
    // iterate over this
    //set a nesteditems variable = object.values on that nested Objects
      // this will be easier to work with since all arrays
    // use conditional logic to check fruit/vegetable
    // can check the 0 index from these, the zero index is the value of type
    // if fruit 
      // create a var that is a .slice of the colors since it's an array
      // iterate over this and reassign each element uppercasing first letter
      // push this to results
    //else push the size .toUpperCase() - primitive immutable - just push to results
  //

// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let results = [];

// let values = Object.values(obj);

// values.forEach(nestedObj => {
//   let nestedVals = Object.values(nestedObj);
//   if (nestedVals[0] === 'fruit') {
//     let upperArr = [];
//     nestedVals[1].forEach(color => {
//       upperArr.push(color[0].toUpperCase() + color.slice(1));
//     })
//     results.push(upperArr);
//   } else {
//   results.push(nestedVals[2].toUpperCase());
//   }
// })

// console.log(results);

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

// PROBLEM Given the following data structure, write some code to return an array which contains only 
// the objects where all the numbers are even.
  // input: an array with nested objects that have values of arrays
  // output: similar array, but it will have only even number objects
  // probably a problem for filter
// EXAMPLES given
// DATA STRUCTURES: arrays, objects
// ALGORITHM
  
  // high level
  // need to iterate over each object
  // need to iterate over each value
  // need to know if there are any odd numbers in any of the values
    // if so we don't want that object
  // if all the numbers are even then we want that object to go to results
  //

  // iterate over the array with .reduce()
  // set accumulator as empty array []
  // set parameter of reduce as obj
  // call object .values on each obj to get an array of the subarrays with numbers
  // call for Each to get to subarray
  // call for each to get to each number
  // if num % 2 === 1
  // else accum = accum.concat the obj
      

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// function getAllNums(arr) {
//   let results = [];
//   arr.forEach(nestedArr => {
//     nestedArr.forEach(num => {
//       results.push(num);
//     })
//   })
//   return results;
// }

// let results = [];

// for (let i = 0; i < arr.length; i++) {
//   let obj = arr[i];
//   let allNums = getAllNums(Object.values(obj));
  
//   if (allNums.every(num => num % 2 === 0)) {
//     results.push(obj);
//   }
// }

// console.log(results)

// Given the following data structure, write some code that returns an object
//  where the key is the first item in each subarray, and the value is the second.

// set an empty results variable
// iterate over the array with forEach
// on each iteration
  // set the key in the new results object equal to the 0 element, the value equal to element 1

// let arrEx = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// function makeObj(arr) {
//   let results = {};

//   arr.forEach(subArr => {
//     results[subArr[0]] = subArr[1];
//   })
//   return results;
// }

// let newObj = makeObj(arrEx);

// console.log(newObj);
// arrEx[3][1] = 33333;
// console.log(newObj)
// console.log(arrEx)

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }



// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.
  // use .filter to iterate over the array - this will allow for a new returned array
  // set up object .values to get to just the values
  // use .every because we want to iterate over all of the subarrays, every one has to meet a condition
  // use .every because we want to check if every element meets a condition - this is on the element level
  // if all those meet the conditions, then return that element (the object in the initial array)
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let newArr = arr.filter(obj => {
//   let vals = Object.values(obj);
//   return vals.every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   })
// })

// console.log(newArr)

// Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.

// let arrEx = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// function makeObj(arr) {
//   let obj = {};

//   arr.forEach(subArr => {
//     obj[subArr[0]] = subArr[1];
//   })

//   return obj;
// }

// let newObj = makeObj(arrEx);

// console.log(newObj);


// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

// iterate over the outer array with .map => this will return a new array
// set a variable and b variable equal to the reduce of the sum
// sort according to this

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// let newArr = arr.slice().sort((a, b) => {
//   let aTotal = a.reduce((accum, el) => {
//     if (el % 2 === 1) {
//       accum += el;
//     }
//     return accum;
//   })
//   let bTotal = b.reduce((accum, el) => {
//     if (el % 2 === 1) {
//       accum += el;
//     }
//     return accum;
//   })
//   return aTotal - bTotal;
// })

// console.log(arr);
// console.log(newArr);


// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

// PROBLEM: Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.
  // INPUT: numbers
  // OUTPUT: rotated numbers - a new number
  // UNDERSTAND WHAT HAPPENS: if the num 1 is passed as second argument - no change.
    // rotation occurs on the right side of the number
    // the rotation is moving a single digit from it's spot to the right - all the way to the end of the number
    // the digit moved corresponds to the number passed
      // so if the number is 3, the 3rd digit from the end is moved
      // example is 735291, 3 this is changed to 735912
      // 2 is the 3rd digit from the end, that is moved to the end. Other numbers just shift over
  // QUESTIONS:
    // what if a number is passed that is larger than total digits? - assume that won't happen
    // 
// EXAMPLES: given
// DATA STRUCTURES: numbers, likely strings to convert number to strings, and likely arrays to store numbers.
  // these structures are likely needed to manipulate the number and then convert it back to a number
// ALGORITHM

// HIGH LEVEL
  // take a number and a digit locator number
  // find the corresponding digit within the number
    // use the digit locator to find that digit from the end of the number, so counting backwards from the end identify it
    // take that digit and remove it from the larger number and save it
    // put the larger number back together... the two sides next to the removed number are just put together
    // take the removed number and put it on the end
    // return the manipulated number

// DETAILED
  // create a function that takes 2 numbers as arguments, a number to maipulate and a digit locator number
  // handle the case of when 1 is passed as the second argument - just return the number
  // convert the larger number to a string and split it at the character level
    // this will produce an array of string numbers - this will be manipulated
  // using bracket notation and the digit locator, identify the digit to be removed
    // create a varible that locates it
    // can do this by searching backwards from the end of the array
    // this will work by doing length + the negative of the digit locator number
    // convert the digit locator to a negative number
    // so arr[length + negative of digit locator
  // find this and save it to a variable
  // remove this string number using .splice
  // push this number on the end of the number array
  // join the characters together
  // convert back to a number and return this modified number


// function rotateRightmostDigits(num, digitLocator) {
//   if (digitLocator === 1) return num;

//   let stringNumberArray = String(num).split('');
//   let digitToMoveIndex = stringNumberArray.length + (-digitLocator);
//   let digitToMove = stringNumberArray[stringNumberArray.length + (-digitLocator)];
  
//   stringNumberArray.splice(digitToMoveIndex, 1);
//   stringNumberArray.push(digitToMove);
  
//   return Number(stringNumberArray.join(''));
// }



// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

// PROBLEM Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

  // INPUT - a number
  // OUTPUT - number
    // don't have to worry about altering value passed - primitive value, nothing can happen to it.
  // UNDERSTAND THE PROBLEM / HIGH LEVEL
    // first step is take first digit and to put it on the end of the number
    // next take the second digit and move to the end
    // next take thrid digit and move to the end
    // next take fourth digit and move to end
    // keep doing this until the last two digits are reached - stop before doing anything to them
    // last two digits just get swapped in order
  // QUESTIONS
    // always a positive number - assume yes

// EXAMPLES/EDGE CASES
  // single digit - nothing happens just return it
  // two digits - just switch order
  // leading zero gets dropped - data manipulation should handle this, when converting a string back to a number this should take care of it.

// DATA STRUCTURES
  // numbers, strings to be able to manipulate, likely arrays to store string numbers and perform manipulation

// ALGORITHM - DETAILED
  // create a function that takes a number as an argument
  // if the length of this is 1 - just return the number passed
  // create a helper function to rotate just two digits
    // this will be used both for edge case of just a two digit number
    // also can be called upon to do the final switch of last two in a larger number
    // SEE HELPER FUNCTION ALGORITHM
  // use the helper function to handle a two digit number
  // create a helper function to move first to last - save this as a new number variable
    // SEE HELPER FUNCTION ALGORITHM
  // now we have some edge cases handled, and the first digit is already moved - we'll be further altering this new number
  // create a helper function that now starts swapping out the order
    // this is likely handled with a loop
    // SEE HELPER FUNCTION ALGORITHM
    // can save this as a number
  // Final step is to rotate the last two digits
    // call this on the modified number to this point
    // return this



  // HELPER FUNCTION ALGORITHM - rotate last two
    // create a function that takes a number as an argument
    // convert the number to a string and split
    // use bracket notation to create a new array with the elements(string numbers) from first array in reverse order (just last two)
    // join and return
    // note for a num with more digits than 2, this will be called and concatenated on the end of the number, so last two digits spliced off, passed to this, and then the return is concatenated on larger number

  // PROB NOT NEEDED: HELPER FUNCTION ALGORITHM - first to last - NOT NEEDED, LOOP CAN START AND HANDLE THIS
    // convert a number to an array of sting numbers
    // take the first number pop it, save it
    // push it on the end
    // return this new number

  // HELPER FUNCTION ALGORITHM - move incrementing index digit
    // create a function that takes a number as a argument
    // take this number and convert to array of string numbers
    // create a loop to perform the switching until last two digits are reached
      // stopping condition is important - this runs but does not affect the last two digits
      // set stopping condition to less than < length - 2. (not <=)
        // this will leave last two intact
    // let the index in question be 0, this is the first digit
      // create a digit to move variable - this is the arr[indx] and will change on each iteration
      // splice the array - removing the index value
      // push the digit to move variable
      // this changes the order correctly
      // increment the loop

// CODE WITH INTENT

// function rotateLastTwo(num) {
//   let strArr = String(num).split('');
//   return Number([strArr[1], strArr[0]].join(''));
// }

// function moveIncrementingIndexDigit(num) {
//   let strArr = String(num).split('');
//   let stopIndex = strArr.length - 2;
//   let index = 0;

//   while (index < stopIndex) {
//     let digitToMove = strArr[index];

//     strArr.splice(index, 1);
//     strArr.push(digitToMove);

//     index += 1;
//   }
//   return Number(strArr.join(''));
// }

// function isOneDigitNumber(num) {
//   if (String(num).split('').length === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isTwoDigitNumber(num) {
//   if (String(num).split('').length === 2) {
//     return true;
//   } else {
//     return false;
//   }
// }


// function anotherLastTwoRotation(num) {
//   let numArr = String(num).split('');
//   let firstPart = numArr.slice(0, numArr.length - 2);
//   let lastTwo = numArr.slice(numArr.length - 2);
//   let reordedLastTwo = [lastTwo[1], lastTwo[0]];
//   let finalArr = firstPart.concat(reordedLastTwo);

//   return Number(finalArr.join(''));
// }

// function maxRotation(num) {
//   if (isOneDigitNumber(num)) return num;
//   if (isTwoDigitNumber(num)) return rotateLastTwo(num);

//   let rotatedNumber = moveIncrementingIndexDigit(num);
  
//   return anotherLastTwoRotation(rotatedNumber);

// }



// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845


// function swapName(str) {
//   return reversed = str.split(' ').reverse().join(', ');
// }

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

// create a function that takes two numbers as arguments
// first argument is length of the result array
// second argument is the number to be multiplied
// handle edge case of a zero length array, just return empty array
// set a multiplier equal to 1
// set a loop that is <= to first argument
// push to result array the number that is multiplied - second numebr * multiplier
// increase the multiplier
// // return result array

// function sequence(arrLength, number) {
//   let results = [];
//   let multiplier = 1;
  
//   if (arrLength === 0) return results;

//   while (multiplier <= arrLength) {
//     results.push(multiplier * number);
//     multiplier += 1;
//   }
//   return results;
// }


// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []


// function reverseSentence(str) {
//   return str.split(' ').reverse().join(' ');
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"


// Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

// create a function that takes a string as an argument
// split the string at the space level to have an array of words.
// call .map on the array
// provide a function to .map if .length of word >= 5 return the split reverse join of the word at the character level
// else just return the word
// join the result array from .map at the character level

// function reverseWordsWithFiveOrMoreChars(word) {
//   if (word.length >= 5) {
//     return word.split('').reverse().join('');
//   } else {
//     return word;
//   }
// }

// // function reverseWords(str) {
// //   return str.split(' ')
// //     .map(word => {
// //       if (word.length >= 5) {
// //         return word.split('').reverse().join('');
// //       } else {
// //         return word;
// //       }
// //     })
// //     .join(' ');
// // }

// function reverseWords(str) {
//   return str.split(' ')
//     .map(reverseWordsWithFiveOrMoreChars)
//     .join(' ');
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

// let arr = ['10', '11', '9', '7', '8'];

// let newArr = [...arr].sort((a, b) => Number(b) - Number(a));

// console.log(arr);
// console.log(newArr);

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// let orderedBooks = [...books].sort((a, b) => a.published - b.published);

// console.log(books);
// console.log(orderedBooks);

// Compute and display the total age of the male members of the family.
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// console.log(Object.values(munsters).reduce((accum, el) => el.gender === 'male' ? accum += el.age : accum, 0));

// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// // (Name) is a (age)-year-old (male or female).

// Object.entries(munsters).forEach((familyMember, indx) => {
//   console.log(`${familyMember[0][0].toUpperCase()}${familyMember[0].slice(1)} is a ${familyMember[1]['age']}-year-old ${familyMember[1]['gender']}`)
// })

// let a = 2;
// let b = [5, 8];
// let arr = [a, b]; // [2, [5, 8]]

// arr[0] += 2; // a = 2, arr = [4, [5, 8]]
// arr[1][0] -= a; // a = 2, b = 3, arr = [4, [3, 8]]

// console.log(a);
// console.log(b);
// console.log(arr);

// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(subArr => {
//   subArr.forEach(word => {
//     word.split('').forEach(char => {
//       let vowels = 'aeiou';
//       if (vowels.includes(char)) {
//         console.log(char);
//       }
//     })
//   })
// })


// Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.



