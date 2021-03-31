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

// let arr = [{ a: 'ant' }, { b: 'bear' }];

// arr[0]['c'] = 'cat';
// arr[0]['d'] = 'dog';

// console.log(arr);
// [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]

// let arr = [['a', ['b']], { b: 'bear', c: 'cat' }, 'cab'];

// console.log(arr[1].b[3]);
// console.log(arr[2][2]);
// console.log(arr[0][0]);
// console.log(arr[0][1][0]);

// let a = [1, 3];
// let b = [2];
// let arr = [a, b];
// // arr // => [ [ 1, 3 ], [ 2 ] ]

// a[0] = 12;

// // console.log(arr);

// arr[0][1] = 12;

// console.log(a);
// console.log(arr);

// let arr = [2, 4, 6];
// let arr2 = [...arr];

// arr2[0] = 22;

// console.log(arr);
// console.log(arr2);

// let arr = [2, [4, 6]];
// let arr2 = arr.slice();
// arr2.push(8);
// arr2[1].push(7);
// console.log(arr);
// console.log(arr2);

// let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
// let copyOfArr = [...arr];
// arr[1]['b'] = 'bu';
// arr.push({'d' : 'dog'});

// console.log(arr);
// console.log(copyOfArr);

// let obj1 = { a: 'foo' };
// let obj2 = { b: ['bar'] };

// Object.assign(obj1, obj2); // => { a: 'foo', b: 'bar' }
// obj2['b'][0] = 'bu';

// console.log(obj1);                      // => { a: 'foo', b: 'bar' }
// console.log(obj2);

// let obj = { a: { b: 'foo' }, c: ['bar'] };
// let copyOfObj = Object.assign({}, obj);

// obj['a']['d'] = 'baz';
// copyOfObj['d'] = 'dog'
// console.log(copyOfObj); // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
// console.log(obj);       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }

let arr = [{ b: 'foo' }, ['bar']];
// let arrShallow = arr.slice();
// arrShallow[0]['c'] = 'cat';
// arrShallow[2] = 'owl';
// console.log(arr);
// console.log(arrShallow);

// let serializedArr = JSON.stringify(arr);
// let deepCopyArr = JSON.parse(serializedArr);

// deepCopyArr[0]['b'] = 'fu';
// console.log(arr);
// console.log(deepCopyArr);

// let obj = {a : 'ant', b : ['bug']};
// // let objShallow = Object.assign({}, obj);

// // obj['d'] = 'dog';
// // obj['b'][0] = ('bird');

// // console.log(obj);
// // console.log(objShallow);

// let serializedObj = JSON.stringify(obj);
// let deepCopyObj = JSON.parse(serializedObj);
// let objShallow = Object.assign({}, obj);

// obj['b'][0] = 'bat';

// console.log(obj);
// console.log(deepCopyObj);
// console.log(objShallow);