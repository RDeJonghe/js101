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