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

// let arr = [{ b: 'foo' }, ['bar']];
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

// let arr = [2, 4, [6, 8]];
// let shallow = [...arr];

// let serialized = JSON.stringify(arr);
// let deep = JSON.parse(serialized);

// arr[2][1] = 66;

// console.log(arr);
// // console.log(shallow);
// console.log(deep);

// let obj = {a : 1, b : {c : 3, d : 4}};

// let shallow = Object.assign({}, obj);

// let serialized = JSON.stringify(obj);
// let deep = JSON.parse(serialized);

// obj['b']['c'] = 33;

// console.log(obj);
// // console.log(shallow);
// console.log(deep);

// let arr = [2, 4, 6, 8, [10, 12]];
// let obj = {'a' : 'ant', 'b' : 'bug', 'c' : ['cats', 'chameleons']};

// Object.freeze(arr);
// Object.freeze(obj);

// arr[0] = 3; // does not reassign this, is frozen
// obj['a'] = 'anteater'; // is frozen can't

// arr[4][0] = 1000; // this does modify becasue it is nested
// arr[4].push(200) // yes can modify

// arr[0] = 20;

// console.log(arr);

// obj['c'][0] = 'CATZ';

// obj['c'].push('kangaroos')

// console.log(obj);

// console.log(Object.isFrozen(arr));

// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?
// let arr = ['10', '11', '9', '7', '8'];
// // since these are strings convert to numbers first to sort

// arr.sort((a, b) => {
//   if (Number(a) > Number(b)) {
//     return -1;
//   } else if (Number(a) < Number(b)) {
//     return 1;
//   } else {
//     return 0;
//   }
// })

// console.log(arr);

// How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// books.sort((a, b) => {
//   return Number(a['published']) - Number(b['published']);
// })

// console.log(books);

// For each of these collection objects, demonstrate how you would access the letter g.

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// // console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// // console.log(arr2[1]['third'][0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// // console.log(arr3[2]['third'][0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// // console.log(obj1['b'][1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
// console.log((Object.keys(obj2['third'])[0]))

// For each of these collection objects, demonstrate how you would change the value 3 to 4.

// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// // console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// // console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1['first'][2][0] = 4;
// // console.log(obj1);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2['a']['a'][2] = 4;
// console.log(obj2);

// Compute and display the total age of the male members of the family.

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// algorithm
// convert to object.entries to have the key value pairs
// this also needs to be converted to object.entries since it is nested
// iterate over this and filter on male gender
// iterate over the filtered array to add all of the ages


// This works
// let munstersEntries = Object.entries(munsters);
// console.log(munstersEntries);
// let maleAgesArr = [];

// for (let i = 0; i < munstersEntries.length; i ++) {
//   if (munstersEntries[i][1]['gender'] === 'male') {
//     maleAgesArr.push(munstersEntries[i][1]['age']);
//   }
// }

// let maleAgesSummed = maleAgesArr.reduce((accum, el) => accum += el, 0);
// console.log(maleAgesSummed);

// with for in loop

// let ageSummed = 0;

// for (let el in munsters) {
//   if (el['gender' === 'male']) {
//     ageSummed += el['age'];
//   }
// }
// console.log(ageSummed);

// Given the following code, what will the final values of a and b be? Try to answer without running the code.

// let a = 2; // primitive value
// let b = [5, 8]; // array
// let arr = [a, b]; // [primitive value, pointer to an array]

// arr[0] += 2; // this changes the array but not a so a = 2; arr is [4, [5, 8]]
// arr[1][0] -= a; // a is still 2 so array is now [4, [3, 8]] b is also [3, 8] since they point to the same spot in memory



// // Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// // get the arrays with .values and flatten to iterate with for each

// console.log(Object.values(obj).flat())

// strings and letters need different versions of sort() or you could just always do it writing out the long syntax
// let arr = ['b', 'c', 'a'];
// let arr2 = [21, 3, 1];

// // arr.sort((a, b) => a - b);
// // arr2.sort((a, b) => a - b);

// arr.sort();
// arr2.sort();

// console.log(arr);
// console.log(arr2);

// let word = 'clock';

// // print all substrings

// for (let startSlice = 0; startSlice <= word.length - 2; startSlice ++) {
//   for (let numChars2Slice = 2; numChars2Slice <= word.length - startSlice; numChars2Slice ++) {
//     let endSlice = startSlice + numChars2Slice;
//     console.log(word.slice(startSlice, endSlice));
//   }
// }