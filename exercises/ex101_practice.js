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

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

// let keys = Object.keys(numberOfPets);
// let counter = 0;

// while (counter < keys.length) {
//   let pet = keys[counter];
//   let number = numberOfPets[pet];

//   console.log(`I have ${number} ${pet}`);

//   counter += 1;
// }

for (let key in numberOfPets) {
  let number = numberOfPets[key];

  console.log(`I have ${number} ${key}`);
}
