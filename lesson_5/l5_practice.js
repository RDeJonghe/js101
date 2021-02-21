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

