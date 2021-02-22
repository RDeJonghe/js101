// lesson 5 practice space

// let arr = ['back', 'once', 'Again', 'aas'];
// let arr2 = arr.slice().sort();

// console.log(arr);
// console.log(arr2);

// console.log([2, 11, 9, 4, 107, 21, 1].sort((a, b) => b - a));

// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
//   console.log(`a is ${a} and b is ${b}`);
//   return a - b;
// });

// let words = ['go', 'ahead', 'and', 'jump'];
// words.sort((a, b) => a.length - b.length);
// console.log(words);

// let arr = [{ a: 'ant' }, { b: 'bear' }];

// arr[0]['c'] = 'cat';
// arr[0].d = 'dog';
// console.log(arr); // => [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]

// let arr = [6, 12, 18];
// let arr2 = [...arr, 100];
// arr2.push(24);

// console.log(arr);
// console.log(arr2);

// let obj = {a: 3, b: 2};
// let newObj = Object.assign({}, obj);
// newObj['a'] = 5;

// console.log(obj);
// console.log(newObj);

// let arr = [{ b: 'foo' }, ['bar']];
// let shallowArr = [...arr];
// let serializedArr = JSON.stringify(arr);
// let deepCopiedArr = JSON.parse(serializedArr);

// shallowArr[0]['b'] = 'FOO';
// console.log(arr);
// console.log(deepCopiedArr);
// console.log(shallowArr);

// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//   return arr.map(num => {
//     if (num > 5) {
//       return console.log(num);
//     }
//   });
// });

// console.log(myArr);

// console.log([{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
//   return Object.keys(object).some(key => object[key][0] === key);
// }));

// => [ { c: 'cat', d: 'dog' } ]

// console.log([[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
//   return arr.filter(el => {
//     if (typeof el === 'number') {
//       return el > 13;
//     }
//     if (typeof el === 'string') {
//       return el.length < 6;
//     }
//   })
// }
//  ));
// => [ [ 27 ], [ 'apple' ] ]

// let arr = [[21, 24, 'Back', 25, 37], ['back', 44, 'once', 'again']];

// let newArr = arr.map(arr => {
//   return arr.filter(el => {
//     if (typeof el === 'string') {
//       return el[0] === 'B' || el[0] === 'b';
//     }
//     if (typeof el === 'number') {
//       return el > 25;
//     }
//   })
// })

// console.log(newArr);

// let newerArr = arr[0].filter(el => {
//   return el > 25 || el.length > 0;
// }
// )
// console.log(newerArr);

// let ex = [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
//   return element1.map(element2 => {
//     return element2.filter(element3 => {
//       return element3.length > 0;
//     });
//   });
// });
// console.log(ex);
// ex.shift();


// console.log(ex);

// => [ undefined, undefined ]

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// let sorted = [...books].sort((a, b) => {
//   return a.title - b.title;
// })

// console.log(books);
// console.log(sorted);

// let renegadeMaster = ['back', 'once', 'again'];

// renegadeMaster.sort((a, b) => {return b - a});

// console.log(renegadeMaster);


// let song = [
//   {lyric: 'Back'},
//   {lyric: 'Once'},
//   {lyric: 'Again'}
// ];

// song.sort((a, b) => {
//   return b.lyric - a.lyric;
// });

// console.log(song);

// let nums = [2, 11, 9, 4, 107, 21, 1];

// nums.sort((a, b) => {
//   if (Number(b) < Number(a)) {
//     return -1;
//   }
//   if (Number(b) > Number(a)) {
//     return 1
//   }
//   return 0;
// })

// console.log(nums);

// let vowels = ['u', 'i', 'a', 'e', 'o'];

// let sorted =[...vowels].sort();
// console.log(sorted);
// console.log(vowels);

// console.log('+' < '3');

// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
//   if (a < b) {
//     console.log(a + ' <> ' + b)
//     return -1;
//   } else if (a > b) {
//     console.log(a + ' <> ' + b)
//     return 1;
//   } else {
//     console.log(a + ' <> ' + b)
//     return 0;
//   }
// }); // => [ 1, 2, 4, 9, 11, 21, 107 ]


let words = ['go', 'ahead', 'and', 'jump'];

// words.sort((a, b) => {
//   if (a.length < b.length) {
//     return -1;
//   }
//   if (a.length > b.length) {
//     return 1;
//   }
//   return 0;
// })

// console.log(words);

// words.sort(function (a, b) {
//   if (b.length < a.length) {
//     return -1;
//   }
//   if (b.length > a.length) {
//     return 1;
//   }

//   return 0;
// })
// console.log(words);

// words.sort((a, b) => {
//   return a.length - b.length;
// })

// words.sort((a, b) => b.length - a.length);

// console.log(words);

// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

// scores.sort((a, b) => {
//   let reducerA = a.reduce((accum, el) => accum + el);
//   let reducerB = b.reduce((accum, el) => accum + el);

//   return reducerA - reducerB;
// })

// console.log(scores);

// scores.sort((a, b) => {
//   const reducer = (accum, el) => accum + el;
//   return a.reduce(reducer) - b.reduce(reducer);
// })

