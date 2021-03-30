// Practice for lesson 5, second time through

// let arr = [2, 11, 9, 4, 107, 21, 1];

// arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else return 0;
// })

// console.log(arr);

// let arr = ['back', 'once', 'again'];

// arr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })
// console.log(arr);

// console.log([2, 11, 9, 4, 107, 21, 1].sort());

// let arr = [2, 11, 9, 4, 107, 21, 1];

// // arr.sort((a, b) => b - a);

// // console.log(arr);

// arr.sort();
// console.log(arr);
// console.log(typeof arr[0]);

// let string = 'back once again';
// console.log(string.charAt(0).toUpperCase());
// console.log(string.charCodeAt(0));

// console.log('b'.charCodeAt());
// console.log('.'.charCodeAt());

// let arr = [2, 11, 9, 4, 107, 21, 1];

// arr.sort((a, b) => {
//   console.log(`a is ${a} and b is ${b}`);
//   return a - b;
// })

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

// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];


// // want to sort to this: [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];

// // do this with reduce!!!

// scores.sort((a, b) => {
//   let totalAScore = a.reduce((accum, el) => accum += el);
//   let totalBScore = b.reduce((accum, el) => accum += el);

//   return totalAScore - totalBScore;
// })

// console.log(scores);

// for (let i = 0; i < scores.length; i ++) {
//   scores[i].sort((a, b) => a - b);
// }

// console.log(scores);

// let scores2 = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// console.log(scores2);

// for (let i = 0; i < scores2.length; i++) {
//   scores2[i].sort((a, b) => a - b);
// }
// console.log(scores2);

// let scores2 = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

// for (let i = 0; i < scores2.length; i++) {
//   scores2[i].sort((a, b) => a - b);
// }

// console.log(scores2);

// let arr = [[1], [2]];
// arr[0].push([1.25, 1.5, 1.75]);
// console.log(arr);

// let arr = [{ a: 'ant' }, { b: 'bear' }];

// console.log(arr[0]['a']);