// scores.sort(function (a, b) {
//   const reducer = (accum, el) => accum + el;
//   if (b.reduce(reducer) < a.reduce(reducer)) {
//     return -1;
//   }
//   if (b.reduce(reducer) > a.reduce(reducer)) {
//     return 1;
//   }
//   return 0;
// })

// scores.sort((a, b) => {
//   const reducer = (accum, el) => accum + el;
//   return a.reduce(reducer) - b.reduce(reducer);
// })

// console.log(scores);

// let song = ['back', 'once', 'again'];
// console.log(song);

// song.sort((a, b) => {
//   if (b < a) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
//   return 0;
// })

// song.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });

// console.log(song);

// Strings don't have access to any built-in sorting methods. However, it is easy to convert a string into an array, sort it, and then build a new string from the result.

// let str = 'renegademaster';

// console.log(str.split('')
//   .sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     return 0;
//   })
//   .join(''));

// let nums = [2, 11, 9, 4, 107, 21, 1];
// nums.sort((a, b) => b - a);
// console.log(nums);

// let letters = ['c', 'a', 'e', 'b', 'd'];
// letters.sort();

// reversedLetters = [...letters].sort((a, b) => {
//   if (b < a) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
//   return 0;
// })

// console.log(letters);
// console.log(reversedLetters);

// let nums = [2, 11, 9, 4, 107, 21, 1];

// nums.sort((a, b) => a - b);
// console.log(nums);

// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// console.log(scores);

// scores.sort((a, b) => {
//   const reducer = (accum, el) => accum + el;

//   if (a.reduce(reducer) < b.reduce(reducer)) {
//     return -1;
//   }
//   if (a.reduce(reducer) > b.reduce(reducer)) {
//     return 1;
//   }
//   return 0;
// })

// scores.sort((a, b) => {
//   const reducer = (accum, el) => accum + el;

//   return b.reduce(reducer) - a.reduce(reducer);
// })

// console.log(scores);

// let arr = ['10', '11', '9', '7', '8'];

// arr.sort(function (a, b) {
//   if (Number(b) < Number(a)) {
//     return -1;
//   }
//   if (Number(b) > Number(a)) {
//     return 1;
//   }
//   return 0;
// })

// console.log(arr);

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// // books.sort((a, b) => {
// //   return Number(a.published) - Number(b.published);
// // })

// console.log(books);

// books.sort(function (a, b) {
//   if (Number(a.published) < Number(b.published)) {
//     return -1;
//   }
//   if (Number(a.published) > Number(b.published)) {
//     return 1;
//   }
//   return 0;
// })

// console.log(books);

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// console.log(str1.startsWith('D'));
// console.log(str2.endsWith('?'));

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty('Spot'));
// console.log(ages.hasOwnProperty('Herman'));

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// let newDesc = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
// console.log(newDesc);

// console.log(false == '0');
// console.log(false === '0');

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges);
// console.log(ages);

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// console.log(advice.slice(0, advice.indexOf('house')));

// Expected return value:
// => 'Few things in life are as important as '

// let advice = "Few things in life are as important as house training your important pet dinosaur.";

// console.log(advice.replace('important', 'urgent'));

// console.log(advice.replace(/important/g, 'URGENT'));

// let str = 'Back once again, back once again, back once again';
// console.log(str.replace(/once/g, '1nce'));

// let numbers = [1, 2, 3, 4, 5];

// let reversedNums = [...numbers].reverse();
// let reversedNums = numbers.slice().sort((a, b) => {
//   if (b < a) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
//   return 0;
// });

// let reversedNums = [];

// numbers.forEach(el => {
//   reversedNums.unshift(el);
// })

// console.log(numbers);
// console.log(reversedNums);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";

// console.log('Four score and ' + famousWords);
// console.log('Four score and '.concat(famousWords));

// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// let nums = [1, 2, 3, 4, 5];

// nums.splice(2, 1, 33, 44);
// console.log(nums);

// let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// let arr = [].concat(...flintstones);
// console.log(arr);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// console.log(Object.entries(flintstones).filter(el => el[0] === 'Barney').shift());

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let statement1 = "The Flintstones Rock!";
// console.log(statement1.split('').filter(char => char === 't').length);
// let statement2 = "Easy come, easy go.";

// let numbers = [1, 2, 3, 4];

// numbers.splice(0, numbers.length);

// numbers.length = 0;
// while (numbers.length > 0) {
//   numbers.pop();
// }
// console.log(numbers);

// The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

// function isColorValid(color) {
//   return (color === 'blue') || (color === 'green');
// }

// const isColorValid = color => color === 'blue' || color === 'green';

// let munstersDescription = "The Munsters are creepy and spooky.";
// // `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// console.log(munstersDescription.split('').map(char => {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   }
//   else {
//     return char.toUpperCase();
//   }
// }).join(''));

// const ARR = [
//   { one: '1', two: 2 },
//   [ { four: 5, three: 6 }, 'three' ],
//   'three',
//   { '2': 'two', '3': 'three' }
// ]

// console.log(ARR[2]);

